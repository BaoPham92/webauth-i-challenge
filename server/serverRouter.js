const bcrypt = require('bcryptjs');
const router = require('express').Router();
const authRouter = require('./auth/authRouter');
const usersRouter = require('./users/users-router');

// * ROUTES
router.use('/auth', authRouter);
router.use('/users', usersRouter);

module.exports = router;