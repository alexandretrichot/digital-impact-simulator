import handler from '../_lib/helpers/handler';
import connectToDb from '../_lib/helpers/connectToDb';

import { VercelRequest } from '@vercel/node';
import validator from '../_lib/helpers/validator';
import { Session } from '../_lib/types';
import { sessionSchema } from '../_lib/schema';

export default handler(async (req, res) => {
	if (req.method === 'POST') {
		return await post(req);
	} else {
		res.statusCode = 404;
	}
});

async function post(req: VercelRequest) {
	const session = await validator(sessionSchema, req.body);

	const db = await connectToDb();

	return (await db.collection<Session>('sessions').insertOne({
		...session,
		createdAt: new Date(),
		updatedAt: new Date(),
	})).ops[0];
}
