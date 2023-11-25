import React from "react";
import './recipecard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
function recipecard({ name, imageUrl, description, likes }) {
    return (
        <div className="recipe-card">
            <img src={imageUrl} alt={name} className="recipe-image" />
            <div className="recipe-details">
                <h2 className="recipe-name">{name}</h2>
                <button type="submit" className="like-button">
                <FontAwesomeIcon icon={faHeart}/>
                </button>
            </div>
            <p className="recipe-description">{description}</p>
            
        </div>
        );
    }

export default recipecard;
