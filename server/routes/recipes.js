const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const {
  addRecipe,
  getRecipes,
  editRecipe,
  deleteRecipe,
} = require('../controllers/recipes');

// @route  POST api/recipes + /addRecipe
// @desc   Register user
router.post('/addRecipe', addRecipe);

// @route  GET api/recipes
// @desc   get all recipes
router.get('/:cheifID', getRecipes);

// @route  PATCH api/recipes + /editRecipe/:_id
// @desc   Edit recipe
router.patch('/editRecipe/:_id', editRecipe);

// @route  delete api/recipes + /deleteRecipe/:_id
// @desc   delete specific recipe
router.delete('/deleteRecipe/:_id', deleteRecipe);

module.exports = router;
