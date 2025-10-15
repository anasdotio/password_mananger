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
      .trim()
      .escape(),
    body('password')
      .notEmpty()
      .withMessage('password is required')
      .trim()
      .escape(),
  ];
};

module.exports = {
  createPassValidator,
};
