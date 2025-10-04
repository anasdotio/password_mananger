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

module.exports = {
  registerController,
};
