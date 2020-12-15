import { NextApiRequest, NextApiResponse } from 'next'

import connectToDatabase from '../../../lib/db';
import Session from '../../../lib/models/Session';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();
  
  switch (req.method) {
    /* case 'PUT':
      return res.json(await sessions.create(req)); */
    default:
      return res.json(await Session.find({}));
  }
}
