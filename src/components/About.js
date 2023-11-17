import { useEffect } from "react";
import "../styles/About.css"

const About = () => {
  useEffect(() => {
    document.title = "Radiant Light | Meet the Stylist";
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div id="about" className="bebas-neue">
      Meet the Stylist
    </div>
  )
}

export default About;