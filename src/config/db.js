const mongoose = require('mongoose');
const { MONGO_URI } = require('./env');

const connectDB = async () => {
  try {
    if (!MONGO_URI) {
      throw new Error('MongoDB URI not found. Set MONGODB_URI in server/.env');
    }

    const conn = await mongoose.connect(MONGO_URI);

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    throw new Error(`MongoDB connection failed: ${error.message}`);
  }
};

module.exports = connectDB;
