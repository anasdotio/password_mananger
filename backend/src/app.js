const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const passwordRoutes = require('./routes/password.routes');
const globalErrorHandler = require('./middlewares/globalError.middleware');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const { Strategy: GoogleStrategy } = require('passport-google-oauth20');

const app = express();
app.use(passport.initialize());

// Configure Passport to use Google OAuth 2.0 strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      // Here, you would typically find or create a user in your database
      // For this example, we'll just return the profile
      return done(null, profile);
    }
  )
);

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/passwords', passwordRoutes);

// Route to initiate Google OAuth flow
app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/check', (req, res) => {
  res.status(200).json({ message: 'server work well !' });
});

app.get('*name', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use(globalErrorHandler);

module.exports = app;
