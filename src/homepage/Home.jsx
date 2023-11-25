import React, { useState } from 'react';
import Searchbox from '../searchbox/SearchBox';
import RecipeCard from '../recipecard/RecipeCard';
import './homepage.css';
function Home() {
  const [recipes, setRecipes] = useState([]);

  const handleInputChange = (value) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
      .then((response) => response.json())
      .then((data) => {
        // Update recipes state with the fetched recipe data
        setRecipes(data.meals || []);
        console.log(recipes);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
        setRecipes([]); // Clear recipes if there's an error
      });
  };

  return (
    <>
      <Searchbox onInputChange={handleInputChange} />
      <div className="home-main">
        <h1>Searched Recipes</h1>
        <div className="recipe-container">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              name={recipe.strMeal}
              imageUrl={recipe.strMealThumb}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
