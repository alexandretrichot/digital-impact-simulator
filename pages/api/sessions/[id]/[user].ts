import { NextApiRequest, NextApiResponse } from 'next'

import * as sessions from '../../../../lib/routes/sessions';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    //case 'POST': // update user
      //return res.json(await sessions.updateUser(req));
    default:
      return res.json(await sessions.getOne(req));
  }
}
