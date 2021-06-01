import { VercelRequest } from '@vercel/node';
import handler from '../../_lib/helpers/handler';
import validator from '../../_lib/helpers/validator';
import connectToDb from '../../_lib/helpers/connectToDb';
import { memberUpdateSchema, sessionSchema } from '../../_lib/schema';
import { Group, Member, Session } from '../../_lib/types';
import { ObjectId } from 'mongodb';
import NotFoundError from '../../_lib/errors/NotFoundError';
import ArgsError from '../../_lib/errors/ArgsError';
import { getBody } from '../../_lib/helpers/getBody';

export default handler(async (req, res) => {
	if (!ObjectId.isValid(req.query['groupId'] as string)) throw new ArgsError('Invalid groupId');
	const groupId = new ObjectId(req.query['groupId'] as string);

	const memberId = req.query['memberId'] as string;

	switch (req.method) {
		case 'PUT': return await put(groupId, memberId, req);

		default:
			res.statusCode = 404;
			break;
	}
});


async function put(groupId: ObjectId, memberId: string, req: VercelRequest) {
	const body = await validator(memberUpdateSchema, getBody(req));

	const db = await connectToDb();

	const group = (await db.collection<Group>('groups').findOneAndUpdate({ _id: groupId, 'members.id': memberId }, {
		$set: {
			"members.$.stats": body.stats,
			"members.$.name": body.name,
			updatedAt: new Date()
		}
	}, { returnDocument: 'after' })).value;

	if (!group) throw new NotFoundError();

	return group;
}
