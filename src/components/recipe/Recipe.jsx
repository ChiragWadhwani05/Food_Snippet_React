import React from 'react';
import './recipe.css';
function Recipe() {
  const recipeData = localStorage.getItem('recipeData');
  if (!recipeData) {
    return;
  }
  const recipe = JSON.parse(recipeData);
  const recipeImage = recipe.strMealThumb;
  const recipeName = recipe.strMeal;
  const recipeArea = recipe.strArea;
  const recipeMethod = recipe.strInstructions;
  const ingredients = [];

  // Loop through ingredients and quantities
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const quantity = recipe[`strMeasure${i}`];

    if (ingredient && quantity) {
      ingredients.push(`${ingredient}: ${quantity}`);
    }
  }

  return (
    <div className="recipe-container">
      <div className="recipe-image-name">
        <img src={recipeImage} alt={recipeName} className="crrRecipe-image" />
        <h1 className="highlighted">{recipeName}</h1>
        <h4>{recipeArea}</h4>
      </div>
      <div className="recipe-details">
        <div className="recipe-ingredients">
          <ul>
            <h1 className="highlighted">Ingredients</h1>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="recipe-instructions">
          <h1 className="highlighted">Instructions</h1>
          <p>{recipeMethod}</p>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
