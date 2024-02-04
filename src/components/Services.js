import { useEffect, useState } from "react";
import "../styles/Services.css";
import axios from "axios";

const Services = () => {
  const [data, setData] = useState();
  console.log(data)

  useEffect(() => {
    document.title = "Radiant Light | Services"
    window.scrollTo(0, 0);

    fetchData()
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://radiant-light-server-b649d90c9bb7.herokuapp.com/all-services");

      setData(response.data)
    } catch(err) {
      console.log(err)
    }
  };

  const renderServices = () => {
    return data.map(service => {
      return (
        <li id={service.service_id} key={service.service_id} className="service-li col">
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
        </li>
      )
    })
  }

  return data ? (
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
      <ul id="service-list" className="container row">
        {renderServices()}
      </ul>
    </div>
  ) : (
    <div id="services">
      <div className="row" id="service-header-row">
        <div className="col service-image-div">
          <div id="service-image-fade"></div>
        </div>
        <div className="col service-image-div">
          <div id="service-image-one"></div>
        </div>
      </div>
      <div id="services-hero-text">
        <h1>Services</h1>
        <h3>If you're looking to book, check out my glossgenius <a href="https://radiantlighthd.glossgenius.com" target="popup" onClick={() => window.open('https://radiantlighthd.glossgenius.com/','Book an Appointment with USERNAME','width=600,height=400')}>booking page</a></h3>
      </div>
      <ul id="service-list" className="container row">
        <img id="main-loading" src="https://res.cloudinary.com/dawteptkh/image/upload/v1705461903/RLLoading_rscqks.gif" alt="" />
      </ul>
    </div>
  )
}

export default Services;