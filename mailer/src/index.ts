import { config } from 'dotenv';
import connectToDb, { disconnectFromDb } from './helpers/connectToDb';
import { send } from './send';
import { ObjectId } from 'mongodb';

config();

type Session = {
	_id: ObjectId,
	email: string,
	emailDate: Date,
}

const main = async () => {
	const db = await connectToDb();

	const sessions = await db.collection<Session>('sessions').find({
		email: { $exists: true },
		emailDate: {
			$exists: true,
			$lte: new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000 - 1 * 30 * 1000),
		}
	}).toArray();

	console.log('Collected :', sessions.length, 'sessions');

	for await (const session of sessions) {
		console.log('Treat session :', session._id.toHexString());

		try {
			const infos = await send(session.email, session._id.toHexString());

			if (infos.rejected.includes(session.email)) throw new Error(`Rejected email ${session.email} for session id ${session._id.toHexString()}`);

			await db.collection<Session>('sessions').updateOne({ _id: session._id }, {
				$unset: {
					email: true
				}
			});
		} catch (err) {
			console.error('oups', err);
		}
	}

	console.log('All sessions treated');

	disconnectFromDb();
}

main().catch(console.error);
