import { Route, Routes, useNavigate } from "react-router";
import "../styles/AdminPrivate.css";
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { Link } from "react-router-dom";
import AdminServices from "./AdminServices";
import AdminEvents from "./AdminEvents";
import AdminPhotos from "./AdminPhotos";
import NewPhoto from "./NewPhoto";
import EditPhoto from "./EditPhoto";
import NewService from "./NewService";
import EditService from "./EditService";
import { useEffect, useState } from "react";
import axios from "axios";
import NewEvent from "./NewEvent";
import EditEvent from "./EditEvent";

const AdminPrivate = () => {
  const [joy, setJoy] = useState();
  const signout = useSignOut();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMessage()
  }, []);

  const fetchMessage = async () => {
    try {
      const response = await axios.get("https://radiant-light-server-b649d90c9bb7.herokuapp.com/joy");

      setJoy(response.data.message)
    } catch(err) {
      console.log(err)
    }
  }

  const logout = () => {
    signout();
    navigate("/home");
  }

  return (
    <div>
      <div id="admin-private">
        <h1>Admin Page</h1>
        <Link to="/admin-private/photos"><button className="button-style admin-button">Photos</button></Link>
        <Link to="/admin-private/events" ><button className="button-style admin-button">Events</button></Link>
        <Link to="/admin-private/services"><button className="button-style admin-button">Services</button></Link>
        <button id="signout-button" className="button-style admin-button" onClick={logout}>Logout</button>
      </div>
      <Routes>
          <Route path="/services" element={<AdminServices />} />
          <Route path="/services/new" element={<NewService />} />
          <Route path="/services/edit/:serviceId" element={<EditService />} />
          <Route path="/photos" element={<AdminPhotos />} />
          <Route path="/photos/new" element={<NewPhoto />} />
          <Route path="/photos/edit/:photoId" element={<EditPhoto />} />
          <Route path="/events" element={<AdminEvents />} />
          <Route path="/events/new" element={<NewEvent />} />
          <Route path="/events/edit/:eventId" element={<EditEvent />} />
      </Routes>
      <div id="joy-background">
        <h1 id="joy">{joy}</h1>
      </div>
    </div>
  )
}

export default AdminPrivate;