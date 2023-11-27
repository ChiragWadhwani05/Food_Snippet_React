import React, { useState, useEffect } from 'react';
import './searchbox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBox({ onInputChange }) {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    // Do something with the inputValue, if needed
    onInputChange(inputValue);
  };

  // Handle Enter key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <div>
      <div className="search-area">
        <blockquote className="quote-box">
          <h3 className="quote-text">Let's Find A Perfect Recipe For You...</h3>
        </blockquote>
        <div className="search-bar">
          <input
            type="text"
            id="search-input"
            placeholder="Search dish..."
            maxLength="50"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          <button
            type="submit"
            className="search-button"
            aria-label="Search"
            onClick={handleSearch}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
