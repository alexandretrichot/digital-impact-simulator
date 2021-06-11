import { Db, MongoClient } from 'mongodb';

const dbName = 'dis';
let client: MongoClient;

export default async function connectToDb(): Promise<Db> {
	if (!client || !client.isConnected()) {
		const dbUrl = process.env['DB']!;

		client = new MongoClient(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true, connectTimeoutMS: 4000, socketTimeoutMS: 5000 });
		await client.connect();
	}

	return client.db(dbName);
}

export async function disconnectFromDb(): Promise<void> {
	return new Promise((resolve, reject) => {
		if (client && client.isConnected()) {
			client.close(true, err => {
				if (err) return reject(err);
				resolve();
			});
		}
	});
}