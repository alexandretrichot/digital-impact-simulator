import { VercelRequest } from '@vercel/node';
import handler from '../../_lib/helpers/handler';
import validator from '../../_lib/helpers/validator';
import connectToDb from '../../_lib/helpers/connectToDb';
import { memberUpdateSchema } from '../../_lib/schema';
import { Group } from '../../_lib/types';
import NotFoundError from '../../_lib/errors/NotFoundError';
import { getBody } from '../../_lib/helpers/getBody';

export default handler(async (req, res) => {
  const groupSlug = req.query['slug'] as string;

  const memberId = req.query['memberId'] as string;

  switch (req.method) {
    case 'PUT':
      return await put(groupSlug, memberId, req);
    default:
      res.statusCode = 404;
      break;
  }
});

const put = async (groupSlug: string, memberId: string, req: VercelRequest): Promise<string> => {
  const body = await validator(memberUpdateSchema, getBody(req));

  const db = await connectToDb();

  return db
    .collection<Group>('groups')
    .updateOne(
      { slug: groupSlug, 'members.id': memberId },
      {
        $set: {
          'members.$.stats': body.stats,
          'members.$.name': body.name,
          updatedAt: new Date(),
        },
      }
    )
    .then((r) => {
      if (r.modifiedCount === 0) throw new NotFoundError();

      return JSON.stringify('ok');
    });
};
