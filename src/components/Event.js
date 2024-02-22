/* eslint-disable react-hooks/exhaustive-deps */
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Event = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState();

  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = async () => {
    try {
      const response = await axios.get(`https://radiant-light-server-b649d90c9bb7.herokuapp.com/event-by-id/${eventId}`);

      axios.interceptors.response.use((error) => {
        if (Axios.isCancel(error)) {
          return console.log(error);
        }
      });
      setEvent(response.data)
    } catch(err) {
      console.log(err)
    }
  }

  return event ? (
    <div id="single-event">
      <Link to="/" id="event-back">Back</Link>
      <div id="se-hero" style={{backgroundImage: `url("${event.picture_url}")`, backgroundPosition: "0px -500px"}}></div>
      <div id="single-event-main">
        <h1 id="event-title-single">{event.title}</h1>
        <h3>{event.description}</h3>
        <a id="event-maps-link" href={`https://www.google.com/maps/search/${event.location}`}>{event.location}</a>
        <h3>{event.date}</h3>
        <h3>{event.time}</h3>
      </div>
    </div>
  ) : (
    <div id="single-event">
      <h1>Sorry, this event does not exist</h1>
    </div>
  )
}

export default Event;