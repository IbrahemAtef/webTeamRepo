const express = require('express');
const router = express.Router();
const {
  addRecipe,
  getRecipes,
  deleteRecipe,
} = require('../controllers/recipes');

// @route  POST api/recipes + /addRecipe
// @desc   Register user
router.post('/addRecipe', addRecipe);

// @route  GET api/recipes
// @desc   get all recipes
router.get('/:cheifID', getRecipes);

// @route  delete api/recipes + /deleteRecipe/:_id
// @desc   delete specific recipe
router.delete('/deleteRecipe/:_id', deleteRecipe);

module.exports = router;
