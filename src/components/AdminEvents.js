import { useEffect, useState } from "react";
import "../styles/AdminEvents.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AdminEvents = () => {
  const [events, setEvents] = useState();
  const [flaggedEvent, setFlaggedEvent] = useState();
  const navigate = useNavigate();
  
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("https://radiant-light-server-b649d90c9bb7.herokuapp.com/all-events");

      setEvents(response.data)
    } catch(err) {
      console.log(err)
    }
  };

  const renderUpcomingEvents = () => {
    return events?.map(event => {
      const now = new Date();
      const eventExpires = new Date(event.expires)

      return (eventExpires > now) ? (
        <div className="col event-box" key={event.event_id} id={event.event_id} style={{backgroundImage: `url(${event.picture_url})`, backgroundSize: "cover"}}>
          <div className="buttons-box">
            <button className="button-style edit-button" onClick={e => {
              const event_id = e.target.parentElement.parentElement.id;
              console.log(e.target.parentElement.parentElement.id)
              
              navigate(`/admin-private/events/edit/${event_id}`);
            }}>Edit</button>
            <button className="button-style delete-button" onClick={(e) => {
              document.getElementById("confirm-div").style.display = "block";
              setFlaggedEvent(e.target.parentElement.parentElement.id)
            }}>Delete</button>
          </div>
          <h1 className="event-title">{event.title}</h1>
          <p className="event-info">{event.description}</p>
          <p className="event-info">{event.date}</p>
          <p className="event-info">{event.time}</p>
          <p className="event-info">{event.location}</p>
        </div>
      ) : ""
    })
  };

  const renderPastEvents = () => {
    return events?.map(event => {
      const now = new Date();
      const eventExpires = new Date(event.expires)

      return (eventExpires < now) ? (
        <div className="col event-box" key={event.event_id} id={event.event_id} style={{backgroundImage: `url(${event.picture_url})`, backgroundSize: "cover"}}>
          <div className="buttons-box">
            <button className="button-style edit-button" onClick={e => {
              const event_id = e.target.parentElement.parentElement.id;
              console.log(e.target.parentElement.parentElement.id)
              
              navigate(`/admin-private/events/edit/${event_id}`);
            }}>Edit</button>
            <button className="button-style delete-button" onClick={(e) => {
              document.getElementById("confirm-div").style.display = "block";
              setFlaggedEvent(e.target.parentElement.parentElement.id)
            }}>Delete</button>
          </div>
          <h1 className="event-title">{event.title}</h1>
          <p className="event-info">{event.description}</p>
          <p className="event-info">{event.date}</p>
          <p className="event-info">{event.time}</p>
          <p className="event-info">{event.location}</p>
        </div>
      ) : ""
    })
  };

  const deleteEvent = async() => {
    try {
      const response = await axios.delete(`https://radiant-light-server-b649d90c9bb7.herokuapp.com/delete-event/${flaggedEvent}`);

      console.log(response)
      fetchEvents();
      document.getElementById("confirm-div").style.display = "none";
    } catch(err) {
      console.log(err)
    }
  }

  return events ? (
    <div id="admin-events">
      <div className="row container" id="events-rows">
        <div>
          <Link to="/admin-private/events/new"><button className="button-style" id="add-new">+ Add new event</button></Link>
        </div>
        <div id="confirm-div">
          <p>Are you sure you want to delete event {flaggedEvent}?</p>
          <div className="buttons-div">
            <button id="yes" className="button-style" onClick={deleteEvent}>Yes</button>
            <button id="cancel" className="button-style" onClick={() => {
              document.getElementById("confirm-div").style.display = "none";
            }}>Cancel</button>
          </div>
        </div>
        <h3 className="event-header">Upcoming Events:</h3>
        {renderUpcomingEvents()}
        <h3 className="event-header">Past Events:</h3>
        {renderPastEvents()}
      </div>
    </div>
  ) : (
    <div id="loading">
      <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1705461903/RLLoading_rscqks.gif" alt="" width="500px" />
    </div>
  )
};

export default AdminEvents;