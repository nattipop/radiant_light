import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const NewEvent = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [picture_url, setPictureUrl] = useState();
  const [plainDate, setDate] = useState();
  const [timeBegin, setTimeBegin] = useState();
  const [timeEnd, setTimeEnd] = useState();
  const [location, setLocation] = useState();
  const [event_id, setEventId] = useState();
  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault()

    const expires = new Date(plainDate + " " + timeEnd)

    const beginDate = new Date(plainDate + " " + timeBegin);
    const endDate = new Date(plainDate + " " + timeEnd);

    const justDate = beginDate.toLocaleString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    });
    const startTime = beginDate.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric"
    });
    const endTime = endDate.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric"
    });

    const values = {
      title: title,
      description: description,
      picture_url: picture_url,
      date: justDate,
      time: `${startTime} - ${endTime}`,
      location: location,
      expires: expires,
      event_id: event_id
    }

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post("https://radiant-light-server-b649d90c9bb7.herokuapp.com/new-event", values);

      navigate("/admin-private/events")
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className="container" id="edit-photo">
    <button id="back-button" className="button-style" onClick={() => navigate("/admin-private/events")}>Back</button>
    <div className="row">
      <form id="photo-form" className="col">
        <h3>New Event</h3>
        <input onChange={e => setTitle(e.target.value)} id="title-input" className="form-inputs" title="title" placeholder="Title" type=""/>
        <textarea onChange={e => setDescription(e.target.value)} id="description-input" className="form-inputs" title="description" placeholder="Description" type="text"/>
        <input onChange={e => setEventId(e.target.value)} id="event-id-input" className="form-inputs" title="event id" placeholder="Id" type="text" />
        <input onChange={e => setPictureUrl(e.target.value)} id="url-input" className="form-inputs" title="url" placeholder="Picture Url" type="url" />
        <input onChange={e => setLocation(e.target.value)} id="location-input" className="form-inputs" title="location" placeholder="Location" type="address" />
        <input id="date-input" className="form-inputs" title="date" type="date" onChange={e => setDate(e.target.value)} />
        <p className="current-price">Event Begins</p>
        <input id="time-start-input" className="form-inputs" title="time" type="time" onChange={e => setTimeBegin(e.target.value)} />
        <p className="current-price">Event Ends</p>
        <input id="time-end-input" className="form-inputs" title="time" type="time" onChange={e => setTimeEnd(e.target.value)} />
        <button onClick={formSubmit} className="button-style">Submit</button>
      </form>
    </div>
  </div>
  )
}

export default NewEvent;