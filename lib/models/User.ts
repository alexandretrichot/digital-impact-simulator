import mongoose, { Schema, Document } from 'mongoose';

mongoose.modelNames().filter(m => m === 'User').forEach(m => mongoose.deleteModel(m));

export interface User extends Document {
  name: string,
  stats: {
    searches: number,
    emailsSent: number,
    emailsReceived: number,
    emailsStored: number,
    instagramPics: number,
    snapchatPics: number,
    gamesMinutes: number,
    youtubeMinutes: number,
    netflixMinutes: number,
  }
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
    youtubeMinutes: Number,
    netflixMinutes: Number,
  }
});

export default mongoose.model<User>('User', UserSchema);
