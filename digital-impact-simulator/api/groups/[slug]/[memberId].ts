import { VercelRequest } from '@vercel/node';
import handler from '../../_lib/helpers/handler';
import validator from '../../_lib/helpers/validator';
import connectToDb from '../../_lib/helpers/connectToDb';
import { memberUpdateSchema } from '../../_lib/schema';
import { Group } from '../../_lib/types';
import NotFoundError from '../../_lib/errors/NotFoundError';
import { getBody } from '../../_lib/helpers/getBody';

export default handler(async (req, res) => {
	const groupSlug = req.query['slug'] as string;

	const memberId = req.query['memberId'] as string;

	switch (req.method) {
		case 'PUT': return await put(groupSlug, memberId, req);

		default:
			res.statusCode = 404;
			break;
	}
});


async function put(groupSlug: string, memberId: string, req: VercelRequest) {
	const body = await validator(memberUpdateSchema, getBody(req));

	const db = await connectToDb();

	const group = (await db.collection<Group>('groups').findOneAndUpdate({ slug: groupSlug, 'members.id': memberId }, {
		$set: {
			"members.$.stats": body.stats,
			"members.$.name": body.name,
			updatedAt: new Date()
		}
	}, { returnDocument: 'after' })).value;

	if (!group) throw new NotFoundError();

	return group;
}
