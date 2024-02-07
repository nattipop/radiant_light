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
        <div className="col home-event-box" key={event.event_id} id={event.event_id}>
          <h1 className="event-home-title">{event.title}</h1>
          <p className="event-home-info">{event.date}</p>
          <p className="event-home-info">{event.time}</p>
          <p className="event-home-info">{event.location}</p>
          <Link to={`/event/${event.event_id}`} className="event-home-info">Read more</Link>
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
      <div id="location-map">
        <div id="address-div" className="row">
          <div className="col-8" id="iframe-col">
            <iframe
              title="radiantlightlocation"
              width="100%"
              height="300px"
              style={{border: "2px solid var(--teal)"}}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDeq9ZDHk_5yIu_upHgfurpt4eQM3UF0EE&q=1+S+Main+St,Rice+Lake+WI">
            </iframe>
          </div>
          <div id="address-col" className="col-4">
            <img id="location-icon" src="https://res.cloudinary.com/dawteptkh/image/upload/v1707264514/location_dzsdpz.png" alt="" width="64px" />
            <a href="https://www.google.com/maps/place/1+S+Main+St,+Rice+Lake,+WI+54868/@45.5015508,-91.7357139,17z/data=!3m1!4b1!4m6!3m5!1s0x52acfa3b229343cf:0xf0b9f01d6184a393!8m2!3d45.5015471!4d-91.733139!16s%2Fg%2F11bw3ygrn1?entry=ttu"><h3 className="address">1 S Main St Rice Lake, WI 54868</h3></a>
          </div>
        </div>
      </div>
      <div id="home-event-section" className="row">
        <h1>Upcoming Events:</h1>
        {renderEvents()}
      </div>
    </div>
  )
}

export default Home;