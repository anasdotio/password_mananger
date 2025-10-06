const PassDao = require('../dao/PasswordDao');
const ApiError = require('../utils/apiError');
const ApiResponse = require('../utils/apiResponse');

const createPassword = async (bodyData, userId) => {
  const existingUsername = await PassDao.findByUsername(bodyData.username);

  if (existingUsername) throw new ApiError(400, 'Username is already used');

  const service = await PassDao.create(bodyData);
  await PassDao.updateUserId(service._id, userId);
  return service;
};

const getPasswords = async (userId) => {
  const passwords = await PassDao.findPasswordsByUserId(userId);

  if (!passwords || passwords.length === 0) {
    throw new ApiResponse(404, 'No passwords found for this user');
  }

  return passwords;
};

module.exports = { createPassword, getPasswords };
