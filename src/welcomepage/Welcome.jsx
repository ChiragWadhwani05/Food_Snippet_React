// src/Welcome.js
import React from 'react';
import './welcome.css';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="welcome">
      <h1>Welcome to Your Recipe Finder!</h1>
      <p>Let's Find A perfect Recipe For You</p>
      <Link to="/" id="btn">
        Get Started
      </Link>
    </div>
  );
};

export default Welcome;
