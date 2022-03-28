import { Db, MongoClient } from 'mongodb';

const dbName = 'dis';
let client: MongoClient | null;

export default async function connectToDb(): Promise<Db> {
  if (!client) {
    const dbUrl = process.env['DB']!;

    client = new MongoClient(dbUrl, { connectTimeoutMS: 4000, socketTimeoutMS: 5000 });
    await client.connect();
  }

  return client.db(dbName);
}

export async function disconnectFromDb(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (client) {
      client.close(true, (err) => {
        if (err) return reject(err);
        resolve();
      });
      client = null;
    }
  });
}
