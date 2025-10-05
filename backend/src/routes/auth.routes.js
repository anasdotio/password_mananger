const { Router } = require('express');

const {
  registerController,
  loginController,
  logOutController,
  meController,
} = require('../controllers/auth.controller');
const authValidator = require('../validators/authValidator');
const validate = require('../middlewares/validate.middleware');
const authenticate = require('../middlewares/authenticate.middleware');

const router = Router();

router
  .route('/register')
  .post(authValidator.registerValidator(), validate, registerController);
router
  .route('/login')
  .post(authValidator.loginValidator(), validate, loginController);
router.route('/logout').get(authenticate, logOutController);
router.route('/me').get(authenticate, meController);

module.exports = router;
