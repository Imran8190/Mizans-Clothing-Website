import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MIZANS CLOTHING</div>

    <form className="search-bar">
    <input type="text" placeholder="Search products..." />
    <button type="submit">Search</button>
    </form>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      

      <button className="navbar-btn">Sign Up</button>
    </nav>
  );
};

export default Navbar;
