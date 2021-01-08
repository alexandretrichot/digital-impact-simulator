import mongoose from 'mongoose';

let isConnected: number = 0;

export default async function connectToDatabase() {
  if (isConnected) {
    //console.log('=> using existing database connection');
    return Promise.resolve();
  }

  //console.log('=> using new database connection');
  return await mongoose.connect(process.env.DB as string, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
    .then(db => {
      isConnected = db.connections[0].readyState;
    });
};

