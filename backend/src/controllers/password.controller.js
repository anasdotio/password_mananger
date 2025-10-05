const passwordService = require('../services/password.service');
const ApiResponse = require('../utils/apiResponse');
const asyncWrapper = require('../utils/asyncWrapper');

const createPasswordController = asyncWrapper(async (req, res) => {
  const service = await passwordService.createPassword(req.body, req.user._id);

  return res
    .status(201)
    .json(new ApiResponse(201, 'Service created successfully', service));
});

const getPasswordsController = asyncWrapper(async (req, res) => {
    
  const passwords = await passwordService.getPasswords(req.user._id);

  return res
    .status(200)
    .json(new ApiResponse(200, 'passwords fetch successfully', passwords));
});

module.exports = {
  createPasswordController,
  getPasswordsController,
};
