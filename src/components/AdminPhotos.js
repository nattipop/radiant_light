import { useEffect, useState } from "react";
import "../styles/AdminPhotos.css";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminPhotos = () => {
  const [photos, setPhotos] = useState();
  const [flaggedPhoto, setFlaggedPhoto] = useState();
  
  useEffect(() => {
    fetchPhotos();
  }, [photos]);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get("https://radiant-light-server-b649d90c9bb7.herokuapp.com/all-photos");

      setPhotos(response.data)
    } catch(err) {
      console.log(err)
    }
  };

  const renderPhotos = () => {
    return photos?.map(photo => {
      return (
        <div id={photo.photo_id} className="col photo-box" key={photo.photo_id}>
          <div className="buttons-box">
            <button className="button-style edit-button">Edit</button>
            <button className="button-style delete-button" onClick={(e) => {
              document.getElementById("confirm-div").style.display = "block";
              setFlaggedPhoto(e.target.parentElement.parentElement.id)
            }}>Delete</button>
          </div>
          <img className="photo-style" src={photo.url} alt="" width="200px" />
          <h3 className="photo-title">{photo.title}</h3>
          <h3 className="photo-desc">{photo.description}</h3>
          <h3 className="photo-cat">{photo.category}</h3>
        </div>
      )
    })
  };

  const deletePhoto = async() => {
    try {
      const response = await axios.delete(`https://radiant-light-server-b649d90c9bb7.herokuapp.com/delete-photo/${flaggedPhoto}`)
      console.log(response)
      document.getElementById("confirm-div").style.display = "none";
    } catch(err) {
      console.log(err)
    }
  }

  return photos ? (
    <div id="admin-photos" className="row container">
      <div>
        <Link to="/admin-private/photos/new"><button className="button-style">+ Add new photo</button></Link>
      </div>
      <div id="confirm-div">
        <p>Are you sure you want to delete photo {flaggedPhoto}?</p>
        <div className="buttons-div">
          <button id="yes" className="button-style" onClick={deletePhoto}>Yes</button>
          <button id="cancel" className="button-style" onClick={() => {
            document.getElementById("confirm-div").style.display = "none";
          }}>Cancel</button>
        </div>
      </div>
      {renderPhotos()}
    </div>
  ) : (
    <div>No Photos</div>
  )
};

export default AdminPhotos;