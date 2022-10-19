const jwt = require('jsonwebtoken');

const generateToken = body => {
  const token = jwt.sign({ ...body }, process.env.JWT_SECRET_KEY, {
    expiresIn: '30d',
  });
  return token;
};

module.exports = {
  generateToken,
};
