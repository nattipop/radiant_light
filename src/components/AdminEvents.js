import { useEffect, useState } from "react";
import "../styles/AdminEvents.css";
import axios from "axios";

const AdminEvents = () => {
  const [events, setEvents] = useState();
  
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

  const renderEvents = () => {
    return events?.map(event => {
      return (
        <div className="col" key={event.event_id}>
          <h1>{event.title}</h1>
        </div>
      )
    })
  }

  return events ? (
    <div id="admin-events" className="row">
      {renderEvents()}
    </div>
  ) : (
    <div>No Events</div>
  )
};

export default AdminEvents;