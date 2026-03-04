import React from "react";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div id="MainPage"  className="main">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Timeless Elegance</h1>
          <p>Discover the new luxury collection crafted for perfection.</p>
          <button className="hero-btn" onClick={() => window.location.href="#Premium"}>Explore Collection</button>
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured">
        <h2>Featured Collection</h2>
        <div className="featured-grid">
          <div className="card">
            <div className="card-img1"></div>
            <h3>Signature Blazer</h3>
             <button className="product-price">$499</button>
          </div>

          <div className="card">
            <div className="card-img2"></div>
            <h3>Classic Leather Bag</h3>
             <button className="product-price">$499</button>
          </div>

          <div className="card">
            <div className="card-img3"></div>
            <h3>Luxury Watch</h3>
             <button className="product-price">$499</button>
          </div>
        </div>
      </section>

      {/* Luxury Statement Section */}
      <section className="statement">
        <h2>Crafted With Precision</h2>
        <p>
          Every piece is designed with exceptional quality and timeless
          sophistication.
        </p>
      </section>

    </div>
  );
};

export default MainPage;