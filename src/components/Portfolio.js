import { useEffect } from "react";
import "../styles/Portfolio.css";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Radiant Light | Gallery";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="portfolio">
      Portfolio
    </div>
  )
}

export default Portfolio;