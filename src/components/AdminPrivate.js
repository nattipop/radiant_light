import { Route, Routes, useNavigate } from "react-router";
import "../styles/AdminPrivate.css";
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { Link } from "react-router-dom";
import AdminServices from "./AdminServices";
import AdminEvents from "./AdminEvents";
import AdminPhotos from "./AdminPhotos";

const AdminPrivate = () => {
  const signout = useSignOut();
  const navigate = useNavigate();

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
          <Route path="/photos" element={<AdminPhotos />} />
          <Route path="/events" element={<AdminEvents />} />
      </Routes>
    </div>
  )
}

export default AdminPrivate;