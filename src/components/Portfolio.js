import { useEffect, useState } from "react";
import "../styles/Portfolio.css";
import axios from "axios";
import loadingGif from "../Bobbypin-loading.gif";

const Portfolio = () => {
  const [weddingsData, setWeddingsData] = useState();
  const [colorsData, setColorsData] = useState();

  const fetchPhotos = async () => {
    try {
      const response = await axios.get("https://radiant-light-server-b649d90c9bb7.herokuapp.com/photos/Weddings");

      setWeddingsData(response.data)
    } catch(err) {
      console.log(err)
    }

    try {
      const response = await axios.get("https://radiant-light-server-b649d90c9bb7.herokuapp.com/photos/Colors");

      setColorsData(response.data)
    } catch(err) {
      console.log(err)
    }
  };

  useEffect(() => {
    document.title = "Radiant Light | Gallery";
    window.scrollTo(0, 0);

    fetchPhotos()
  }, []);

  const renderWeddings = () => {
    return weddingsData.filter((photo, idx) => idx < 4).map(photo => {
      return (
        <img className="gallery-img" src={photo.url} alt="" width="200px" key={photo.photo_id} />
      )
    })
  };

  const renderColors = () => {
    return colorsData.filter((photo, idx) => idx < 4).map(photo => {
      return (
        <img className="gallery-img" src={photo.url} alt="" width="200px" key={photo.photo_id} />
      )
    })
  }

  return weddingsData && colorsData ? (
    <div id="portfolio">
      <div className="row" id="wedding-row">
        <div className="col" id="wedding-display-col">
          <h1 id="wedding-title">Weddings</h1>
          <img id="wedding-main-photo" src="https://res.cloudinary.com/dawteptkh/image/upload/v1701362955/IMG_3905_e7f9vd.jpg" alt="" width="450px" />
        </div>
        <div className="col" id="wedding-photos-col">
          {renderWeddings()}
        </div>
      </div>
      <div className="row" id="colors-row">
        <div className="col" id="colors-photos-col">
          {renderColors()}
        </div>
        <div className="col" id="colors-display-col">
          <img id="colors-main-photo" src="https://res.cloudinary.com/dawteptkh/image/upload/v1706713452/IMG_6728_w3e7nc.jpg" alt="" width="450px" />
          <h1 id="colors-title">Colors</h1>
        </div>
      </div>
    </div>
  ) : (
    <div id="portfolio">
      <div className="row" id="wedding-row">
        <div className="col" id="wedding-display-col">
          <h1 id="wedding-title">Weddings</h1>
          <img id="wedding-main-photo" src="https://res.cloudinary.com/dawteptkh/image/upload/v1701362955/IMG_3905_e7f9vd.jpg" alt="" width="450px" />
        </div>
        <div className="col" id="wedding-photos-col">
        <img className="main-loading" src={loadingGif} alt="" />
        </div>
      </div>
      <div className="row" id="colors-row">
        <div className="col" id="colors-photos-col">
          <img className="main-loading" src={loadingGif} alt="" />
        </div>
        <div className="col" id="colors-display-col">
          <img id="colors-main-photo" src="https://res.cloudinary.com/dawteptkh/image/upload/v1706713452/IMG_6728_w3e7nc.jpg" alt="" width="450px" />
          <h1 id="colors-title">Colors</h1>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;