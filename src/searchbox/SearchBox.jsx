import React, { useState } from 'react';
import './searchbox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBox({ onInputChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onInputChange(value); // Pass the value to the parent component
  };

  const handleSearch = () => {
    // Do something with the inputValue, if needed
  };

  return (
    <div>
      <div className="search-area">
        <div className="search-bar">
          <input
            type="text"
            id="search-input"
            placeholder="Search dish..."
            maxLength="50"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="search-button"
            onClick={handleSearch}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <blockquote className="quote-box">
          <h3 className="quote-text">Let's Find A Perfect Recipe For You...</h3>
        </blockquote>
      </div>
    </div>
  );
}

export default SearchBox;
