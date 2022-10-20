const { generateToken } = require('../utils/tokenUtils');
const User = require('../models/usersModel');
const bcrypt = require('bcrypt');
const { RequestError } = require('../errors');
const statusCodes = require('../constants/httpStatusCodes');

const bcryptSalt = 4;

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new RequestError('User not found', statusCodes.notFound);
  }
  const result = await bcrypt.compare(password, user.password);
  if (result) {
    const token = generateToken({
      id: user.id,
    });
    return token;
  } else {
    throw new RequestError('Password is incorrect', statusCodes.badRequest);
  }
};

const signup = async userData => {
  try {
    const hashedPassword = await bcrypt.hash(userData.password, bcryptSalt);
    const user = await User.create({ ...userData, password: hashedPassword });
    const token = generateToken({
      id: user.id,
    });
    return token;
  } catch (err) {
    if (err.name.startsWith('Sequelize')) {
      throw new RequestError(
        err.errors[0].message,
        statusCodes.alreadyExists,
        err.name,
      );
    } else {
      throw err;
    }
  }
};

const getUserById = async id => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  if (!user) {
    throw new RequestError('User not found', statusCodes.notFound);
  } else {
    return user;
  }
};

module.exports = {
  login,
  signup,
  getUserById,
};
