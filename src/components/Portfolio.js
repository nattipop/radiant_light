import { useEffect } from "react";
import "../styles/Portfolio.css";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Radiant Light | Gallery";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="portfolio">
      <div className="container">
        <div className="grid">
          <div className="cover-item">
            <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1701362955/IMG_3905_e7f9vd.jpg" alt="" id="wedding-cover" className="img-style-cover float-right" />
          </div>
          <div className="small-grid">
            <div className="item-1">
              <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1701362955/IMG_3876_zc8zrg.jpg" alt="" className="img-style-small" />
            </div>
            <div className="item-2">
              <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1701362955/IMG_3018_n8uwih.jpg" alt="" className="img-style-small" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;