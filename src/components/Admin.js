import { useState } from "react";
import "../styles/Admin.css"
import axios, { AxiosError } from "axios";
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { useNavigate } from "react-router";

const Admin = () => {
  const [error, setError] = useState("");
  const signin = useSignIn();
  const navigate = useNavigate();
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  console.log(usernameValue, passwordValue)

  const onFormSubmit = async (e) => {
    e.preventDefault()
    const values = { 
      username: usernameValue,
      password: passwordValue
    }
    console.log(values)

    setError("");

    try {
      const response = await axios.post("http://localhost:5000/login", values);

      if(signin({
        auth: {
            token: response.data.token,
            type: 'Bearer'
        },
        userState: {
            name: usernameValue
        }
    })){
      navigate("/admin-private")
    }else {
      console.log("signin did not work")
    }
      signin({
        token: response.data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { username: usernameValue }
      })
    } catch(err) {
      if (err && err instanceof AxiosError) setError(err.response?.data.message);
      else if (err && err instanceof Error) setError(err.message);

      console.log(`Error: ${err}`)
    }
  }

  return (
    <div id="admin">
      <form>
        <div className="form-flex">
          <h3>To access your admin account, login.</h3>
          <input title="Username" placeholder="Username" id="username-input" type="text" className="admin-input" onChange={e => setUsernameValue(e.target.value)} />
          <input title="Password" placeholder="Password" id="password-input" type="current-password" className="admin-input" onChange={e => setPasswordValue(e.target.value)} />
          <button id="admin-submit" className="button-style" onClick={onFormSubmit}>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Admin;