import React, { useState, useEffect } from 'react';
import './settings.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const primaryColors = [
  'rgb(255, 0, 86)',
  'rgb(33, 150, 243)',
  'rgb(255, 193, 7)',
  'rgb(0, 200, 83)',
  'rgb(156, 39, 176)',
];

const themes = [
  {
    '--background-color': '#fff',
    '--background-light': '#fff',
    '--text-color': '#0A0A0A',
    '--text-light': '#575757',
  },
  {
    '--background-color': 'rgb(29,29,29)',
    '--background-light': 'rgb(77,77,77)',
    '--text-color': '#ffffff',
    '--text-light': '#eceaea',
  },
];

function Settings() {
  const savedTheme = localStorage.getItem('theme') || 0; // Default to 0 if not found
  const savedPrimaryColor = localStorage.getItem('primaryColor') || 0; // Default to 0 if not found

  const [theme, setTheme] = useState(Number(savedTheme));
  const [primaryColor, setPrimaryColor] = useState(Number(savedPrimaryColor));

  const handleThemeSelection = (crrTheme) => {
    setTheme(crrTheme);
    localStorage.setItem('theme', String(crrTheme));
  };

  const handlePrimaryColorSelection = (crrPrimaryColor) => {
    setPrimaryColor(crrPrimaryColor);
    localStorage.setItem('primaryColor', String(crrPrimaryColor));
  };

  useEffect(() => {
    // Apply styles based on theme and primary color
    const root = document.documentElement;
    for (let key in themes[theme]) {
      root.style.setProperty(key, themes[theme][key]);
    }
    root.style.setProperty('--primary-color', primaryColors[primaryColor]);
  }, [theme, primaryColor]);

  return (
    <div className="settings-container">
      <h1 className="settings">Settings</h1>
      <div className="settings-options">
        <label htmlFor="preferred-theme" className="settings-label">
          Preferred Theme:
        </label>
        <div className="theme-options">
          <div className="theme light" onClick={() => handleThemeSelection(0)}>
            {theme === 0 && (
              <div className="settings-check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
          <div className="theme dark" onClick={() => handleThemeSelection(1)}>
            {theme === 1 && (
              <div className="settings-check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="settings-options">
        <label htmlFor="primary-color" className="settings-label">
          Primary Color:
        </label>
        <div className="theme-options">
          {primaryColors.map((color, index) => (
            <div
              className="theme"
              style={{ backgroundColor: color }}
              key={index}
              onClick={() => handlePrimaryColorSelection(index)}
            >
              {primaryColor === index && (
                <div className="settings-check">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Settings;
