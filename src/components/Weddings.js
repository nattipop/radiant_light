/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from "react-router-dom";
import "../styles/Portfolio.css";
import { useEffect, useState } from "react";
import axios, { Axios } from "axios";

const Weddings = () => {
  const [photos, setPhotos] = useState();
  const [enlarge, setEnlarge] = useState();
  const {category} = useParams();
  const [oneImage, setOneImage] = useState();
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
      
      axios.interceptors.response.use((error) => {
        if (Axios.isCancel(error)) {
          return console.log(error);
        }
      });
      setPhotos(response.data)
    } catch(err) {
      console.log(err)
    }
  }

  const renderPhotos = () => {
    return photos.map(photo => {
      return (
        <img className="wed-gallery-img" src={photo.url} alt="" width="200px" key={photo.photo_id} onClick={()=> {
          setEnlarge(photo)
        }} />
      )
    })
  }

  const renderEnlarged = () => {
    return enlarge ? (
      <div id="overlay">
        <h1 onClick={() => setEnlarge("")}>X</h1>
        <img id="enlarged-image" src={enlarge.url} alt="" />
      </div>
    ) : ""
  }

  return photos ? (
    <div className="row" id="wed-row">
      <div className="col" id="wed-display-col">
        <h1 id="photo-main-title">{category}</h1>
        <img id="wed-main-photo" src={(category === "Weddings" ? "https://res.cloudinary.com/dawteptkh/image/upload/v1701362955/IMG_3905_e7f9vd.jpg" : "https://res.cloudinary.com/dawteptkh/image/upload/v1708456218/IMG_8213_dzpfou.jpg")} alt="" width="450px" />
      </div>
      <div className="col" id="wed-photos-col">
        {renderPhotos()}
        <Link to="/gallery"><button id="wedding-view-more" className="button-style edit-button">Back</button></Link>
      </div>
      {renderEnlarged()}
    </div>
  ) : ""
}

export default Weddings;