import { useHistory } from 'react-router-dom'; 
import logo from "./assets/logo.svg";
import './App.css';
import Banner from "./components/banner.jsx";
import Kampanya from "./components/kampanya.jsx";
import CategoryTabs from "./components/categoryTab.jsx";
import Footer from "./components/footer.jsx";

function App() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/siparis"); 
  }

  return (
    <>
      {/* 🔹 Hero Section */}
      <section className="hero">
        <img src={logo} alt="logo" className="hero-logo" />
        <h1 className="hero-title">
          KOD ACIKTIRIR <br /> PİZZA, DOYURUR
        </h1>
        <button className="hero-button" onClick={handleClick}>
          ACIKTIM
        </button>
      </section>

      {/* 🔹 İçerik Bölümü */}
      <Banner />
      <Kampanya />
      <CategoryTabs />
      <Footer />
    </>
  );
}

export default App;
