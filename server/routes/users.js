const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { createUser, getCheifs, editUser } = require('../controllers/users');

// @route  POST api/users + /createUser
// @desc   Register user
router.post(
  '/createUser',
  [
    check('userName', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters',
    ).isLength({ min: 6 }),
    check('type', 'Type is required').not().isEmpty(),
  ],
  createUser,
);

// @route  GET api/users + /cheifs
// @desc   get all cheifs
router.get('/cheifs', getCheifs);

// @route  PATCH api/users + /editUser
// @desc   Register user
router.patch(
  '/editUser',
  [
    check('userName', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters',
    ).isLength({ min: 6 }),
    check('type', 'Type is required').not().isEmpty(),
  ],
  editUser,
);

module.exports = router;
