import NavBar from "./Navbar";
import HeroCarousel from "./HeroCarousel";
import Contact from "./Contact";

export default function HomePage() {


  return (

    <div>

      <div className="div-navbar">
        <NavBar />
      </div>
      <h2 className="title-homePage">
        I nostri Locali
      </h2>
      <HeroCarousel />
      <div>
        <p className="descrption-home">
          Tre anime diverse, un’unica esperienza sul mare di Sardegna: dall’aperitivo al tramonto, ai sapori autentici della cucina isolana, fino alle notti più vive e sfrenate. Un viaggio tra gusto, atmosfera e libertà, immersi nei profumi e nei colori del Mediterraneo.
        </p>

        <h3>
          CONTATTACI
        </h3>

        <Contact />
      </div>
    </div>

  )
}