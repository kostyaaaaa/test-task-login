const express = require('express');

const usersController = require('../controllers/usersController.js');
const usersMiddleware = require('../middleware/usersMiddleware.js');

const router = express.Router();

router.post(
  '/login',
  usersMiddleware.bodyMiddleware,
  usersMiddleware.validationMiddleware,
  usersController.login,
);
router.post(
  '/signup',
  usersMiddleware.bodyMiddleware,
  usersMiddleware.validationMiddleware,
  usersController.signup,
);
router.get(
  '/user',
  usersMiddleware.tokenMiddleware,
  usersController.getUserById,
);

module.exports = router;
