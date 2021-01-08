import connectToDatabase from '../../lib/db';
import Session from '../../lib/models/Session';
import User from '../../lib/models/User';

import mongoose from 'mongoose';
import { userInfo } from 'os';

export const resolvers = {
  Query: {
    getSession: async (parent: any, args: { sessionId: string }) => {
      await connectToDatabase();

      const foundSession = await Session.findById(args.sessionId);
      await foundSession?.populate('users').execPopulate();

      return foundSession;
    },
    getUser: async (parent: any, args: { userId: string }) => {
      await connectToDatabase();

      const foundUser = await User.findById(args.userId);

      return foundUser;
    }
  },
  Mutation: {
    createUser: async (parent: any, args: { name: string, sessionId: string }) => {
      await connectToDatabase();

      const createdUser = await User.create({
        name: args.name,
        stats: {
          searches: 0,
          emailsSent: 0,
          emailsReceived: 0,
          emailsStored: 0,
          instagramPics: 0,
          snapchatPics: 0,
          gamesMinutes: 0,
          youtubeMinutes: 0,
          netflixMinutes: 0
        }
      });

      await Session.findByIdAndUpdate(args.sessionId, {
        $push: {
          users: createdUser._id
        }
      });

      return createdUser;
    },
    createSession: async (parent: any, args: { name: string }) => {
      await connectToDatabase();

      const createdSession = await Session.create({
        name: args.name,
        users: []
      });

      return createdSession._id;
    },

    updateUser: async (parent: any, args: { userId: string, user: { name: string, stats: { searches: number, emailsSent: number, emailsReceived: number, emailsStored: number, instagramPics: number, snapchatPics: number, gamesMinutes: number, youtubeMinutes: number, netflixMinutes: number } } }) => {
      await connectToDatabase();

      await User.findByIdAndUpdate(args.userId, {
        $set: {
          name: args.user.name,
          stats: args.user.stats
        }
      });
      return args.userId;
    },
    joinSession: async (parent: any, args: { sessionId: string, userId: string }) => {
      await connectToDatabase();

      const user = await User.findById(args.userId);
      if (!user) throw new Error("The user is not found");

      const session = await Session.findByIdAndUpdate(args.sessionId, {
        $push: {
          users: user._id
        }
      }, { new: true });

      return user._id;
    },
  }
};
