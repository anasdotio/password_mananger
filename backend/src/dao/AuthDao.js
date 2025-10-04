const User = require('../models/user.model');

class AuthDao {
  async createUser(data) {
    return await User.create(data);
  }

  async findByEmail(email) {
    return await User.findOne({ email });
  }
  async findById(id) {
    return await User.findById(id);
  }

  async updateRefreshToken(id, refreshToken) {
    

    return await User.findByIdAndUpdate(id, { refreshToken }, { new: true });
  }
}

module.exports = new AuthDao();
