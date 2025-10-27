const { Router } = require('express');

const {
  registerController,
  loginController,
  logOutController,
  meController,
  googleController,
} = require('../controllers/auth.controller');
const authValidator = require('../validators/authValidator');
const validate = require('../middlewares/validate.middleware');
const authenticate = require('../middlewares/authenticate.middleware');
const passport = require('passport');

const router = Router();

router
  .route('/register')
  .post(authValidator.registerValidator(), validate, registerController);
router
  .route('/login')
  .post(authValidator.loginValidator(), validate, loginController);
router.route('/logout').get(authenticate, logOutController);
router.route('/me').get(authenticate, meController);

// Callback route that Google will redirect to after authentication
// router.get(
//   '/google/callback',
//   passport.authenticate('google', { session: false }),
//   (req, res) => {
//     // // Generate a JWT for the authenticated user
//     // const token = jwt.sign(
//     //   { id: req.user.id, displayName: req.user.displayName },
//     //   process.env.JWT_ACCESS_TOKEN_SECRET,
//     //   { expiresIn: '1h' }
//     // );
//     // // Send the token to the client
//     // res.json({ token });

//     console.log(req.user.emails[0].value, req.user.displayName, req.user.id);

//     res.send('working bahi');
//   }
// );

router.get(
  '/google/callback',
  passport.authenticate('google', { session: false }),
  googleController
);

module.exports = router;
