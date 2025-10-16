import React from "react";
import "./Footer.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
     
        <div className="footer-column">
          <h2 className="logo">Teknolojik<br />Yemekler</h2>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>341 Londonderry Road,<br />Istanbul Türkiye</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span>aciktim@teknolojikyemekler.com</span>
          </div>
          <div className="contact-item">
            <FaPhone className="icon" />
            <span>+90 216 123 45 67</span>
          </div>
        </div>

       
        <div className="footer-column">
          <h4>Hot Menu</h4>
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>

        {/* Sağ bölüm */}
        <div className="footer-column">
          <h4>Instagram</h4>
          <div className="instagram-gallery">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src={`/li-${i}.png`} 
                alt={`li-${i}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Alt çubuk */}
      <div className="footer-bottom">
        <p>© 2023 Teknolojik Yemekler.</p>
        <span className="twitter">🐦</span>
      </div>
    </footer>
  );
}

export default Footer;
