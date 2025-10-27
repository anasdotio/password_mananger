const User = require('../models/user.model');

class AuthDao {
  async createUser(data) {
    return await User.create(data);
  }

  async findByEmail(email) {
    return await User.findOne({ email }).select('+password');
  }
  async findById(id) {
    return await User.findById(id);
  }

  async updateRefreshToken(id, refreshToken) {
    return await User.findByIdAndUpdate(id, { refreshToken }, { new: true });
  }

  async removeRefreshToken(id) {
    return await User.findByIdAndUpdate(id, { $unset: { refreshToken: '' } });
  }

  async findByGoogleId(googleId) {
    return await User.findOne({ googleId });
  }
}

module.exports = new AuthDao();
