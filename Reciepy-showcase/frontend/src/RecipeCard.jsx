// src/RecipeCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.imageURL} alt={recipe.title} />
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <Link to={`/recipe/${recipe._id}`}>View Recipe</Link>{" "}
      {/* This should link correctly */}
    </div>
  );
};

export default RecipeCard;
