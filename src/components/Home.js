import { useEffect } from "react";
import "../styles/Home.css"

const Home = () => {
  useEffect(() => {
    document.title = "Radiant Light | Home";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="home" className="julius-so">
      Home
    </div>
  )
}

export default Home;