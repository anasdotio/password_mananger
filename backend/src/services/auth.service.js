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

const login = async (bodyData) => {
  const { email, password } = bodyData;

  const user = await userDao.findByEmail(email);

  console.log(user);

  if (!user) throw new ApiError(400, 'Invalid credentials');

  const isMatchedPassword = await user.comparePassword(password);
  if (!isMatchedPassword) throw new ApiError(400, 'match is not correct');

  const accessToken = await user.generateAccessToken();
  const refreshToken = await user.generateRefreshToken();

  await userDao.updateRefreshToken(user._id, refreshToken);

  return { accessToken, refreshToken };
};

const logOut = async (userId) => {
  const user = await userDao.findById(userId);

  if (!user) throw new ApiError(404, 'User not found');

  await userDao.removeRefreshToken(userId);

  return { message: 'Logout successful' };
};

module.exports = { register, login, logOut };
