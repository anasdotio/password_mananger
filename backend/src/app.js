const express = require('express');
const morgan = require('morgan');
const authRoutes = require('./routes/auth.routes');
const globalErrorHandler = require('./middlewares/globalError.middleware');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/auth', authRoutes);

app.get('/check', (req, res) => {
  res.status(200).json({ message: 'server work well !' });
});

app.use(globalErrorHandler);

module.exports = app;
