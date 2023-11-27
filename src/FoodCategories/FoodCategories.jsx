import React from 'react';
import './foodcategories.css';

const foodCategories = [
  'Dessert',
  'Snacks',
  'Main Course',
  'Burger',
  'Chicken',
  'Breakfast',
  'Cake',
  'Pizza',
];
function FoodCategories({ onButtonClick }) {
  return (
    <div className="food-categories-container">
      {foodCategories.map((category) => (
        <button
          className="category-btn"
          key={category}
          type="button"
          onClick={() => onButtonClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default FoodCategories;
