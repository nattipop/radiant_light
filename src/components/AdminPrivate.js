import { useNavigate } from "react-router";
import "../styles/AdminPrivate.css";
import useSignOut from 'react-auth-kit/hooks/useSignOut';

const AdminPrivate = () => {
  const signout = useSignOut();
  const navigate = useNavigate();

  const logout = () => {
    signout();
    navigate("/home");
  }

  return (
    <div id="admin-private">
      <h1>Admin Page</h1>
      <button id="signout-button" className="button-style" onClick={logout}>Logout</button>
    </div>
  )
}

export default AdminPrivate;