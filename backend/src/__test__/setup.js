require('dotenv').config({ path: '.env.test' });

const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const _config = require('../config/_config');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();

  _config.MONGO_URI = mongoUri;

  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
  }

  // Connect mongoose to in-memory MongoDB
  await mongoose.connect(mongoUri);
});

afterAll(async () => {
  await mongoose.disconnect();

  if (mongoServer) {
    await mongoServer.stop();
  }
});

afterEach(async () => {
  // Clean up database after each test
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
});
