import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-text">LOGO</span>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#cart">CART</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#contact" className="contact-btn">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
