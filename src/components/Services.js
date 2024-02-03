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
            <div className="col-3">
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
      <img id="services-hero-img" src="https://res.cloudinary.com/dawteptkh/image/upload/c_fill,h_500,q_auto:best,w_1300/v1706797807/IMG_2637_2_wmib0l.png" alt="" width="100%" />
      <div id="services-hero-text">
        <h1>Services</h1>
        <p>Listed below are the services I offer at Radiant Light</p>
        <p>If you're looking to book, check out my glossgenius <a href="https://radiantlighthd.glossgenius.com" target="popup" onClick={() => window.open('https://radiantlighthd.glossgenius.com/','Book an Appointment with USERNAME','width=600,height=400')}>booking page</a></p>
      </div>
      <ul id="service-list" className="container row">
        {renderServices()}
      </ul>
    </div>
  ) : (
    <div id="services">
      <img id="services-hero-img" src="https://res.cloudinary.com/dawteptkh/image/upload/c_fill,h_500,q_auto:best,w_1300/v1706797807/IMG_2637_2_wmib0l.png" alt="" width="100%" />
      <div id="services-hero-text">
        <h1>Services</h1>
        <h3>Listed below are the services I offer at Radiant Light</h3>
        <h3>If you're looking to book, check out my glossgenius <a href="https://radiantlighthd.glossgenius.com" target="popup" onClick={() => window.open('https://radiantlighthd.glossgenius.com/','Book an Appointment with USERNAME','width=600,height=400')}>booking page</a></h3>
      </div>
      <img id="main-loading" src="https://res.cloudinary.com/dawteptkh/image/upload/v1705461903/RLLoading_rscqks.gif" alt="" />
    </div>
  )
}

export default Services;