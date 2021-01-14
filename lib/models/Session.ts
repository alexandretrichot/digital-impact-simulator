import mongoose, { Schema, Document } from 'mongoose';

mongoose.modelNames().filter(m => m === 'Session').forEach(m => mongoose.deleteModel(m));

export interface Session extends Document {
  name: string,
  users: Schema.Types.ObjectId[]
}

const SessionSchema: Schema = new Schema({
  name: { type: String, required: true },
  users: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }]
});

export default mongoose.model<Session>('Session', SessionSchema);
