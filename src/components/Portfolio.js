import { useEffect, useState } from "react";
import "../styles/Portfolio.css";
import axios from "axios";

const Portfolio = () => {
  const [weddingData, setWeddingData] = useState();
  const [highlightsData, setHighlightsData] = useState();

  const fetchPhotos = async () => {
    try {
      const response = await axios.get("https://radiant-light-server-b649d90c9bb7.herokuapp.com/photos/Wedding");

      setWeddingData(response.data)
    } catch(err) {
      console.log(err)
    }

    try {
      const response = await axios.get("https://radiant-light-server-b649d90c9bb7.herokuapp.com/photos/Highlights");

      setHighlightsData(response.data)
    } catch(err) {
      console.log(err)
    }
  };

  useEffect(() => {
    document.title = "Radiant Light | Gallery";
    window.scrollTo(0, 0);

    fetchPhotos()
  }, []);

  const renderWedding = () => {
    return weddingData.map(photo => {
      return (
        <img src={photo.url} alt="" width="200px" key={photo.photo_id} />
      )
    })
  };

  const renderHighlights = () => {
    console.log(highlightsData)
    return highlightsData.map(photo => {
      return (
        <img src={photo.url} alt="" width="200px" key={photo.photo_id} />
      )
    })
  }

  return weddingData && highlightsData ? (
    <div id="portfolio">
      <h1 className="julius-so">Wedding</h1>
      {renderWedding()}
      <h1 className="julius-so">Highlights</h1>
      {renderHighlights()}
      <h1 className="julius-so">Colors</h1>
    </div>
  ) : (
    <img src="https://i.stack.imgur.com/ATB3o.gif" alt="" width="400px" />
  )
}

export default Portfolio;