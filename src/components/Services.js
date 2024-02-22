import { useEffect, useState } from "react";
import "../styles/Services.css";
import axios, { Axios } from "axios";
import loadingGif from "../Bobbypin-loading.gif"

const Services = () => {
  const [colors, setColors] = useState();
  const [cuts, setCuts] = useState();
  const [special, setSpecial] = useState();
  const [extras, setExtras] = useState();

  useEffect(() => {
    document.title = "Radiant Light | Services"
    window.scrollTo(0, 0);

    fetchColors();
    fetchCuts();
    fetchSpecial();
    fetchExtras();
  }, []);

  const fetchColors = async () => {
    try {
      const response = await axios.get("https://radiant-light-server-b649d90c9bb7.herokuapp.com/service/Colors");

      axios.interceptors.response.use((error) => {
        if (Axios.isCancel(error)) {
          return console.log(error);
        }
      });
      setColors(response.data)
    } catch(err) {
      console.log(err)
    }
  };

  const fetchCuts = async () => {
    try {
      const response = await axios.get("https://radiant-light-server-b649d90c9bb7.herokuapp.com/service/Cuts");

      axios.interceptors.response.use((error) => {
        if (Axios.isCancel(error)) {
          return console.log(error);
        }
      });
      setCuts(response.data)
    } catch(err) {
      console.log(err)
    }
  };

  const fetchSpecial = async () => {
    try {
      const response = await axios.get("https://radiant-light-server-b649d90c9bb7.herokuapp.com/service/Special-Occasions");

      axios.interceptors.response.use((error) => {
        if (Axios.isCancel(error)) {
          return console.log(error);
        }
      });
      setSpecial(response.data)
    } catch(err) {
      console.log(err)
    }
  };

  const fetchExtras = async () => {
    try {
      const response = await axios.get("https://radiant-light-server-b649d90c9bb7.herokuapp.com/service/Extras");

      axios.interceptors.response.use((error) => {
        if (Axios.isCancel(error)) {
          return console.log(error);
        }
      });
      setExtras(response.data)
    } catch(err) {
      console.log(err)
    }
  };
  
  const renderServices = (array) => {
    return array?.map(service => {
      return (
        <div id={service.service_id} key={service.service_id} className="service-li col">
          <div className="row">
            <div className="col-3 photo-column">
              <img src={service.picture_url} alt="" className="service-display-picture" />
            </div>
            <div className="col service-header-column">
              <h1 className="service-header">{service.title}</h1>
            </div>
          </div>
          <h3 className="service-description">{service.description}</h3>
          <h3 className="service-price">{service.price}</h3>
        </div>
      )
    })
  }

  return (colors && cuts) ? (
    <div id="services">
      <div className="row" id="service-header-row">
        <div className="col service-image-div" id="fade-col-div">
          <div className="service-image" id="service-image-fade"></div>
        </div>
        <div className="col service-image-div">
          <div className="service-image" id="service-image-one"></div>
        </div>
      </div>
      <div id="services-hero-text">
        <h1>Services</h1>
        <h3>Contact me to find the service that's right for you!</h3>
      </div>
      <div id="service-list">
        <h1 className="service-cat-titles">Colors</h1>
        <div id="service-colors" className="container row">
          {renderServices(colors)}
        </div>
        <h1 className="service-cat-titles">Cuts</h1>
        <div id="service-colors" className="container row">
          {renderServices(cuts)}
        </div>
        <h1 className="service-cat-titles">Special Occasions</h1>
        <div id="service-colors" className="container row">
          {renderServices(special)}
        </div>
        <h1 className="service-cat-titles">Extras</h1>
        <div id="service-colors" className="container row">
          {renderServices(extras)}
        </div>
      </div>
    </div>
  ) : (
    <div id="services">
      <div className="row" id="service-header-row">
        <div className="col service-image-div" id="fade-col-div">
          <div className="service-image" id="service-image-fade"></div>
        </div>
        <div className="col service-image-div">
          <div className="service-image" id="service-image-one"></div>
        </div>
      </div>
      <div id="services-hero-text">
        <h1>Services</h1>
        <h3>If you're looking to book, check out my <a href="https://radiantlighthd.glossgenius.com" target="popup" onClick={() => window.open('https://radiantlighthd.glossgenius.com/','Book an Appointment with USERNAME','width=600,height=400')}>booking page</a></h3>
      </div>
      <div id="service-list">
        <img src={loadingGif} id="services-loading" alt="" />
      </div>
    </div>
  )
}

export default Services;