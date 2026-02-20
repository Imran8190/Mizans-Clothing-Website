import React from "react";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="main">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Timeless Elegance</h1>
          <p>Discover the new luxury collection crafted for perfection.</p>
          <button className="hero-btn">Explore Collection</button>
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured">
        <h2>Featured Collection</h2>
        <div className="featured-grid">
          <div className="card">
            <div className="card-img"></div>
            <h3>Signature Blazer</h3>
            <p>$249</p>
          </div>

          <div className="card">
            <div className="card-img"></div>
            <h3>Classic Leather Bag</h3>
            <p>$399</p>
          </div>

          <div className="card">
            <div className="card-img"></div>
            <h3>Luxury Watch</h3>
            <p>$599</p>
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
