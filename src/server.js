require('dotenv').config(); // MUST be first

const app = require('./app');
const connectDB = require('./config/db');
const { PORT } = require('./config/env');

const listen = (port) => {
  const numericPort = Number(port);

  return new Promise((resolve, reject) => {
    const server = app.listen(numericPort, () => {
      console.log(`Server running on http://localhost:${numericPort}`);
      resolve(server);
    });

    server.once('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        console.log(`Port ${numericPort} is in use. Retrying on ${numericPort + 1}...`);
        listen(numericPort + 1).then(resolve).catch(reject);
        return;
      }

      reject(error);
    });
  });
};

const startServer = async () => {
  try {
    await connectDB();
    await listen(PORT);
  } catch (error) {
    console.error('Server startup failed:', error.message);
    process.exit(1);
  }
};

startServer();
