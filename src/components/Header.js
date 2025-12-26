import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {

  const location = useLocation();
  const path = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
    // Prevent background scroll when menu is open (mobile)
    useEffect(() => {
      if (menuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return () => {
        document.body.style.overflow = '';
      };
    }, [menuOpen]);
  const navigate = useNavigate();

  return (
    <header className="header" style={{ zIndex: 1200 }}>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src="/assets/logo/ramseethahalllogo.png" alt="Ramseetha Hall Logo" className="logo-img" />
          </Link>
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
        <nav className={`nav${menuOpen ? ' nav-open' : ''}`} style={{ zIndex: 1300 }}>
          {/* Close button for mobile nav */}
          {menuOpen && (
            <button
              className="close-btn"
              aria-label="Close navigation menu"
              onClick={() => setMenuOpen(false)}
              style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', fontSize: '2rem', color: '#e2a93b', zIndex: 1400, cursor: 'pointer' }}
            >
              &times;
            </button>
          )}
          <Link to="/" className={`nav-link${path === '/' ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className={`nav-link${path === '/about' ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/facilities" className={`nav-link${path === '/facilities' ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>Facilities</Link>
          <Link to="/gallery" className={`nav-link${path === '/gallery' ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link to="/contact" className={`nav-link${path === '/contact' ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>Contact</Link>
          <button
            className="book-now-btn nav-book-now"
            onClick={() => {
              setMenuOpen(false);
              navigate('/contact');
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