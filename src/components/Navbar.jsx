import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">My Portfolio</div>

      <nav className="nav-links">
        <ul>
          <li><a href="#home">🏠 Home</a></li>
          <li><a href="#about">ℹ️ About</a></li>
          <li><a href="#skills">💡 Skills</a></li>
          <li><a href="#certificates">📜 Certificates</a></li>
          <li><a href="#contact">✉️ Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
