const Recipe = require('../models/Recipe');
const { validationResult } = require('express-validator');

module.exports.addRecipe = async (req, res) => {
  const {
    title,
    description,
    ingredients,
    steps,
    image,
    type,
    cheifID,
  } = req.body;

  try {
    // See if recipe exists
    let recipe = await Recipe.findOne({ title });
    if (recipe) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'Recipw already exists' }] });
    }

    // make new recipe
    recipe = new Recipe({
      title,
      description,
      ingredients,
      steps,
      image,
      type,
      cheifID,
    });

    // save recipe to database
    await recipe.save();
    res.send('Recipe added successfuly');
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports.getRecipes = async (req, res) => {
  const { cheifID } = req.params;
  try {
    let recipesByCheifID = await Recipe.find({ cheifID });
    res.json(recipesByCheifID);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

module.exports.deleteRecipe = async (req, res) => {
  const { _id } = req.params;
  try {
    await Recipe.deleteOne({_id});
    res.json({msg : "Your Recipe has been deleted"})
  } catch (error) {
    res.json({msg : "Failed to delete Recipe"})
  }
};
