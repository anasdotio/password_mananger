const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log('Connect to db ✅');
  } catch (err) {
    console.error('Error occur while connect to db', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
