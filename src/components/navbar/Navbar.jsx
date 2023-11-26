import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGear, faBookmark } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [wow, setWow] = useState(true);

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
          <Link
            to="/saved"
            className={
              window.location.pathname === '/saved'
                ? 'active navbar-option'
                : 'navbar-option'
            }
            onClick={() => setWow(!wow)}
          >
            <FontAwesomeIcon icon={faBookmark} />
            <span className="icon-label">Saved</span>
          </Link>
          <Link
            to="/settings"
            className={
              window.location.pathname === '/settings'
                ? 'active navbar-option'
                : 'navbar-option'
            }
            onClick={() => setWow(!wow)}
          >
            <FontAwesomeIcon icon={faGear} />
            <span className="icon-label">Settings</span>
          </Link>
          <Link
            to="/"
            className={
              window.location.pathname === '/'
                ? 'active navbar-option'
                : 'navbar-option'
            }
            onClick={() => setWow(!wow)}
          >
            <FontAwesomeIcon icon={faHome} />
            <span className="icon-label">Home</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
