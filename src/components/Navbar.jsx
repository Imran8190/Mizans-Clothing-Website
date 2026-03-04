import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar">
      <div className="navbar-logo">MIZANS CLOTHING</div>

    <form className="search-bar">
    <input type="text" placeholder="Search products..." />
    <button type="submit">Search</button>
    </form>
      <ul className="navbar-links">
        <li><a href="#navbar">Home</a></li>
        <li><a href="#Premium">Collections</a></li>
         <li><a href="#Contact">Contact</a></li>
        <li><a href="#Footer">About</a></li>
       
      </ul>

      

      <button className="navbar-btn">Sign Up</button>
    </nav>
  );
};

export default Navbar;
