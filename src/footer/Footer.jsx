import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
function footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <h3>Food Snippet</h3>
          <p>
            "FoodSnippet is a website where you can find a world of culinary
            delights at your fingertips. Explore an extensive collection of
            mouthwatering recipes, discover new flavors, and share your love for
            food with our vibrant community. Join us on a delicious journey
            today!"
          </p>
          <div className="socials">
            <Link
              to="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              id="footer-link"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              to="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              id="footer-link"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link
              to="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              id="footer-link"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link
              to="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              id="footer-link"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </div>
          <p>
            This work is licensed under the{' '}
            <a
              href="./LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-link"
            >
              MIT License
            </a>
            .
          </p>
        </div>
        <div className="footer-bottom">
          <p>
            copyright &copy;{' '}
            <Link id="footer-link">Wadhwanichirag93@gmail.com</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default footer;
