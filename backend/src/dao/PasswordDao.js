const Password = require('../models/password.model');

class PassDao {
  async create(data) {
    return await Password.create(data);
  }

  async updateUserId(id, userId) {
    return await Password.findByIdAndUpdate(id, { userId }, { new: true });
  }

  async findPasswordsByUserId(userId) {
    return await Password.find({ userId });
  }

  async findByUsername(username) {
    return await Password.findOne({ username });
  }
}

module.exports = new PassDao();
