import handler from '../_lib/helpers/handler';
import connectToDb from '../_lib/helpers/connectToDb';
import { Session } from '../_lib/types';
import { getDefaultStats } from '../_lib/helpers/utils';
import { WithoutId } from 'mongodb';

export default handler(async (req, res) => {
  if (req.method === 'POST') {
    return await post();
  } else {
    res.statusCode = 404;
  }
});

const post = async (): Promise<Partial<Session>> => {
  const db = await connectToDb();

  const session: WithoutId<Session> = {
    stats: getDefaultStats(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return db
    .collection<Session>('sessions')
    .insertOne(session)
    .then((r) => ({ _id: r.insertedId, email: session.email, stats: session.stats, from: session.from }));
};
