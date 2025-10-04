const { body } = require('express-validator');

const registerValidator = () => {
  return [
    body('fullName')
      .notEmpty()
      .withMessage('Full name is required')
      .isString()
      .withMessage('Full name must be string')
      .escape(),

    body('email')
      .notEmpty()
      .withMessage('email is required')
      .isEmail()
      .normalizeEmail()
      .withMessage('Invalid emaill address')
      .escape(),
    body('password')
      .notEmpty()
      .withMessage('password is required')
      .isLength({ min: 6 })
      .withMessage('password must be at least 6 character')
      .escape(),
  ];
};

const loginValidator = () => {
  return [
    body('email')
      .notEmpty()
      .withMessage('email is required')
      .isEmail()
      .normalizeEmail()
      .withMessage('Invalid emaill address')
      .escape(),

    body('password').notEmpty().withMessage('password is required').escape(),
  ];
};

module.exports = {
  registerValidator,
  loginValidator,
};
