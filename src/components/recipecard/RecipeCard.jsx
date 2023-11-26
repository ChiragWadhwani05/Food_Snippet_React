import React, { useState } from 'react';
import './recipecard.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

function Recipecard({ name, imageUrl, recipe, area }) {
  const handleRecipeClick = (recipe) => {
    // Store recipe data in local storage
    localStorage.setItem('recipeData', JSON.stringify(recipe));
  };

  const savedRecipe = JSON.parse(localStorage.getItem('savedRecipe')) || [];
  const [isSaved, setIsSaved] = useState(savedRecipe.includes(recipe));

  const handleSaveClick = () => {
    // Toggle the save state
    setIsSaved(!isSaved);

    // Update the saved recipes in local storage
    const updatedSavedRecipe = isSaved
      ? savedRecipe.filter((saved) => saved !== recipe)
      : [...savedRecipe, recipe];

    localStorage.setItem('savedRecipe', JSON.stringify(updatedSavedRecipe));
  };

  return (
    <div className="recipe-card" onClick={() => handleRecipeClick(recipe)}>
      <Link to="/recipe">
        <img src={imageUrl} alt={name} className="recipe-card-image" />
      </Link>
      <div className="recipe-card-details">
        <div className="recipe-card-text">
          <h2 className="recipe-card-name">{name}</h2>
          <h4 className="recipe-card-area">{area}</h4>
        </div>
        <button
          type="submit"
          className={`like-button ${isSaved ? 'saved' : ''}`}
          onClick={handleSaveClick}
        >
          <FontAwesomeIcon icon={faBookmark} />
        </button>
      </div>
    </div>
  );
}

export default Recipecard;
