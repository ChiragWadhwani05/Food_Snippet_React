import React from 'react';
import Recipecard from '../components/recipecard/RecipeCard';
import './savedrecipes.css';
function SavedRecipes() {
  // Retrieve saved recipes from local storage
  const savedRecipeData = JSON.parse(localStorage.getItem('savedRecipe')) || [];

  return (
    <div className="saved-recipes-main">
      <h1>Saved Recipes</h1>
      <div className="saved-recipes-container">
        {savedRecipeData.map((recipe, index) => (
          <Recipecard
            key={index} // You may use a unique key based on your data
            name={recipe.strMeal} // Update with the correct property
            imageUrl={recipe.strMealThumb} // Update with the correct property
            recipe={recipe} // Pass the entire recipe object if needed
            area={recipe.strArea} // Update with the correct property
          />
        ))}
      </div>
    </div>
  );
}

export default SavedRecipes;
