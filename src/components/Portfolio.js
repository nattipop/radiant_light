import { useEffect } from "react";
import "../styles/Portfolio.css";
import WeddingWidget from "./WeddingWidget";
import ColorWidget from "./ColorWidget"

const Portfolio = () => {

  useEffect(() => {
    document.title = "Radiant Light | Gallery";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="row" id="gallery-header-row">
        <div className="col service-image-div">
          <div className="gallery-image" id="gallery-image-one"></div>
        </div>
      </div>
      <div id="gallery-hero-text">
        <h1>Gallery</h1>
        <h3> </h3>
      </div>
      <div id="portfolio">
        <div className="row" id="wedding-row">
          <h1 id="wedding-title">Weddings</h1>
          <WeddingWidget />
        </div>
        <div className="row" id="colors-row">
          <h1 id="colors-title">Colors</h1>
          <ColorWidget />
        </div>
      </div>
    </div>
  )
}

export default Portfolio;