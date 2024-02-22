import { useNavigate, useParams } from "react-router";
import "../styles/EditPhoto.css";
import { useEffect, useState } from "react";
import axios from "axios";

const EditPhoto = () => {
  const { photoId } = useParams();
  const [photo, setPhoto] = useState();
  const [newTitle, setNewTitle] = useState();
  const [newDesc, setNewDesc] = useState();
  const [newUrl, setNewUrl] = useState();
  const [newCategory, setNewCategory] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPhoto()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchPhoto = async () => {
    try {
      const response = await axios.get(`https://radiant-light-server-b649d90c9bb7.herokuapp.com/photo-by-id/${photoId}`);

      setPhoto(response.data);
      setNewCategory(response.data.category);
      setNewDesc(response.data.description);
      setNewTitle(response.data.title);
      setNewUrl(response.data.url)
    } catch(err) {
      console.log(err)
    }
  };

  const formSubmit = async (e) => {
    e.preventDefault()
    const newValues = {
      title: newTitle,
      description: newDesc,
      url: newUrl,
      category: newCategory
    }

    console.log(newValues)

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.put(`https://radiant-light-server-b649d90c9bb7.herokuapp.com/photos/${photoId}`, newValues);

      navigate("/admin-private/photos");
    } catch(err) {
      console.log(err);
    }
  }

  return photo ? (
    <div className="container" id="edit-photo">
    <button id="back-button" className="button-style" onClick={() => navigate("/admin-private/photos")}>Back</button>
    <div className="row">
      <div className="col" id="edit-img-div"><img id="image-display" src={photo.url} alt="" width="300px" /></div>
      <form id="photo-form" className="col">
        <h3>Edit Photo</h3>
        <input onChange={e => setNewTitle(e.target.value)} id="title-input" className="form-inputs" title="title" placeholder="Title" defaultValue={photo.title} type=""/>
        <input onChange={e => setNewDesc(e.target.value)} id="description-input" className="form-inputs" title="description" placeholder="Description" type="text" defaultValue={photo.description}/>
        <input onChange={e => setNewUrl(e.target.value)} id="url-input" className="form-inputs" title="url" placeholder="Url" type="url" defaultValue={photo.url}/>
        <select onChange={e => {
          setNewCategory(e.target.value)
        }} id="category-select" className="form-inputs">
          <option defaultValue>{photo.category}</option>
          <option value="Colors">Colors</option>
          <option value="Weddings">Weddings</option>
          <option value="Events">Events</option>
        </select>
        <button onClick={formSubmit} className="button-style">Submit</button>
      </form>
    </div>
  </div>
  ) : (
    <div>No Photo Found</div>
  )
}

export default EditPhoto;