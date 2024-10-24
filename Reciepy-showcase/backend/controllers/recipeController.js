const Recipe = require('../models/recipe-model'); // Adjust the path as necessary

// Get all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json({ success: true, data: recipes });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching recipes', error });
  }
};

// Get a single recipe by ID
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ success: false, message: 'Recipe not found' });
    }
    res.status(200).json({ success: true, data: recipe });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching recipe', error });
  }
};

// Create a new recipe
exports.createRecipe = async (req, res) => {
  const { title, imageURL, description, ingredients, instructions, preparationTime } = req.body;
  try {
    const newRecipe = new Recipe({
      title,
      imageURL,
      description,
      ingredients,
      instructions,
      preparationTime,
    });

    const savedRecipe = await newRecipe.save();
    res.status(201).json({ success: true, data: savedRecipe });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Error creating recipe', error });
  }
};

// Update a recipe by ID
exports.updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedRecipe) {
      return res.status(404).json({ success: false, message: 'Recipe not found' });
    }
    res.status(200).json({ success: true, data: updatedRecipe });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Error updating recipe', error });
  }
};

// Delete a recipe by ID
exports.deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe) {
      return res.status(404).json({ success: false, message: 'Recipe not found' });
    }
    res.status(200).json({ success: true, message: 'Recipe deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting recipe', error });
  }
};
