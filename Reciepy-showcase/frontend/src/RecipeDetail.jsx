// src/components/RecipeDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true); // Start loading
      try {
        const response = await axios.get(
          `http://localhost:5000/api/recipes/${id}`
        );
        console.log("Recipe API Response:", response.data); // Log the response data
        setRecipe(response.data.data); // Set the recipe data (assuming your response structure is { success: true, data: recipe })
      } catch (error) {
        console.error("Error fetching recipe:", error);
        setError("Failed to fetch recipe. Please try again later.");
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchRecipe();
  }, [id]); // Run this effect when the ID changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!recipe) return <p>No recipe found.</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.imageURL} alt={recipe.title} />
      <p>{recipe.description}</p>
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p>{recipe.instructions}</p>
      <h2>Preparation Time</h2>
      <p>{recipe.preparationTime}</p>
    </div>
  );
};

export default RecipeDetail;
