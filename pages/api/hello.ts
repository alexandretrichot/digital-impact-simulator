import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';
import path from 'path';

const postsPath = path.join(process.cwd(), 'db', 'posts');

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const words: string[] = await getWords();

  words.push(req.query.word as string || 'no word');

  await fs.promises.writeFile(path.join(postsPath, 'words.json'), JSON.stringify(words));

  res.statusCode = 200
  res.json(words);
}

async function getWords(): Promise<string[]> {
  try {
    return JSON.parse((await fs.promises.readFile(path.join(postsPath, 'words.json'))).toString() || '[]');
  } catch (error) {
    await fs.promises.mkdir(postsPath, { recursive: true });
    return [];
  }
}