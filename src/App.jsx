import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './homepage/Home.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Settings from './settingspage/Settings.jsx';
import Footer from './footer/Footer.jsx';
import Welcome from './welcomepage/Welcome.jsx';
import Recipe from './components/recipe/Recipe.jsx';
import SavedRecipes from './SavedRecipes/SavedRecipes.jsx';

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
function App() {
  useEffect(() => {
    // Fetch values from local storage
    const storedTheme = localStorage.getItem('theme');
    const storedPrimaryColor = localStorage.getItem('primaryColor');

    // Set default values if not found in local storage
    const theme = storedTheme || 0;
    const primaryColor = parseInt(storedPrimaryColor) || 0;

    // Apply styles based on theme and primary color
    const root = document.documentElement;
    for (let key in themes[theme]) {
      root.style.setProperty(key, themes[theme][key]);
    }
    root.style.setProperty('--primary-color', primaryColors[primaryColor]);
  });
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/saved" element={<SavedRecipes />} />
          {/* <Route path="/liked-recipes" element={<LikedRecipes />} /> */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
