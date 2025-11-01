import { useState } from "react";
import "./header.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <span className="logo-text">LocationInfo</span>
          </a>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/services" onClick={closeMenu}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="/profile" onClick={closeMenu}>
                Profile
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
