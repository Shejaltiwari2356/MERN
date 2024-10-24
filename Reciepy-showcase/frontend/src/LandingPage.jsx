// src/components/LandingPage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true); // Start loading
      try {
        const response = await axios.get("http://localhost:5000/api/recipes/");
        console.log("API Response:", response.data); // Log the response data

        // If response contains an array of recipes
        if (Array.isArray(response.data.data)) {
          setRecipes(response.data.data);
        } else if (response.data.data) {
          // If response contains a single recipe object
          setRecipes([response.data.data]); // Wrap it in an array
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setError("Failed to fetch recipes. Please try again later.");
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchRecipes();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Recipe List</h1>
      <div className="recipe-list">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Link key={recipe._id} to={`/recipes/${recipe._id}`}>
              <RecipeCard recipe={recipe} />
            </Link>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
