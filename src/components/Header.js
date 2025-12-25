import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {

  const location = useLocation();
  const path = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/assets/logo/ramseethahalllogo.png" alt="Ramseetha Hall Logo" className="logo-img" />
        </div>
        {/* Burger button for mobile */}
        <button
          className={`burger-btn${menuOpen ? ' open' : ''}`}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
        </button>
        <nav className={`nav${menuOpen ? ' nav-open' : ''}`}>
          <Link to="/" className={`nav-link${path === '/' ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className={`nav-link${path === '/about' ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/facilities" className={`nav-link${path === '/facilities' ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>Facilities</Link>
          <Link to="/gallery" className={`nav-link${path === '/gallery' ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link to="/contact" className={`nav-link${path === '/contact' ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>Contact</Link>
          <button
            className="book-now-btn"
            onClick={() => {
              setMenuOpen(false);
              if (path === '/') {
                setTimeout(() => {
                  const el = document.getElementById('book-hall-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              } else {
                navigate('/');
                setTimeout(() => {
                  const scrollToForm = () => {
                    const el = document.getElementById('book-hall-section');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                      window.removeEventListener('hashchange', scrollToForm);
                    }
                  };
                  window.addEventListener('hashchange', scrollToForm);
                  window.location.hash = '#book-hall-section';
                }, 100);
              }
            }}
          >
            Book Now
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;