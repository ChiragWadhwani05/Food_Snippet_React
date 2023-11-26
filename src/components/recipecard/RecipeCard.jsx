import React, { useState } from 'react';
import './recipecard.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

function Recipecard({ idMeal, name, imageUrl, recipe, area }) {
  const handleRecipeClick = () => {
    localStorage.setItem('recipeData', JSON.stringify(recipe));
  };

  let savedRecipeIds = JSON.parse(localStorage.getItem('savedRecipeIds')) || [];
  const [isSaved, setIsSaved] = useState(savedRecipeIds.includes(idMeal));

  function handleSaveClick() {
    savedRecipeIds = JSON.parse(localStorage.getItem('savedRecipeIds')) || [];
    const updatedSavedRecipeIds = isSaved
      ? savedRecipeIds.filter((savedId) => savedId !== idMeal)
      : [...savedRecipeIds, idMeal];

    setIsSaved(!isSaved);
    localStorage.setItem(
      'savedRecipeIds',
      JSON.stringify(updatedSavedRecipeIds)
    );
  }

  return (
    <div className="recipe-card" onClick={handleRecipeClick}>
      <Link to="/recipe">
        <img src={imageUrl} alt={name} className="recipe-card-image" />
      </Link>
      <div className="recipe-card-details">
        <div className="recipe-card-text">
          <h2 className="recipe-card-name">{name}</h2>
          <h4 className="recipe-card-area">{area}</h4>
        </div>
        <button
          type="button"
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
