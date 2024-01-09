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
      const response = await axios.get("http://localhost:5000/all-services");

      setData(response.data)
    } catch(err) {
      console.log(err)
    }
  };

  const renderServices = () => {
    return data.map(service => {
      return (
        <li id={service.service_id} key={service.service_id} className="service-li col">
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
        {renderServices()}
      </ul>
    </div>
  ) : (
    <img src="https://i.stack.imgur.com/ATB3o.gif" alt="" width="400px" />
  )
}

export default Services;