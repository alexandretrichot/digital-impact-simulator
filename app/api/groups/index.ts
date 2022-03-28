import handler from '../_lib/helpers/handler';
import connectToDb from '../_lib/helpers/connectToDb';
import { Group } from '../_lib/types';
import { VercelRequest } from '@vercel/node';
import validator from '../_lib/helpers/validator';
import { createGroupSchema } from '../_lib/schema';
import { getBody } from '../_lib/helpers/getBody';
import { WithoutId } from 'mongodb';

export default handler(async (req, res) => {
  if (req.method === 'POST') {
    return await post(req);
  } else {
    res.statusCode = 404;
  }
});

const post = async (req: VercelRequest): Promise<Partial<Group>> => {
  const body = await validator(createGroupSchema, getBody(req));

  const db = await connectToDb();
  const col = db.collection<Group>('groups');

  const slugs = (await col.find({ slug: new RegExp(body.slug, 'i') }, { projection: { slug: 1 } }).toArray()).map((g) => g.slug);

  const slug = makeSlugUniq(body.slug, slugs);

  const group: WithoutId<Group> = {
    slug: slug,
    name: body.name || body.slug,
    members: [],

    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return col.insertOne(group).then((r) => ({
    _id: r.insertedId,
    name: group.name,
    slug: group.slug,
    members: group.members,
  }));
};

const makeSlugUniq = (slug: string, slugs: string[]) => {
  let uniq = slug;

  let i = 0;
  while (slugs.includes(uniq)) {
    i++;
    uniq = `${slug}${i}`;
  }

  return uniq;
};
