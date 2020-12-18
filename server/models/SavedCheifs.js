const mongoose = require('mongoose')

const SaveRecipeSchema = new mongoose.Schema({
  userID: { type: String, required: true },
  cheifID: { type: String, required: true },
})

module.exports = mongoose.model('SaveRecipes', SaveRecipeSchema)
