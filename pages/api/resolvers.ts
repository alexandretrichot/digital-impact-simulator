import connectToDatabase from '../../lib/db';
import Session from '../../lib/models/Session';
import User, { User as UserType } from '../../lib/models/User';

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
          cloudGamesMinutes: 0,
          youtubeMinutes: 0,
          netflixMinutes: 0,
          spotifyMinutes: 0
        }
      });

      await Session.findByIdAndUpdate(args.sessionId, {
        $push: {
          users: createdUser._id
        }
      });

      return createdUser;
    },
    addUserToSession: async (parent: any, args: { sessionId: string, userId: string }) => {
      await connectToDatabase();

      const user = await User.findById(args.userId);
      if (!user) throw new Error("No user found for id :" + args.userId);

      const session = await Session.findById(args.sessionId);

      if (!session) throw new Error("No session found for id :" + args.sessionId);

      if (!session.users.find(u => u.toString() === user._id.toString())) {
        await Session.findByIdAndUpdate(session.id, {
          $push: {
            users: user._id
          }
        });
      }

      return user;
    },
    createSession: async (parent: any, args: { name: string }) => {
      await connectToDatabase();

      const createdSession = await Session.create({
        name: args.name,
        users: []
      });

      return createdSession._id;
    },
    updateUser: async (parent: any, args: { userId: string, user: UserType }) => {
      await connectToDatabase();

      await User.findByIdAndUpdate(args.userId, {
        $set: {
          name: args.user.name,
          stats: args.user.stats
        }
      });
      return args.userId;
    }
  }
};
