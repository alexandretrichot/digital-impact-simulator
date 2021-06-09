import handler from '../_lib/helpers/handler';
import connectToDb from '../_lib/helpers/connectToDb';
import { Session } from '../_lib/types';
import { getDefaultStats } from '../_lib/helpers/utils';

export default handler(async (req, res) => {
	if (req.method === 'POST') {
		return await post();
	} else {
		res.statusCode = 404;
	}
});

async function post() {
	const db = await connectToDb();

	const session = (await db.collection<Session>('sessions').insertOne({
		stats: getDefaultStats(),
		createdAt: new Date(),
		updatedAt: new Date(),
	})).ops[0];

	return {
		_id: session._id,
		email: session.email,
		stats: session.stats,
		from: session.from,
	} as Partial<Session>;
}
