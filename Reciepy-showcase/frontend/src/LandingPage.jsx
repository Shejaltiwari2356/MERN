// src/LandingPage.jsx
import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

const LandingPage = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/recipes/"); // Ensure this URL is correct
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setRecipes(data); // Ensure data contains _id
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="landing-page">
      <h1>Popular Dishes</h1>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} /> // Ensure recipe._id is defined
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
