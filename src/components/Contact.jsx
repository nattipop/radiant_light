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
      <div id="contact-body">
        <div className="row contact-row">
          <div className="col contact-col">
            <h1>Phone:</h1>
            <p>(715) 642-3151</p>
          </div>
          <div className="col contact-col">
            <h1>Email:</h1>
            <p>radiantlighthd@gmail.com</p>
          </div>
          <a href="https://pin.it/6jOBBDLMW" id="pinterest-link" className="col contact-col">
            <img src="https://www.wblibrary.org/site-assets/images/pinterest-logo/@@images/image.png" width="50px" />
            <p>Pinterest</p>
          </a>
          <div id="instagram-section">
            <h1 className="instagram-header">Instagram</h1>
            <div className="elfsight-app-6def9017-3863-403a-98ab-a7b821c45292" data-elfsight-app-lazy></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;