import { useState } from "react";
import "../styles/Admin.css"
import axios from "axios";
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { useNavigate } from "react-router";

const Admin = () => {
  const [error, setError] = useState("");
  const signin = useSignIn();
  const navigate = useNavigate();
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(usernameValue, passwordValue)

  const onFormSubmit = async (e) => {
    e.preventDefault()
    const values = { 
      username: usernameValue,
      password: passwordValue
    }
    setError("");

    try {
      setLoading(true);
      const response = await axios.post("https://radiant-light-server-b649d90c9bb7.herokuapp.com/login", values);

      if(signin({
        auth: {
          token: response.data.token,
          type: 'Bearer'
        },
        userState: {
          name: usernameValue
        }
      })){
        navigate("/admin-private");
        setLoading(false);
        setUsernameValue("");
        setPasswordValue("");
      };

      signin({
        token: response.data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { username: usernameValue }
      });
    } catch(err) {
      setError(err.response?.data.message);
      console.log(error)
    }
  }

  return loading ? (
    <div id="admin">
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" alt="" width="300px" />
    </div>
  ) : (
    <div id="admin">
      <form>
        <div className="form-flex">
          <h3>To access your admin account, login.</h3>
          <h3 id="error-message">{error}</h3>
          <input title="Username" placeholder="Username" id="username-input" type="text" className="admin-input" onChange={e => setUsernameValue(e.target.value)} />
          <input title="Password" placeholder="Password" id="password-input" type="password" className="admin-input" onChange={e => setPasswordValue(e.target.value)} />
          <button id="admin-submit" className="button-style" onClick={onFormSubmit}>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Admin;