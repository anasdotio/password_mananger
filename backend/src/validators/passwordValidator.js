const { body } = require('express-validator');

const createPassValidator = () => {
  return [
    body('service')
      .notEmpty()
      .withMessage('service is required')
      .isString()
      .withMessage('service must be string')
      .trim()
      .escape(),
    body('username')
      .notEmpty()
      .withMessage('username is required')
      .isString()
      .withMessage('username must be string')
      .trim()
      .escape(),
    body('password')
      .notEmpty()
      .withMessage('password is required')
      .isString()
      .withMessage('password must be string')
      .trim()
      .escape(),
  ];
};

module.exports = {
  createPassValidator,
};
