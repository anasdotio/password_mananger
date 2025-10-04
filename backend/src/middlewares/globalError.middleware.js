const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  const message = err.message || 'something went wrong';

  const response = {
    success: false,
    statusCode,
    message,
    errors: err.errors || [],
  };

  if (process.env.NODE_ENV !== 'production') {
    response.stack = err.stack;
  }

  return res.status(statusCode).json(response);
};

module.exports = globalErrorHandler;
