import handler from '../../_lib/helpers/handler';
import connectToDb from '../../_lib/helpers/connectToDb';
import { Group, Member } from '../../_lib/types';
import NotFoundError from '../../_lib/errors/NotFoundError';
import { nanoid } from 'nanoid';
import { getDefaultStats } from '../../_lib/helpers/utils';

export default handler(async (req, res) => {
  const slug = req.query['slug'] as string;

  switch (req.method) {
    case 'GET':
      return await get(slug);
    case 'POST':
      return await post(slug);

    default:
      res.statusCode = 404;
      break;
  }
});

const get = async (slug: string): Promise<Partial<Group>> => {
  const db = await connectToDb();

  const group = await db.collection<Group>('groups').findOne({ slug: { $eq: slug } });

  if (!group) throw new NotFoundError();

  return {
    _id: group._id,
    slug: group.slug,
    name: group.name,
    members: group.members,
  };
};

async function post(slug: string) {
  const db = await connectToDb();

  const group = (
    await db.collection<Group>('groups').findOneAndUpdate(
      { slug: { $eq: slug } },
      {
        $push: {
          members: {
            id: nanoid(),
            stats: getDefaultStats(),
          },
        },
      },
      { returnDocument: 'after' }
    )
  ).value;

  if (!group) throw new NotFoundError();

  const member = group.members[group.members.length - 1];

  return {
    id: member.id,
    name: member.name,
    stats: member.stats,
  } as Member;
}
