import { NextApiRequest, NextApiResponse } from 'next'

import connectToDatabase from '../../../../lib/db';
import Session from '../../../../lib/models/Session';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  switch (req.method) {
    /* case 'POST': // update
      return res.json(await sessions.update(req)); */
    default:
      if(req.query.id.length !== 24) {
        res.statusCode = 401;
        return res.json(null);
      }

      const session = await Session.findById(req.query.id);

      res.statusCode = session ? 200 : 404;
      return res.json(session);
  }
}
