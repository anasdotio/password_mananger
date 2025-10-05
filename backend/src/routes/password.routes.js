const { Router } = require('express');

const passwordValidator = require('../validators/passwordValidator');
const validate = require('../middlewares/validate.middleware');
const authenticate = require('../middlewares/authenticate.middleware');
const {
  createPasswordController,
  getPasswordsController,
} = require('../controllers/password.controller');

const router = Router();

router
  .route('/')
  .post(
    passwordValidator.createPassValidator(),
    validate,
    authenticate,
    createPasswordController
  )
  .get(authenticate, getPasswordsController);
module.exports = router;
