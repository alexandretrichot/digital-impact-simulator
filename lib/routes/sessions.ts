import { NextApiRequest } from 'next';
import connectToDatabase from '../db';
import Session from '../models/Session';

export async function create(req: NextApiRequest) {
  await connectToDatabase();

  return await Session.create(JSON.parse(req.body));
}

export async function getAll() {
  await connectToDatabase();

  return await Session.find();
}

export async function getOne(req: NextApiRequest) {
  await connectToDatabase();

  return await Session.findById(req.query.id);
}

export async function update(req: NextApiRequest) {
  await connectToDatabase();

  return await Session.findByIdAndUpdate(req.query.id, JSON.parse(req.body), { new: true });
}

export async function deleteOne(req: NextApiRequest) {
  await connectToDatabase();

  return await Session.findByIdAndRemove(req.query.id);
}