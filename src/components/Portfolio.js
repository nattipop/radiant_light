import { useEffect, useState } from "react";
import "../styles/Portfolio.css";
import axios from "axios";

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
    return weddingsData.map(photo => {
      return (
        <img className="gallery-img" src={photo.url} alt="" width="200px" key={photo.photo_id} />
      )
    })
  };

  const renderColors = () => {
    console.log(colorsData)
    return colorsData.map(photo => {
      return (
        <img className="gallery-img" src={photo.url} alt="" width="200px" key={photo.photo_id} />
      )
    })
  }

  return weddingsData && colorsData ? (
    <div id="portfolio">
      <h1 className="julius-so">Weddings</h1>
      {renderWeddings()}
      <h1 className="julius-so">Colors</h1>
      {renderColors()}
    </div>
  ) : (
    <img src="https://i.stack.imgur.com/ATB3o.gif" alt="" width="400px" />
  )
}

export default Portfolio;