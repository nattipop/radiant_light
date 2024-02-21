/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from "react-router-dom";
import "../styles/Portfolio.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Weddings = () => {
  const [photos, setPhotos] = useState();
  const [enlarge, setEnlarge] = useState();
  const {category} = useParams();
  console.log(category)
  console.log(enlarge)

  useEffect(() => {
    document.title = `Radiant Light | ${category}`;
    window.scrollTo(0, 0);

    fetchPhotos()
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get(`https://radiant-light-server-b649d90c9bb7.herokuapp.com/photos/${category}`)
    
      setPhotos(response.data)
    } catch(err) {
      console.log(err)
    }
  }

  const renderPhotos = () => {
    return photos.map(photo => {
      return (
        <img className="gallery-img" src={photo.url} alt="" width="200px" key={photo.photo_id} onClick={()=> setEnlarge(photo.photo_id)} />
      )
    })
  }


  return photos ? (
    <div className="row" id="wedding-row">
      <div className="col" id="wedding-display-col">
        <h1 id="photo-main-title">{category}</h1>
        <img id="wedding-main-photo" src={photos[0].url} alt="" width="450px" />
      </div>
      <div className="col" id="wedding-photos-col">
        {renderPhotos()}
        <Link to="/gallery"><button id="wedding-view-more" className="button-style edit-button">Back</button></Link>
      </div>
    </div>
  ) : ""
}

export default Weddings;