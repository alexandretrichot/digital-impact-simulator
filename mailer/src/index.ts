import { config } from 'dotenv';
import connectToDb, { disconnectFromDb } from './helpers/connectToDb';
import { send } from './send';
import { ObjectId } from 'mongodb';
import { err, log } from './helpers/log';

log('starting mailer');
log('configure env vars');
config();

type Session = {
	_id: ObjectId,
	email: string,
	emailDate: Date,
}

const main = async () => {
	log('connecting to db...');
	const db = await connectToDb();

	log('getting sessions...');
	const sessions = await db.collection<Session>('sessions').find({
		email: { $exists: true },
		emailDate: {
			$exists: true,
			$lte: new Date(new Date().getTime()),
		}
	}).toArray();

	log('found', sessions.length, 'sessions');

	for await (const session of sessions) {
		console.log('Treat session :', session._id.toHexString());
		log('sending mail to', session.email, 'for the session', session._id.toHexString());

		try {
			const infos = await send(session.email, session._id.toHexString());

			if (infos.rejected.includes(session.email)) throw new Error(`Rejected email ${session.email} for session id ${session._id.toHexString()}`);

			await db.collection<Session>('sessions').updateOne({ _id: session._id }, {
				$unset: {
					email: true
				}
			});

			log('session', session._id.toHexString(), 'treated');
		} catch (error) {
			err(error);
		}
	}

	log('all sessions was treated');

	disconnectFromDb();
	log('disconnected from db');
	log('finished');
}

main().catch(error => err(error));
