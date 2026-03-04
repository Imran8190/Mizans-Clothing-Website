import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="Footer" className="footer">
      <div className="footer-container">

        {/* Left Section - Brand */}
        <div className="footer-brand">
          <h1 className="footer-logo">
           MIZANS
          </h1>
          <h2 className="footer-sub">CLOTHING</h2>
          <p className="footer-tagline">
            Premium Fashion. Royal Style.
          </p>
        </div>

        {/* Right Section - Small Complaint Form */}
        <div className="footer-form">
          <h3>Report an Issue</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Describe your problem..." rows="3" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 MIZANS Clothing. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;