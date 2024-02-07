/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Event = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState();

  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = async () => {
    try {
      const response = await axios.get(`https://radiant-light-server-b649d90c9bb7.herokuapp.com/event-by-id/${eventId}`);

      setEvent(response.data)
    } catch(err) {
      console.log(err)
    }
  }

  return event ? (
    <div id="single-event">
      <h1 id="se-hero" style={{backgroundImage: `url("${event.picture_url}")`}}>{event.title}</h1>
    </div>
  ) : (
    <div id="single-event">
      <h1>Sorry, this event does not exist</h1>
    </div>
  )
}

export default Event;