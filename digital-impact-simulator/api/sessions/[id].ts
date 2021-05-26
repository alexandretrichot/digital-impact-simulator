import { VercelRequest } from '@vercel/node';
import handler from '../_lib/helpers/handler';
import validator from '../_lib/helpers/validator';
import connectToDb from '../_lib/helpers/connectToDb';
import { sessionSchema } from '../_lib/schema';
import { Session } from '../_lib/types';
import { ObjectId } from 'mongodb';
import NotFoundError from '../_lib/errors/NotFoundError';
import ArgsError from '../_lib/errors/ArgsError';

export default handler(async (req, res) => {
	if(req.method === 'GET') {
		return await get(req);
	}else if (req.method === 'PUT') {
		return await put(req);
	} else {
		res.statusCode = 404;
	}
});

async function get(req: VercelRequest) {
	let sessionId;
	try {
		sessionId = new ObjectId(req.query['id'] as string)
	} catch (err) {
		throw new ArgsError(err.message);
	}

	const db = await connectToDb();

	const session = await db.collection<Session>('sessions').findOne({ _id: sessionId});

	if(!session) throw new NotFoundError();

	return session;
}

async function put(req: VercelRequest) {
	let sessionId;
	try {
		sessionId = new ObjectId(req.query['id'] as string)
	} catch (err) {
		throw new ArgsError(err.message);
	}

	const body = await validator(sessionSchema, req.body);

	const db = await connectToDb();

	const session = (await db.collection<Session>('sessions').findOneAndUpdate({ _id: sessionId },{
		$set: {
			...body,
			updatedAt: new Date(),
		}
	}, { returnDocument: 'after' })).value;

	if(!session) throw new NotFoundError();

	return session;
}
