import { useEffect } from "react";
import "../styles/Home.css"
import logo from "../RadiantLightAllWhite.png"

const Home = () => {
  useEffect(() => {
    document.title = "Radiant Light | Home";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="home" className="julius-so">
      <div className="home-header">
        <img className="home-image" src="https://res.cloudinary.com/dawteptkh/image/upload/v1700670304/IMG_4476_grrbmf.jpg" width="100%" alt="" />
        <div className="home-overlay">
          <img src={logo} width="700px" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home;