import React, { useState, useEffect } from 'react';
import SearchBox from '../searchbox/SearchBox';
import RecipeCard from '../components/recipecard/RecipeCard';
import './homepage.css';

function Home() {
  const [recipes, setRecipes] = useState([]);

  const handleInputChange = (value) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.meals || []);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
        setRecipes([]);
      });
  };

  useEffect(() => {
    const previousSearchValue = localStorage.getItem('searchValue');
    if (previousSearchValue) {
      handleInputChange(previousSearchValue);
    }
  }, []); // Empty dependency array means this effect runs once after the first render

  return (
    <>
      <SearchBox onInputChange={handleInputChange} />
      <div className="home-main">
        <h1>Searched Recipes</h1>
        <div className="recipes-container">
          {recipes.length === 0 && <h1>No recipes found.</h1>}
          {recipes.map((recipe) => (
            <RecipeCard
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
