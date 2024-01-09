import { useEffect, useState } from "react";
import "../styles/AdminPhotos.css";
import axios from "axios";

const AdminPhotos = () => {
  const [photos, setPhotos] = useState();
  
  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/all-photos");

      setPhotos(response.data)
    } catch(err) {
      console.log(err)
    }
  };

  const renderPhotos = () => {
    return photos?.map(photo => {
      return (
        <div className="col" key={photo.photo_id}>
          <img src={photo.url} alt="" width="200px" />
          <h3>{photo.title}</h3>
        </div>
      )
    })
  }

  return photos ? (
    <div id="admin-photos" className="row container">
      {renderPhotos()}
    </div>
  ) : (
    <div>No Photos</div>
  )
};

export default AdminPhotos;