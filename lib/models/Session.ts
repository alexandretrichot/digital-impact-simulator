import mongoose from 'mongoose';

mongoose.modelNames().forEach(m => mongoose.deleteModel(m));

const SessionSchema = new mongoose.Schema({
  name: String,
  users: [{ id: String, name: String, stats: Object }]
});

export default mongoose.model('Session', SessionSchema);