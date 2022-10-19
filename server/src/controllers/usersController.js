const usersService = require('../services/usersService.js');
const statusCodes = require('../constants/httpStatusCodes');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const response = await usersService.login({ email, password });
    res.status(statusCodes.ok).json(response);
  } catch (err) {
    next(err);
  }
};

const signup = async (req, res, next) => {
  try {
    const userData = req.body;
    const response = await usersService.signup(userData);
    res.status(statusCodes.created).json(response);
  } catch (err) {
    next(err);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const response = await usersService.getUserById(req.userId);
    res.status(statusCodes.ok).json(response);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
  signup,
  getUserById,
};
