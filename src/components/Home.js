import { useEffect, useState } from "react";
import "../styles/Home.css"

const Home = () => {
  const [currentLogo, setCurrentLogo] = useState("https://res.cloudinary.com/dawteptkh/image/upload/v1705461903/RLLoading_rscqks.gif");

  useEffect(() => {
    document.title = "Radiant Light | Home";
    window.scrollTo(0, 0);

    setTimeout(() => {
      setCurrentLogo("https://res.cloudinary.com/dawteptkh/image/upload/v1705460707/Logorl_rccdex.png")
    }, 2700)
  }, []);


  return (
    <div id="home" className="julius-so">
      <div className="home-header">
        <img className="home-image" src="https://res.cloudinary.com/dawteptkh/image/upload/v1700670304/IMG_4476_grrbmf.jpg" width="100%" alt="" />
        <div className="home-overlay">
          <img src={currentLogo} width="730px" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home;