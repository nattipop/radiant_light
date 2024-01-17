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
          <img src={service.picture_url} alt="" width="150px" />
          <h1 className="service-header">{service.title}</h1>
          <h3 className="service-description">{service.description}</h3>
          <h3 className="service-price">{service.price}</h3>
        </li>
      )
    })
  }

  return data ? (
    <div id="services" className="container">
      <ul id="service-list" className="row">
        <h1>Services</h1>
        {renderServices()}
      </ul>
    </div>
  ) : (
    <img id="main-loading" src="https://res.cloudinary.com/dawteptkh/image/upload/v1705461903/RLLoading_rscqks.gif" alt="" />
  )
}

export default Services;