import { useState, useEffect } from "react";

const slides = [
  {
    image: "/public/foto1.jfif",
    text: "SamyBar — dove il tramonto incontra il cocktail",
    link: "/samybar",
  },
  {
    image: "/public/foto2.jfif",
    text: "CafeDuPort — sapori francesi sul mare",
    link: "/cafeduport",
  },
  {
    image: "/public/foto3.jfif",
    text: "CrazyHorse — musica, onde e libertà",
    link: "/crazyhorse",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // cambia ogni 5 secondi

    return () => clearInterval(interval);
  }, []);

  const { image, text, link } = slides[currentSlide];

  return (
    <section className="hero-banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero-overlay">
        <div className="hero-text">{text}</div>
        <a className="hero-button" href={link}>Visita...</a>
      </div>
    </section>
  );
}
