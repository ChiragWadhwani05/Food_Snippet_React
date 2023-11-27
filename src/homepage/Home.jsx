import React, { useState, useEffect } from 'react';
import SearchBox from '../searchbox/SearchBox';
import RecipeCard from '../components/recipecard/RecipeCard';
import './homepage.css';
import FoodCategories from '../FoodCategories/FoodCategories';

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [recipeFound, setRecipeFound] = useState(true);

  const handleInputChange = (value) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.meals || []);
        setRecipeFound(data.meals !== null);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
        setRecipes([]);
        setRecipeFound(false);
      });
  };

  return (
    <>
      <SearchBox onInputChange={handleInputChange} />
      <FoodCategories onButtonClick={handleInputChange} />
      <div className="home-main">
        <h1>Searched Recipes</h1>
        <div className="recipes-container">
          {!recipeFound && <h1>No recipes found</h1>}
          {recipes.map((recipe) => (
            <RecipeCard
              idMeal={recipe.idMeal}
              key={recipe.idMeal}
              name={recipe.strMeal}
              imageUrl={recipe.strMealThumb}
              area={recipe.strArea}
              recipe={recipe}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
