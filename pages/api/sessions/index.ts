import { NextApiRequest, NextApiResponse } from 'next'

import * as sessions from '../../../lib/routes/sessions';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'PUT':
      return res.json(await sessions.create(req));
    default:
      return res.json(await sessions.getAll());
  }
}
