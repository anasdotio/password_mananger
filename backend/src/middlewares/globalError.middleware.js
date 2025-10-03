const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  const message = err.messaage || "something went wrong";

  const stack =
    process.env.NODE_ENV === "production" ? "something went wrong" : err.stack;

  return res
    .status(statusCode)
    .json({ msg: message, error: stack, success: false });
};

module.exports = globalErrorHandler;
