import { useNavigate } from "react-router-dom";
import { useRef } from "react";
export default function SamyBar() {
  const arrowRef = useRef()
  const navigate = useNavigate()


  const handleClick = () => {
    navigate('/')
  }
  const handleScroll = () => {
    arrowRef.current.scrollIntoView({ behavior: 'smooth' })
  }



  return (
    <div className="container">
      <div className="intest-marquee">
        <p className="desc-marquee">“Aperti Dal Lunedì al Sabato – Cucina aperta dalle 12:00 alle 15:00 – Pizzeria aperta dalle 19 - 22.30.  Anche da asporto!”</p>
      </div>
<div style={{
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '10px 20px'
}}>
  <h1 className="title-homePage" style={{ flex: 1, textAlign: 'center' }}>
    SamyBar
  </h1>
  <p
    onClick={handleScroll}
    style={{
      cursor: 'pointer',
      fontSize: '1.5rem',
      marginRight: '20px',
      userSelect: 'none',
      animation: 'bounce 2s infinite',
      margin: 0,
    }}
  >
    ↓
  </p>
</div>


      <div className="container-images">
        <img className="main-image" src="/public/foto7.jpg" alt="foto1" />
        <div className="top-images">
          <img src="/public/veranda-esterna.jpg" alt="foto2" />
          <img src="/public/veranda-esterna-2.jpg" alt="foto3" />
        </div>

        <p className="descrizione-contatti">
          SamyBar è un bar-ristorante sul mare in Sardegna, ideale per gustare ottime pizze artigianali e panini con carni selezionate. Offre una cucina di qualità in un’atmosfera rilassante e accogliente. Perfetto per una pausa gustosa vicino al mare.
        </p>
        <div className="wrapper">
          <div className="carousel left-carousel">

            <img src="/public/foto1.jpg" alt="Foto 1" />
            <img src="/public/foto7.jpg" alt="Foto 2" />
          </div>


          <div className="orari-container">
            <h4 className="orari-section-title">I NOSTRI ORARI:</h4>
            <section className="orari-section">
              <h3 className="orari-title">⏰ Orari Di Apertura:</h3>
              <p className="orari-text">Lunedì - Sabato / 06.00 - 23.00</p>
            </section>
            <section className="orari-section">
              <h3 className="orari-title">🍽️ Orari Cucina:</h3>
              <p className="orari-text">Lunedì - Sabato / 12.00 - 15.00</p>
            </section>
            <section className="orari-section">
              <h3 className="orari-title">🍕 Orari Pizzeria:</h3>
              <p className="orari-text">Lunedì - Sabato / 19.00 - 22.30</p>
            </section>
          </div>
          <div className="carousel right-carousel">

            <img src="/public/foto1.jpg" alt="Foto 1" />
            <img src="/public/foto7.jpg" alt="Foto 2" />
          </div>
        </div>

        <div className="map-section">
          <h3 className="map-title">📍 Dove Trovarci:</h3>
          <div className="map-container">
            <iframe
              title="SamyBar Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6028.15341827425!2d9.513439675854643!3d40.935985971360736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d94a5b6d1c332b%3A0x6eb772c73c3aa5f!2sBar%20Samy!5e0!3m2!1sit!2sit!4v1750021516299!5m2!1sit!2sit"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <button ref={arrowRef} className="btn" onClick={handleClick}>Torna alla Home</button>
          </div>
        </div>
      </div>
    </div>
  );
}
