import { VercelRequest } from '@vercel/node';
import handler from '../../_lib/helpers/handler';
import validator from '../../_lib/helpers/validator';
import connectToDb from '../../_lib/helpers/connectToDb';
import { createMemberSchema } from '../../_lib/schema';
import { Group, Member } from '../../_lib/types';
import { ObjectId } from 'mongodb';
import NotFoundError from '../../_lib/errors/NotFoundError';
import ArgsError from '../../_lib/errors/ArgsError';
import { getBody } from '../../_lib/helpers/getBody';
import { nanoid } from 'nanoid';
import { getDefaultStats } from '../../_lib/helpers/utils';

export default handler(async (req, res) => {
	if (!ObjectId.isValid(req.query['groupId'] as string)) throw new ArgsError('Invalid groupId');
	const groupId = new ObjectId(req.query['groupId'] as string);

	switch (req.method) {
		case 'GET': return await get(groupId);
		case 'POST': return await post(groupId, req);

		default:
			res.statusCode = 404;
			break;
	}
});

async function get(groupId: ObjectId) {
	const db = await connectToDb();

	const group = await db.collection<Group>('groups').findOne({ _id: groupId });

	if (!group) throw new NotFoundError();

	return group;
}

async function post(groupId: ObjectId, req: VercelRequest) {
	const body = await validator(createMemberSchema, getBody(req));

	const db = await connectToDb();

	const group = (await db.collection<Group>('groups').findOneAndUpdate({ _id: groupId }, {
		$push: {
			members: {
				id: nanoid(),
				name: body.name,
				stats: getDefaultStats(),
			}
		}
	}, { returnDocument: 'after' })).value;

	if (!group) throw new NotFoundError();

	const member = group.members[group.members.length - 1];

	return {
		id: member.id,
		name: member.name,
		stats: member.stats
	} as Member;
}
