const { Schema, model } = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const _config = require('../config/_config');

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  return (this.password = await bcryptjs.hash(this.password, 10));
});

userSchema.methods.comparePassword = async function (password) {
  return await bcryptjs.compare(password, this.password);
};

userSchema.methods.generateAccessToken = async function () {
  const payLoad = {
    id: this._id,
  };

  return jwt.sign(payLoad, _config.JWT_ACCESS_TOKEN_SECRET);
};
userSchema.methods.generateRefreshToken = async function () {
  const payLoad = {
    id: this._id,
  };
  return jwt.sign(payLoad, _config.JWT_REFRESH_TOKEN_SECRET);
};

module.exports = model('User', userSchema);
