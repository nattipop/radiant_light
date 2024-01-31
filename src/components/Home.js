import { useEffect, useState } from "react";
import "../styles/Home.css"
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentLogo, setCurrentLogo] = useState("https://res.cloudinary.com/dawteptkh/image/upload/v1705461903/RLLoading_rscqks.gif");
  const [events, setEvents] = useState();

  useEffect(() => {
    document.title = "Radiant Light | Home";
    window.scrollTo(0, 0);

    setTimeout(() => {
      setCurrentLogo("https://res.cloudinary.com/dawteptkh/image/upload/v1705460707/Logorl_rccdex.png")
    }, 2700);

    fetchHomeEvents()
  }, []);

  const fetchHomeEvents = async () => {
    try {
      const response = await axios.get("https://radiant-light-server-b649d90c9bb7.herokuapp.com/all-events");

      setEvents(response.data)
    } catch(err) {
      console.log(err)
    }
  };

  const renderEvents = () => {
    return events?.map(event => {
      const now = new Date();
      const eventExpires = new Date(event.expires);

      return (eventExpires > now) ? (
        <div className="col home-event-box" key={event.event_id} id={event.event_id} style={{backgroundImage: `url(${event.picture_url})`, backgroundSize: "cover"}}>
          <h1 className="event-home-title">{event.title}</h1>
          <Link className="event-home-info">Read more</Link>
          <p className="event-home-info">{event.date}</p>
          <p className="event-home-info">{event.time}</p>
          <p className="event-home-info">{event.location}</p>
        </div>
      ) : "";
    })
  }

  return (
    <div id="home">
      <div className="home-header">
        <img className="home-image" src="https://res.cloudinary.com/dawteptkh/image/upload/v1700670304/IMG_4476_grrbmf.jpg" width="100%" alt="" />
        <div className="home-overlay">
          <img id="animated-logo" src={currentLogo} width="730px" alt="" onClick={() => {
            setCurrentLogo("https://res.cloudinary.com/dawteptkh/image/upload/v1705461903/RLLoading_rscqks.gif")
            setTimeout(() => {
              setCurrentLogo("https://res.cloudinary.com/dawteptkh/image/upload/v1705460707/Logorl_rccdex.png")
            }, 2700)
          }} />
        </div>
      </div>
      <div id="home-event-section" className="row">
        {renderEvents()}
      </div>
    </div>
  )
}

export default Home;