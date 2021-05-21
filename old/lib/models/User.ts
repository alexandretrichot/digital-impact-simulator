import mongoose, { Schema, Document } from 'mongoose';

mongoose.modelNames().filter(m => m === 'User').forEach(m => mongoose.deleteModel(m));

export interface UserStats {
  searches: number,
  emailsSent: number,
  emailsReceived: number,
  emailsStored: number,
  instagramPics: number,
  snapchatPics: number,
  gamesMinutes: number,
  cloudGamesMinutes: number,
  youtubeMinutes: number,
  netflixMinutes: number,
  spotifyMinutes: number
}

export interface User extends Document {
  name: string,
  stats: UserStats
}

const UserSchema: Schema = new Schema({
  name: String,
  stats: {
    searches: Number,
    emailsSent: Number,
    emailsReceived: Number,
    emailsStored: Number,
    instagramPics: Number,
    snapchatPics: Number,
    gamesMinutes: Number,
    cloudGamesMinutes: Number,
    youtubeMinutes: Number,
    netflixMinutes: Number,
    spotifyMinutes: Number
  }
});

export default mongoose.model<User>('User', UserSchema);
