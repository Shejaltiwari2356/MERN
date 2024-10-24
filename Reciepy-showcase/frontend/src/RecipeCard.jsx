// src/components/RecipeCard.js
import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.imageURL} alt={recipe.title} />
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeCard;
