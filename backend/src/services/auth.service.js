const userDao = require('../dao/AuthDao');
const ApiError = require('../utils/apiError');

const register = async (bodyData) => {
  const { fullName, email, password } = bodyData;
  const existing = await userDao.findByEmail(email);

  if (existing) {
    throw new ApiError(400, 'Email already registered');
  }

  const user = await userDao.createUser({ fullName, email, password });

  const accessToken = await user.generateAccessToken();
  const refreshToken = await user.generateRefreshToken();

  await userDao.updateRefreshToken(user._id, refreshToken);

  return { accessToken, refreshToken };
};

module.exports = { register };
