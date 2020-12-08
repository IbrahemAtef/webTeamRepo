const mongoose = require('mongoose')

const SaveRecipeSchema = new mongoose.Schema({
  userID: { type: String, required: true },
  recipeID: { type: String, required: true },
})

module.exports = mongoose.model('SaveRecipes', SaveRecipeSchema)
