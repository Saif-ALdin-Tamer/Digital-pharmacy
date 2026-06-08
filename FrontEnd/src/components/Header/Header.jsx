import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart, FaGlobe, FaBars, FaTimes } from 'react-icons/fa';
import { GiMedicines } from 'react-icons/gi';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <div className="header__logo-icon">
            <GiMedicines />
          </div>
          <span className="header__logo-text">
            <span className="header__logo-pharmacy">Digital</span>
            <span className="header__logo-marts">Pharmacy</span>
          </span>
        </Link>

        <form className="header__search" onSubmit={handleSearchSubmit}>
          <FaSearch className="header__search-icon" />
          <input
            type="text"
            className="header__search-input"
            placeholder="Search medicines, health products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        <nav className={`header__actions ${mobileMenuOpen ? 'header__actions--open' : ''}`}>
          <button className="header__action-btn header__lang-btn" type="button">
            <FaGlobe className="header__action-icon" />
            <span>En</span>
          </button>

          <Link to="/login" className="header__action-btn">
            <FaUser className="header__action-icon" />
            <span>Login</span>
          </Link>

          <Link to="/cart" className="header__action-btn header__cart-btn">
            <FaShoppingCart className="header__action-icon" />
            <span className="header__cart-badge">0</span>
          </Link>
        </nav>

        <button
          className="header__mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          type="button"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
