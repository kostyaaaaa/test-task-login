const jwt = require('jsonwebtoken');
const { RequestError } = require('../errors');
const statusCodes = require('../constants/httpStatusCodes');
const { EMAIL_VALID_REGEX } = require('../constants/regexp');

const bodyMiddleware = (req, res, next) => {
  if (Object.keys(req.body).length) {
    next();
  } else {
    throw new RequestError('Req body is empty', statusCodes.badRequest);
  }
};

const validationMiddleware = (req, res, next) => {
  if (!EMAIL_VALID_REGEX.test(String(req.body.email).toLowerCase())) {
    throw new RequestError('Email is invalid', statusCodes.badRequest);
  }
  if (req.body.password.length < 8) {
    throw new RequestError(
      'Password is invalid, min length 8',
      statusCodes.badRequest,
    );
  }
  next();
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
  validationMiddleware,
};
