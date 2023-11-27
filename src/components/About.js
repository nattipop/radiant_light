import { useEffect } from "react";
import "../styles/About.css"

const About = () => {
  useEffect(() => {
    document.title = "Radiant Light | Meet the Stylist";
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div id="about" className="bebas-neue container">
      <div className="row">
        <div className="col">
          <img id="mts-img" src="https://res.cloudinary.com/dawteptkh/image/upload/v1699925765/IMG_0491_dx0xbk.jpg" alt="" />
        </div>
        <div className="col" id="mts-header">
          <h1 id="mts-title" className="julius-so">Meet the Stylist</h1>
          <p id="mts-desc" className="bebas-neue">Hi my name is Hannah</p>
        </div>
      </div>
    </div>
  )
}

export default About;