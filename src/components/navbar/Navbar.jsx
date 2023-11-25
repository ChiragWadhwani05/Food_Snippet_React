import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGear, faBookmark } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div>
      <nav className="navbar nav-container">
        <div className="brandName">
          <Link to="/" className="navbar-brand">
            <span>
              F<span className="nav-oo">oo</span>dSnippet
            </span>
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/saved" className="navbar-option">
            <FontAwesomeIcon icon={faBookmark} />
            <span className="icon-label">Saved</span>
          </Link>
          <Link to="/settings" className="navbar-option">
            <FontAwesomeIcon icon={faGear} />
            <span className="icon-label">Settings</span>
          </Link>
          <Link to="/" className="navbar-option">
            <FontAwesomeIcon icon={faHome} />
            <span className="icon-label">Home</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
