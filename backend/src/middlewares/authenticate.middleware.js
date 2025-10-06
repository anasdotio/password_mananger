const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const ApiError = require('../utils/apiError');

const authenticate = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.accessToken) {
    token = req.cookies.accessToken;
  }

  if (!token) throw new ApiError(401, 'Token not found. Please login.');

  try {
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) throw new ApiError(400, 'Unauthorized access');
   
    req.user = user;
    next();
  } catch (error) {
    // Handle JWT errors more clearly

    if (error.name === 'TokenExpiredError') {
      return next(new ApiError(401, 'Token expired. Please login again.'));
    }

    if (error.name === 'JsonWebTokenError') {
      return next(new ApiError(401, 'Invalid token.'));
    }
    next(error); // pass other errors to global error handler
  }
};

module.exports = authenticate;
