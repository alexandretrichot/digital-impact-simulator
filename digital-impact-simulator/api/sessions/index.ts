import handler from '../_lib/helpers/handler';
import connectToDb from '../_lib/helpers/connectToDb';
import { Session } from '../_lib/types';

export default handler(async (req, res) => {
	if (req.method === 'POST') {
		return await post();
	} else {
		res.statusCode = 404;
	}
});

async function post() {
	const db = await connectToDb();

	return (await db.collection<Session>('sessions').insertOne({
		stats: {
			searches: 0,
			emailsReceived: 0,
			emailsSent: 0,
			instagramPics: 0,
			snapchatPics: 0,
			onlineGamesMinutes: 0,
			cloudGamesMinutes: 0,
			youtubeMinutes: 0,
			netflixMinutes: 0,
			musicMinutes: 0,
		},
		createdAt: new Date(),
		updatedAt: new Date(),
	})).ops[0];
}
