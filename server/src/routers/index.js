const express = require('express');

const router = express.Router();

const usersRouter = require('./usersRouter');

router.use('/api/users', usersRouter);

module.exports = router;
