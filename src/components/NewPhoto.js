import { useState } from "react";
import "../styles/NewPhoto.css";
import axios from "axios";
import { useNavigate } from "react-router";

const NewPhoto = () => {
  const [category, setCategory] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [url, setUrl] = useState();
  const [photo_id, setPhotoId] = useState();
  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault()
    const values = {
      title: title,
      description: description,
      category: category,
      url: url,
      photo_id: photo_id
    }

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post("https://radiant-light-server-b649d90c9bb7.herokuapp.com/new-photo", values);

      navigate("/admin-private/photos")
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className="container" id="edit-photo">
      <button id="back-button" className="button-style" onClick={() => navigate("/admin-private/photos")}>Back</button>
      <form id="photo-form">
        <h3>New Photo</h3>
        <input onChange={e => setTitle(e.target.value)} id="title-input" className="form-inputs" title="title" placeholder="Title" type="text" />
        <input onChange={e => setDescription(e.target.value)} id="description-input" className="form-inputs" title="description" placeholder="Description" type="text" />
        <input onChange={e => setUrl(e.target.value)} id="url-input" className="form-inputs" title="url" placeholder="Url" type="url" />
        <select onChange={e => {
          setCategory(e.target.value)
        }} id="category-select" className="form-inputs">
          <option defaultValue>Select a Category</option>
          <option value="Colors">Colors</option>
          <option value="Weddings">Weddings</option>
          <option value="Events">Events</option>
        </select>
        <input onChange={e => setPhotoId(e.target.value)} id="id-input" className="form-inputs" title="photo_id" placeholder="Id" type="text" />
        <button onClick={formSubmit} className="button-style">Submit</button>
      </form>
    </div>
  )
}

export default NewPhoto;