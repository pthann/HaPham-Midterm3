// Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme}-theme`}>
      <h1>
        <i className="fab fa-github" /> GitHub Finder
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </li>
        <li>
          <label className="theme-switch">
            <input
              type="checkbox"
              checked={theme === 'dark'}
              onChange={toggleTheme}
            />
            <span className="slider"></span>
          </label>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;