const jwt = require('jsonwebtoken');
const { RequestError } = require('../errors');
const statusCodes = require('../constants/httpStatusCodes');

const bodyMiddleware = (req, res, next) => {
  if (Object.keys(req.body).length) {
    next();
  } else {
    throw new RequestError('Req body is empty', statusCodes.badRequest);
  }
};

const tokenMiddleware = (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split('Bearer ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.userId = decoded.id;
      next();
    } else {
      throw new Error('Unauthorized, please provide valid access token');
    }
  } catch (err) {
    throw new RequestError(err.message, statusCodes.unauthorized, err.name);
  }
};

module.exports = {
  tokenMiddleware,
  bodyMiddleware,
};
