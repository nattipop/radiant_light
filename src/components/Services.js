import { useEffect } from "react";
import "../styles/Services.css";

const Services = () => {
  useEffect(() => {
    document.title = "Radiant Light | Services"
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="services">
      Services
    </div>
  )
}

export default Services;