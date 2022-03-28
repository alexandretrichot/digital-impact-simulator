import { VercelRequest } from '@vercel/node';
import handler from '../_lib/helpers/handler';
import validator from '../_lib/helpers/validator';
import connectToDb from '../_lib/helpers/connectToDb';
import { sessionSchema } from '../_lib/schema';
import { Session } from '../_lib/types';
import { ObjectId } from 'mongodb';
import NotFoundError from '../_lib/errors/NotFoundError';
import ArgsError from '../_lib/errors/ArgsError';
import { getBody } from '../_lib/helpers/getBody';

export default handler(async (req, res) => {
	if (!ObjectId.isValid(req.query['id'] as string)) throw new ArgsError('Invalid sessionId');
	const sessionId = new ObjectId(req.query['id'] as string);

	switch (req.method) {
		case 'GET': return await get(sessionId);
		case 'PUT': return await put(sessionId, req);

		default:
			res.statusCode = 404;
			break;
	}
});

const get = async (sessionId: ObjectId): Promise<Partial<Session>> => {
	const db = await connectToDb();

	const session = await db.collection<Session>('sessions').findOne({ _id: sessionId });

	if (!session) throw new NotFoundError();

	return {
		_id: session._id,
		email: session.email,
		stats: session.stats,
		from: session.from,
	};
}

const put = async (sessionId: ObjectId, req: VercelRequest): Promise<Partial<Session>> => {
	const body = await validator(sessionSchema, getBody(req));

	const db = await connectToDb();

	const session = (await db.collection<Session>('sessions').findOneAndUpdate({ _id: sessionId }, {
		$set: {
			...body,
			updatedAt: new Date(),
		}
	}, { returnDocument: 'after' })).value;

	if (!session) throw new NotFoundError();

	return {
		_id: session._id,
		email: session.email,
		stats: session.stats,
		from: session.from,
	};
}
