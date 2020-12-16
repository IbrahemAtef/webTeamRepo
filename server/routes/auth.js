const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check } = require('express-validator');
const { tokenUser, loginUser } = require('../controllers/auth');

// @route  GET api/auth + /tokenUser
// @desc   Test route
router.get('/tokenUser', auth, tokenUser);

// validate login process
// @route  POST api/auth + /loginUser
// @desc   Authenticate user & get token
router.post(
  '/loginUser',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  loginUser,
);

module.exports = router;
