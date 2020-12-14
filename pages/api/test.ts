import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    fs.accessSync(process.cwd(), fs.constants.W_OK);
    res.json('ok');
  } catch (error) {
    res.json('not writable');
  }
}
