import React from 'react';
import './recipecard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookBookmark,
  faBookmark,
  faHeart,
  faSave,
} from '@fortawesome/free-solid-svg-icons';
function recipecard({ name, imageUrl, description, area }) {
  return (
    <div className="recipe-card">
      <img src={imageUrl} alt={name} className="recipe-image" />
      <div className="recipe-details">
        <div className="recipe-text">
          <h2 className="recipe-name">{name}</h2>
          <h4 className="recipe-area">{area}</h4>
        </div>
        <button type="submit" className="like-button">
          <FontAwesomeIcon icon={faBookmark} />
        </button>
      </div>
      <p className="recipe-description">{description}</p>
    </div>
  );
}

export default recipecard;
