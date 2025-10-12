const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const passwordRoutes = require('./routes/password.routes');
const globalErrorHandler = require('./middlewares/globalError.middleware');
const cors = require('cors');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/passwords', passwordRoutes);

app.get('/check', (req, res) => {
  res.status(200).json({ message: 'server work well !' });
});

app.use(globalErrorHandler);

module.exports = app;
