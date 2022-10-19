// global error handler middleware

const errorHandler = (err, req, res, next) => {
  console.error('<ERROR HANDLER>', '\nmessage: ', err.message);
  res.status(err.code || 400).json({
    error: err.name || 'Error',
    message: err.message || 'Internal Server Error',
  });
};

module.exports = errorHandler;
