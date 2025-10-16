
import React from "react";
import "./onay.css"; 
import logo from "../assets/logo.svg";

function Onay() {
  return (
    <div className="onay-container">
      <img src={logo} alt="Logo" className="onay-logo" />
      <h1>
        TEBRİKLER <br /> SİPARİŞİNİZ ALINDI!
      </h1>
    </div>
  );
}

export default Onay;
