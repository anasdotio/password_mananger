require('dotenv').config();
const _config = {
  PORT: process.env.PORT,
  JWT_ACCESS_TOKEN_SECRET: process.env.JWT_ACCESS_TOKEN_SECRET,
  JWT_REFRESH_TOKEN_SECRET: process.env.JWT_REFRESH_TOKEN_SECRET,
  MONGO_URI: process.env.MONGO_URI,
};

module.exports = Object.freeze(_config);
