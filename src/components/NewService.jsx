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
  const [displayOrder, setDisplayOrder] = useState();
  const [category, setCategory] = useState();
  const navigate = useNavigate();

  const formSubmit = async (e) => {
    setServiceId((Math.random()*2302423))
    e.preventDefault()
    const values = {
      title: title,
      description: description,
      picture_url: picture_url,
      price: price,
      service_id: service_id,
      category: category,
      order: displayOrder
    }

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post("https://radiant-light-server-b649d90c9bb7.herokuapp.com/new-service", values);
    
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
        <textarea onChange={e => setDescription(e.target.value)} id="description-input" className="form-inputs" title="description" placeholder="Description" type="text" />
        <p className="current-price">Category:</p>
        <select onChange={e => {
          setCategory(e.target.value)
        }} id="category-select" className="form-inputs">
          <option defaultValue></option>
          <option value="Colors">Colors</option>
          <option value="Special-Occasions">Special-Occasions</option>
          <option value="Cuts">Cuts</option>
          <option value="Extras">Extras</option>
        </select>
        <input onChange={e => setPictureUrl(e.target.value)} id="url-input" className="form-inputs" title="url" placeholder="Picture Url" type="url" />
        <input onChange={e => setPrice(e.target.value)} id="price-input" className="form-inputs" title="price" placeholder="Price" type="text"/>
        <p className="current-price">Select a display order (1 being top of the list)</p>
        <select onChange={e => {
          setDisplayOrder(e.target.value)
        }} id="category-select" className="form-inputs">
          <option defaultValue></option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button onClick={formSubmit} className="button-style">Submit</button>
      </form>
    </div>
  )
};

export default NewService;