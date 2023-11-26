import React from 'react';
import './recipecard.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

function recipecard({ name, imageUrl, recipe, area }) {
  const handleRecipeClick = (recipe) => {
    // Store recipe data in local storage
    localStorage.setItem('recipeData', JSON.stringify(recipe));
  };

  return (
    <Link to="/recipe">
      <div className="recipe-card" onClick={() => handleRecipeClick(recipe)}>
        <img src={imageUrl} alt={name} className="recipe-card-image" />
        <div className="recipe-card-details">
          <div className="recipe-card-text">
            <h2 className="recipe-card-name">{name}</h2>
            <h4 className="recipe-card-area">{area}</h4>
          </div>
          <button type="submit" className="like-button">
            <FontAwesomeIcon icon={faBookmark} />
          </button>
        </div>
      </div>
    </Link>
  );
}

export default recipecard;
