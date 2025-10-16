import React, { useState } from "react";
import axios from "axios";
import "./siparisi.css";
import logo from "../assets/logo.svg";
import { useHistory } from "react-router-dom";



function Siparis() {

  const [formData, setFormData] = useState({
    malzemeler: [],
    boyut: "",
    hamur: "",
    not: "",
  });
const [count, setCount]=useState(1);
  const malzemeListesi = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Jalepeno",
    "Sarımsak",
    "Biber",
    "Sucuk",
    "Ananas",
    "Kabak",
  ];
  const history = useHistory();
  const urunFiyati = 85.5;
  const malzemeFiyati = 5;

  

 const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  if (type === "checkbox") {
    if (checked) {
      if (formData.malzemeler.length >= 10) {
        alert("En fazla 10 malzeme seçebilirsiniz!");
        return;
      }
      setFormData((prev) => ({
        ...prev,
        malzemeler: [...prev.malzemeler, value],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        malzemeler: prev.malzemeler.filter((item) => item !== value),
      }));
    }
  } else {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
};

  const toplamTutar = count * (urunFiyati + formData.malzemeler.length * malzemeFiyati);

  const isFormValid = () => {
    return (
      formData.boyut &&
      formData.hamur &&
      formData.malzemeler.length > 0
    );
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  if (!isFormValid()) {
    alert("Lütfen tüm zorunlu alanları doğru doldurun.");
    return;
  };

  axios
    .post("https://reqres.in/api/pizza", formData)
    .then((res) => {
      console.log("Sipariş Özeti:", res.data);
      alert("Sipariş başarıyla gönderildi!");
      const handleClick = () => {
       history.push("/onay");}
    })
    .catch((err) => {
      console.error(err);
      alert("Sipariş gönderilirken hata oluştu.");
    });
};

  

  return (
    <div>
      <div className="siparis-form">
        <img className="resim" src={logo} alt="logo" style={{ padding: "3em" }} />
        <div className="ana">
          <h4>Anasayfa</h4>
          <h4>Sipariş Oluştur</h4>
        </div>
        <div>
          <h3 className="baslik">Position Absolute Acı Pizza</h3>
          <div style={{ display: "flex", width: "531px" }}>
            <h2 className="fiyat">85.50₺</h2> <h4 className="deger">4.9</h4>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <p>
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . 
            Küçük bir pizzaya bazen pizzetta denir.
          </p>

          <div className="secimler">
            <div className="boyut">
              <legend style={{ fontWeight: "bold" }}>
                Boyut Seç <span style={{ color: "red" }}>*</span>
              </legend>
              <label>
                <input
                  type="radio"
                  name="boyut"
                  value="küçük"
                  onChange={handleChange}
                  checked={formData.boyut === "küçük"}
                /> Küçük
              </label>
              <label>
                <input
                  type="radio"
                  name="boyut"
                  value="orta"
                  onChange={handleChange}
                  checked={formData.boyut === "orta"}
                /> Orta
              </label>
              <label>
                <input
                  type="radio"
                  name="boyut"
                  value="büyük"
                  onChange={handleChange}
                  checked={formData.boyut === "büyük"}
                /> Büyük
              </label>
            </div>

            <div className="hamur">
              <label htmlFor="hamur" className="form-label">
                Hamur Seç <span style={{ color: "red" }}>*</span>
              </label>
              <select
                id="hamur"
                name="hamur"
                value={formData.hamur}
                onChange={handleChange}
                className="dropdown"
                required
              >
                <option value="">Hamur Kalınlığı</option>
                <option value="ince">İnce</option>
                <option value="orta">Orta</option>
                <option value="kalın">Kalın</option>
              </select>
            </div>
          </div>

          <h3>Ek Malzemeler</h3>
          <p style={{ textAlign: "left" }}>
            En fazla 10 malzeme seçebilirsiniz. 5₺
          </p>
          <div className="malzeme">
            {malzemeListesi.map((item) => (
              <label className="mal" key={item}>
                <input
                  type="checkbox"
                  value={item}
                  checked={formData.malzemeler.includes(item)}
                  onChange={handleChange}
                />
                {item}
              </label>
            ))}
          </div>

          <div className="siparis-notu">
            <h3>Sipariş Notu:</h3>
            <textarea
              id="not"
              name="not"
              value={formData.not}
              onChange={handleChange}
              rows={2}
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              style={{
                width: "531px",
                height: "56px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                padding: "8px",
              }}
            />
            <hr style={{ width: "531px", marginTop: "16px", borderColor: "#ccc" }} />
          </div>
        </fieldset>
        <div className="secim">
          <div className="siparis-aksiyon">
    <div className="sayaç-container">
      <button
        type="button"
        onClick={() => setCount((prev) => Math.max(prev - 1, 1))}
        className="sayaç-btn"
      >
        -
      </button>
      <span className="sayaç-deger">{count}</span>
      <button
        type="button"
        onClick={() => setCount((prev) => prev + 1)}
        className="sayaç-btn"
      >
        +
      </button>
    </div>
  <div className="secim-row">
  <div className="siparis-bilgi">
    <h3>Sipariş Toplamı</h3>
    <h3>
      <span style={{ color: "grey" }}>
        Seçimler: {formData.malzemeler.length * malzemeFiyati}₺
      </span>
    </h3>
    <h3>
      <span style={{ color: "red" }}>
        Toplam: {toplamTutar.toFixed(2)}₺
      </span>
    </h3>
  </div>

  

    <button className="button" type="submit" onClick={handleSubmit}
    >
      Sipariş Ver
    </button>
  </div>
</div>

    
  </div>

      </form>
    </div>
  );
}

export default Siparis;