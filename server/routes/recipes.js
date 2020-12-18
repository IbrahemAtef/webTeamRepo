const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { addRecipe , getRecipes, editRecipe, deleteRecipe } = require('../controllers/recipes');

// @route  POST api/recipes + /addRecipe
// @desc   Register user
router.post(
  '/addRecipe',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check(
      'ingredients',
      'Please enter Ingredients with minimun 3 ingredients',
    ).isLength({ min: 3 }),
    check(
      'steps',
      'Please enter Steps with minimun 3 steps',
    ).isLength({ min: 3 }),
    check('image', 'Image is required').not().isEmpty(),
    check('type', 'Type is required').not().isEmpty(),
  ],
  addRecipe,
);

// @route  GET api/recipes
// @desc   get all recipes
router.get('/:cheifID', getRecipes);

// @route  PATCH api/recipes + /editRecipe/:_id
// @desc   Edit recipe
router.patch(
  '/editRecipe/:_id',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check(
      'ingredients',
      'Please enter Ingredients with minimun 3 ingredients',
    ).isLength({ min: 3 }),
    check(
      'steps',
      'Please enter Steps with minimun 3 steps',
    ).isLength({ min: 3 }),
    check('image', 'Image is required').not().isEmpty(),
    check('type', 'Type is required').not().isEmpty(),
  ],
  editRecipe,
);

// @route  delete api/recipes + /deleteRecipe/:_id
// @desc   delete specific recipe
router.delete('/deleteRecipe/:_id', deleteRecipe);


module.exports = router;
