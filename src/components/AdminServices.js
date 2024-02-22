import { useEffect, useState } from "react";
import "../styles/AdminServices.css";
import axios, { Axios } from "axios";
import { Link, useNavigate } from "react-router-dom";
import loadingGif from "../Bobbypin-loading.gif";

const AdminServices = () => {
  const [services, setServices] = useState();
  const [flaggedService, setFlaggedService] = useState();
  const navigate = useNavigate();
  
  useEffect(() => {
    fetchServices();
  }, [services]);

  const fetchServices = async () => {
    try {
      const response = await axios.get("https://radiant-light-server-b649d90c9bb7.herokuapp.com/all-services");

      axios.interceptors.response.use((error) => {
        if (Axios.isCancel(error)) {
          return console.log(error);
        }
      });
      setServices(response.data)
    } catch(err) {
      console.log(err)
    }
  };

  const renderServices = () => {
    return services?.map(service => {
      return (
        <div className="col service-box" key={service.service_id} id={service.service_id}>
          <div className="buttons-box">
            <button className="button-style edit-button" onClick={e => {
              const service_id = e.target.parentElement.parentElement.id;

              navigate(`/admin-private/services/edit/${service_id}`);
            }}>Edit</button>
            <button className="button-style delete-button" onClick={(e) => {
              document.getElementById("confirm-div").style.display = "block";
              setFlaggedService(e.target.parentElement.parentElement.id)
            }}>Delete</button>
          </div>
          <img src={service.picture_url} alt="" className="admin-service-display-image" />
          <h1 className="service-title">{service.title}</h1>
          <h3 className="service-cat">{service.category}</h3>
          <h3 className="photo-cat">{service.description}</h3>
          <h3 className="photo-cat">{service.price}</h3>
        </div>
      )
    })
  };

  const deleteService = async() => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.delete(`https://radiant-light-server-b649d90c9bb7.herokuapp.com/delete-service/${flaggedService}`);

      axios.interceptors.response.use((error) => {
        if (Axios.isCancel(error)) {
          return console.log(error);
        }
      });
      fetchServices();
      document.getElementById("confirm-div").style.display = "none";
    } catch(err) {
      console.log(err)
    }
  }

  return services ? (
    <div id="admin-services">
      <div className="row container" id="admin-row">
        <div>
          <Link to="/admin-private/services/new"><button className="button-style" id="add-new">+ Add new service</button></Link>
        </div>
        <div id="confirm-div">
          <p>Are you sure you want to delete service {flaggedService}?</p>
          <div className="buttons-div">
            <button id="yes" className="button-style" onClick={deleteService}>Yes</button>
            <button id="cancel" className="button-style" onClick={() => {
              document.getElementById("confirm-div").style.display = "none";
            }}>Cancel</button>
          </div>
        </div>
        {renderServices()}
      </div>
    </div>
  ) : (
    <div id="loading">
      <img src={loadingGif} alt="" width="500px" />
    </div>
  )
};

export default AdminServices;