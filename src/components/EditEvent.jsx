import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const EditEvent = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState();
  const [newTitle, setNewTitle] = useState();
  const [newDesc, setNewDesc] = useState();
  const [newPictureUrl, setNewPictureUrl] = useState();
  const [newDate, setNewDate] = useState();
  const [newBegin, setNewBegin] = useState();
  const [newEnd, setNewEnd] = useState();
  const [newLocation, setNewLocation] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvent()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchEvent = async () => {
    try {
      const response = await axios.get(`https://radiant-light-server-b649d90c9bb7.herokuapp.com/event-by-id/${eventId}`);


      setEvent(response.data);
      setNewDesc(response.data.description);
      setNewTitle(response.data.title);
      setNewPictureUrl(response.data.picture_url);
      setNewDate(response.data.date);
      setNewLocation(response.data.location)
    } catch(err) {
      console.log(err)
    }
  };

  const formSubmit = async (e) => {
    e.preventDefault()
    const expires = new Date(newDate + " " + newEnd)

    const beginDate = new Date(newDate + " " + newBegin);
    const endDate = new Date(newDate + " " + newEnd);

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

    const newValues = {
      title: newTitle,
      description: newDesc,
      picture_url: newPictureUrl,
      date: justDate,
      time: `${startTime} - ${endTime}`,
      location: newLocation,
      expires: expires
    }

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.put(`https://radiant-light-server-b649d90c9bb7.herokuapp.com/events/${eventId}`, newValues);

      navigate("/admin-private/events");
    } catch(err) {
      console.log(err);
    }
  }

  return event ? (
    <div className="container" id="edit-photo">
    <button id="back-button" className="button-style" onClick={() => navigate("/admin-private/events")}>Back</button>
    <div className="row">
      <form id="photo-form" className="col">
        <h3>Edit Event</h3>
        <input onChange={e => setNewTitle(e.target.value)} id="title-input" className="form-inputs" title="title" placeholder="Title" defaultValue={event.title} type=""/>
        <textarea onChange={e => setNewDesc(e.target.value)} id="description-input" className="form-inputs" title="description" placeholder="Description" type="text" defaultValue={event.description}/>
        <input onChange={e => setNewPictureUrl(e.target.value)} id="url-input" className="form-inputs" title="url" placeholder="Picture Url" type="url" defaultValue={event.picture_url}/>
        <input id="date-input" className="form-inputs" title="date" defaultValue={event.date} type="date" onChange={e => setNewDate(e.target.value)} />
        <p className="current-price">Event Begins</p>
        <input id="time-start-input" className="form-inputs" title="time" defaultValue={event.time} type="time" onChange={e => setNewBegin(e.target.value)} />
        <p className="current-price">Event Ends</p>
        <input id="time-end-input" className="form-inputs" title="time" defaultValue={event.time} type="time" onChange={e => setNewEnd(e.target.value)} />
        <button onClick={formSubmit} className="button-style">Submit</button>
      </form>
    </div>
  </div>
  ) : (
    <div>No Event Found</div>
  )
}
  
export default EditEvent;