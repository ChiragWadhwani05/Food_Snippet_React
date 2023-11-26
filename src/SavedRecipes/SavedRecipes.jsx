import React, { useState, useEffect } from 'react';
import Recipecard from '../components/recipecard/RecipeCard';
import './savedrecipes.css';

function SavedRecipes() {
  const savedRecipeIds =
    JSON.parse(localStorage.getItem('savedRecipeIds')) || [];
  const [savedRecipeData, setSavedRecipeData] = useState([]);

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      const promises = savedRecipeIds.map((recipeId) =>
        fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
        )
          .then((response) => response.json())
          .then((data) => data.meals[0])
      );
      const recipes = await Promise.all(promises);
      setSavedRecipeData(recipes);
    };

    if (savedRecipeIds.length > 0) {
      fetchSavedRecipes();
    }
  }, [savedRecipeIds]);

  return (
    <div className="saved-recipes-main">
      <h1>Saved Recipes</h1>
      <div className="saved-recipes-container">
        {savedRecipeData.map((recipe, index) => (
          <Recipecard
            key={index}
            idMeal={recipe.idMeal}
            name={recipe.strMeal}
            imageUrl={recipe.strMealThumb}
            recipe={recipe}
            area={recipe.strArea}
          />
        ))}
      </div>
    </div>
  );
}

export default SavedRecipes;
