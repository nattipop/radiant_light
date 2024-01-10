import { useEffect, useState } from "react";
import "../styles/AdminServices.css";
import axios from "axios";

const AdminServices = () => {
  const [services, setServices] = useState();
  
  useEffect(() => {
    fetchServices();
  }, [services]);

  const fetchServices = async () => {
    try {
      const response = await axios.get("https://radiant-light-server-b649d90c9bb7.herokuapp.com/all-services");

      setServices(response.data)
    } catch(err) {
      console.log(err)
    }
  };

  const renderServices = () => {
    return services?.map(service => {
      return (
        <div className="col" key={service.service_id}>
          <h1>{service.title}</h1>
          <h3>{service.price}</h3>
        </div>
      )
    })
  }

  return services ? (
    <div id="admin-services" className="row">
      {renderServices()}
    </div>
  ) : (
    <div>No Services</div>
  )
};

export default AdminServices;