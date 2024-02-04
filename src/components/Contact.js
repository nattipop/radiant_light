import { useEffect } from "react";
import "../styles/Contact.css"

const Contact = () => {
  useEffect(() => {
    document.title = "Radiant Light | Contact";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="contact" className="playfair">
      <div className="row" id="service-header-row">
        <div className="col service-image-div" id="fade-col-div">
          <div className="service-image" id="service-image-fade"></div>
        </div>
        <div className="col service-image-div">
          <div className="service-image" id="contact-image-one"></div>
        </div>
      </div>
      <div id="services-hero-text">
        <h1>Contact</h1>
      </div>
    </div>
  )
}

export default Contact;