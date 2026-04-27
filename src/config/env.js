require('dotenv').config();

const PORT = process.env.PORT ? Number(process.env.PORT) : 5055;

module.exports = {
  PORT,
  MONGO_URI: process.env.MONGODB_URI || process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET || 'this is our project secret key',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d'
};
