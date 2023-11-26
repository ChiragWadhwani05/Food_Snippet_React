import React, { useState, useEffect } from 'react';
import './searchbox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBox({ onInputChange }) {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const previousSearchValue = localStorage.getItem('searchValue');
    if (previousSearchValue) {
      setInputValue(previousSearchValue);
    }
  }, []); // Empty dependency array means this effect runs once after the first render

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    localStorage.setItem('searchValue', value);
    onInputChange(value);
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
