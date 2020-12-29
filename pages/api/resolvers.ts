import connectToDatabase from '../../lib/db';
import Session from '../../lib/models/Session';

import mongoose from 'mongoose';

export const resolvers = {
  Query: {
    getSession: async (parent: any, args: { id: string }, context: any) => {
      await connectToDatabase();

      const foundSession = await Session.findById(args.id);

      //console.log(foundSession);

      if (!foundSession) throw new Error('No session found');

      return foundSession;
    }
  },
  Mutation: {
    createSession: async (parent: any, args: { name: string }, context: any) => {
      await connectToDatabase();

      const createdSession = await Session.create({
        name: args.name,
        users: []
      } as any);

      return createdSession._id;
    },
    joinSession: async (parent: any, args: { sessionId: string }, context: any) => {
      await connectToDatabase();

      const session = (await Session.findByIdAndUpdate(args.sessionId, {
        $push: {
          users: {}
        }
      }, { new: true })) as any;

      return session.users.slice().pop()._id;
    },
    updateUser: async (parent: any, args: { sessionId: string, userId: string, user: any }, context: any) => {
      await connectToDatabase();

      //console.log(args.user);

      const session = await Session.findByIdAndUpdate(args.sessionId, {
        $set: {
          "users.$[userId].name": args.user.name,
          "users.$[userId].stats": args.user.stats
        }
      }, {
        arrayFilters: [
          { 'userId._id': mongoose.Types.ObjectId(args.userId) }
        ],
        new: true
      });
      return args.userId;
    }
  }
};
