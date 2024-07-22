require('dotenv').config();
import mongoose from 'mongoose';

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    console.log('Mongo URI:', process.env.MONGO); // Check if this logs the correct URI
    if (!process.env.MONGO) {
      throw new Error('MONGO environment variable not defined');
    }
    const db = await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
