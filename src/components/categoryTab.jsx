import React, { useState } from "react";
import "./categoryTabs.css";
import food1 from "../assets/food-1.png";
import food2 from "../assets/food-2.png";
import food3 from "../assets/food-3.png";

export default function MenuSection() {
  const categories = [
    { name: "Ramen", icon: "🍜" },
    { name: "Pizza", icon: "🍕" },
    { name: "Burger", icon: "🍔" },
    { name: "French fries", icon: "🍟" },
    { name: "Fast food", icon: "🍔🍟" },
    { name: "Soft drinks", icon: "🥤" },
  ];

  const [activeCategory, setActiveCategory] = useState("Pizza");

  const products = [
    {
      id: 1,
      name: "Terminal Pizza",
      img: food1,
      rating: 4.9,
      reviews: 200,
      price: 60,
    },
    {
      id: 2,
      name: "Position Absolute Acı Pizza",
      img: food2,
      rating: 4.9,
      reviews: 200,
      price: 60,
    },
    {
      id: 3,
      name: "useEffect Tavuklu Burger",
      img:  food3,
      rating: 4.9,
      reviews: 200,
      price: 60,
    },
  ];

  return (
    <section className="menu-section">
      <p className="menu-subtitle">en çok paketlenen menüler</p>
      <h2 className="menu-title">Acıktıran Kodlara Doyuran Lezzetler</h2>

      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className={`category-btn ${
              activeCategory === cat.name ? "active" : ""
            }`}
            onClick={() => setActiveCategory(cat.name)}
          >
            <span className="icon">{cat.icon}</span> {cat.name}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <div className="product-info">
              <span>{p.rating}</span>
              <span>({p.reviews})</span>
              <strong>{p.price}₺</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
