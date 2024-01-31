import { useState } from "react";
import "../styles/NewPhoto.css"
import { useNavigate } from "react-router";
import axios from "axios";

const NewService = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [picture_url, setPictureUrl] = useState();
  const [service_id, setServiceId] = useState();
  const [price, setPrice] = useState();
  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault()
    const values = {
      title: title,
      description: description,
      picture_url: picture_url,
      price: price,
      service_id: service_id
    }

    try {
      const response = await axios.post("https://radiant-light-server-b649d90c9bb7.herokuapp.com/new-service", values);

      console.log(response);
      navigate("/admin-private/services")
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className="container" id="edit-photo">
      <button id="back-button" className="button-style" onClick={() => navigate("/admin-private/services")}>Back</button>
      <form id="photo-form">
        <h3>New Service</h3>
        <input onChange={e => setTitle(e.target.value)} id="title-input" className="form-inputs" title="title" placeholder="Title" type="text" />
        <input onChange={e => setDescription(e.target.value)} id="description-input" className="form-inputs" title="description" placeholder="Description" type="text" />
        <input onChange={e => setPictureUrl(e.target.value)} id="url-input" className="form-inputs" title="url" placeholder="Picture Url" type="url" />
        <input onChange={e => {
          const priceStr = `$${e.target.value}.00`
          setPrice(priceStr)
        }} id="price-input" className="form-inputs" title="price" placeholder="$ Price" type="number"/>
        <input onChange={e => setServiceId(e.target.value)} id="id-input" className="form-inputs" title="service_id" placeholder="Id" type="text" />
        <button onClick={formSubmit} className="button-style">Submit</button>
      </form>
    </div>
  )
};

export default NewService;