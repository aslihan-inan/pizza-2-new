import React from "react";
import koreIcon from "../assets/icons/1.svg";
import pizzaIcon from "../assets/icons/2.svg";
import burgerIcon from "../assets/icons/3.svg";
import kizartmaIcon from "../assets/icons/4.svg";
import fastfoodIcon from "../assets/icons/5.svg";
import gazliIcon from "../assets/icons/6.svg";
import "./banner.css";

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-item">
        <img src={koreIcon} alt="Kore Mutfağı" />
        <span>Kore Mutfağı</span>
      </div>
      <div className="banner-item">
        <img src={pizzaIcon} alt="Pizza" />
        <span>Pizza</span>
      </div>
      <div className="banner-item">
        <img src={burgerIcon} alt="Burger" />
        <span>Burger</span>
      </div>
        <div className="banner-item">
        <img src={kizartmaIcon} alt="kizartma" />
        <span>Kızartmalar</span>
      </div>
        <div className="banner-item">
        <img src={fastfoodIcon} alt="fastfood" />
        <span>Fast Food</span>
      </div>
         <div className="banner-item">
        <img src={gazliIcon} alt="gazli" />
        <span>Gazlı İçecek</span>
      </div>
    </div>
  );
}

export default Banner;