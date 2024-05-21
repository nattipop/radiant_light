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
  )
}

export default Portfolio;