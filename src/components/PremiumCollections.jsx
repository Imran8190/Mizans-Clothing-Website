import React, { useState } from "react";
import "./PremiumCollections.css";

const PremiumCollections = () => {

  const menProducts = [
    { class: "men1", name: "Premium Shirt" },
    { class: "men2", name: "PoloFit Pant" },
    { class: "men3", name: "Branded T-Shirt" },
    { class: "men4", name: "Classic Blazer" },
    { class: "men5", name: "Denim Jacket" },
    { class: "men6", name: "Luxury Hoodie" },
  ];

  const womenProducts = [
    { class: "women1", name: "Elegant Dress" },
    { class: "women2", name: "Premium Top" },
    { class: "women3", name: "Luxury Saree" },
    { class: "women4", name: "Designer Kurti" },
    { class: "women5", name: "Silk Gown" },
    { class: "women6", name: "Party Wear" },
  ];

  const [menIndex, setMenIndex] = useState(0);
  const [womenIndex, setWomenIndex] = useState(0);

  const nextMen = () => {
    if (menIndex < menProducts.length - 3) {
      setMenIndex(menIndex + 1);
    }
  };

  const prevMen = () => {
    if (menIndex > 0) {
      setMenIndex(menIndex - 1);
    }
  };

  const nextWomen = () => {
    if (womenIndex < womenProducts.length - 3) {
      setWomenIndex(womenIndex + 1);
    }
  };

  const prevWomen = () => {
    if (womenIndex > 0) {
      setWomenIndex(womenIndex - 1);
    }
  };

  return (
    <section  className="premium-collections">

      {/* MEN */}
      <div id='Premium' className="collection-section">
        <h2 className="collection-heading">Men’s Collection</h2>

        <div className="carousel-wrapper">
          <button className="arrow" onClick={prevMen}>❮</button>

          <div className="carousel">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${menIndex * 33.33}%)` }}
            >
              {menProducts.map((item, i) => (
                <div className="product-card" key={i}>
                  <div className={`collection-card ${item.class}`}></div>
                  <h3 className="product-name">{item.name}</h3>
                  <button className="product-price">$499</button>
                </div>
              ))}
            </div>
          </div>

          <button className="arrow" onClick={nextMen}>❯</button>
        </div>
      </div>

      {/* WOMEN */}
      <div className="collection-section">
        <h2 className="collection-heading">Women’s Collection</h2>

        <div className="carousel-wrapper">
          <button className="arrow" onClick={prevWomen}>❮</button>

          <div className="carousel">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${womenIndex * 33.33}%)` }}
            >
              {womenProducts.map((item, i) => (
                <div className="product-card" key={i}>
                  <div className={`collection-card ${item.class}`}></div>
                  <h3 className="product-name">{item.name}</h3>
                  <button className="product-price">$499</button>
                </div>
              ))}
            </div>
          </div>

          <button className="arrow" onClick={nextWomen}>❯</button>
        </div>
      </div>

    </section>
  );
};

export default PremiumCollections;