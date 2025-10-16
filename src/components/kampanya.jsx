import React from "react";
import "./kampanya.css";
import pizzaImg from "./assets/cta/kart-1.png";
import burgerImg from "./assets/cta/kart-2.png";
import kuryeImg from "./assets/cta/kart-3.png";

const Kampanya = () => {
  return (
    <div className="banner-wrapper">
      <div className="banner-left">
        <h1>Özel<br />Lezzetus</h1>
        <p>Position: Absolute Acı Burger</p>
        <button>SİPARİŞ VER</button> 
        <img src={pizzaImg} alt="pizza" className="banner-img" />
      </div>

      <div className="banner-right">
        <div className="banner-box dark">
          <div>
            <h3>Hackathlon<br />Burger Menü</h3>
            <button>SİPARİŞ VER</button>
          </div>
          <img src={burgerImg} alt="burger" className="burger2" />
        </div>

        <div className="banner-box light">
          <div>
            <h3><span style={{ color: "red" }}>Çooooook</span> hızlı<br />npm gibi kurye</h3>
            <button>SİPARİŞ VER</button>
          </div>
          <img src={kuryeImg} alt="kurye" />
        </div>
      </div>
    </div>
  );
};

export default Kampanya;
