const authService = require('../services/auth.service');
const asyncWrapper = require('../utils/asyncWrapper');
const ApiResponse = require('../utils/apiResponse');

const registerController = asyncWrapper(async (req, res) => {
  const { accessToken, refreshToken } = await authService.register(req.body);

  return res
    .status(201)
    .cookie('accessToken', accessToken)
    .cookie('refreshToken', refreshToken)
    .json(new ApiResponse(201, 'User registered successfully', accessToken));
});
const loginController = asyncWrapper(async (req, res) => {
  const { accessToken, refreshToken } = await authService.login(req.body);

  return res
    .status(200)
    .cookie('accessToken', accessToken)
    .cookie('refreshToken', refreshToken)
    .json(new ApiResponse(200, 'User loggedIn successfully', accessToken));
});

const logOutController = asyncWrapper(async (req, res) => {
  const { _id } = req.user;
  const { message } = await authService.logOut(_id);

  // clear access token cookie

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Strict',
  };

  res.clearCookie('accessToken', options).clearCookie('refreshToken', options);

  return res.status(200).json(new ApiResponse(200, message));
});

const meController = asyncWrapper(async (req, res) => {
  const { _id } = req.user;
  const user = await authService.authMe(_id);

  return res
    .status(200)
    .json(new ApiResponse(201, 'User fetch successfully', user));
});

module.exports = {
  registerController,
  loginController,
  logOutController,
  meController,
};
