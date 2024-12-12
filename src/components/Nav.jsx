import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <div className="w3-bar w3-black">
        <Link to="/contact" className="w3-bar-item w3-button">
          Movie Search
        </Link>
        <Link to="/generatecat" className="w3-bar-item w3-button">
          Random Line Generator
        </Link>
        <Link to="/agepredictor" className="w3-bar-item w3-button w3-hide-small">
          Age Predictor
        </Link>
        <Link to="/notesapp" className="w3-bar-item w3-button w3-hide-small">
          Notes App
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          &#9776;
        </button>
      </div>

      {/* Collapsed Mobile Menu */}
      <div
        id="demo"
        className={`w3-bar-block w3-black ${
          isMenuOpen ? "" : "w3-hide"
        } w3-hide-large w3-hide-medium`}
      >
        <Link to="/contact" className="w3-bar-item w3-button">
          Movie Search
        </Link>
        <Link to="/generatecat" className="w3-bar-item w3-button">
          Random Line Generator
        </Link>
        <Link to="/agepredictor" className="w3-bar-item w3-button">
          Age Predictor
        </Link>
        <Link to="/notesapp" className="w3-bar-item w3-button">
          Notes App
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
