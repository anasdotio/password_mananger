const { config } = require('dotenv');
config();
const connectDB = require('./src/db/mongodb');
const app = require('./src/app');

const _config = require('./src/config/_config');

connectDB();
app
  .listen(_config.port || 8000, () => {
    console.log(`server is running on http://localhost:${_config.port}`);
  })
  .on('error', (err) =>
    console.log(`Error occur while start the server : ${err.message}`)
  );
