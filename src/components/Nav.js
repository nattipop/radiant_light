import "../styles/Nav.css";
import logo from "../RadiantLightAllWhite.png"
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Nav = () => {
  const location = useLocation();

  useEffect(() => {
    document.getElementById("home-link").classList.remove("current-page");
    document.getElementById("contact-link").classList.remove("current-page");
    document.getElementById("about-link").classList.remove("current-page");
    document.getElementById("example-link").classList.remove("current-page");

    if(location.pathname === "/home") {
      document.getElementById("home-link").classList.add("current-page")
    }
    if(location.pathname === "/contact") {
      document.getElementById("contact-link").classList.add("current-page")
    }
    if(location.pathname === "/meet-the-stylist") {
      document.getElementById("about-link").classList.add("current-page")
    }
    if(location.pathname === "/") {
      document.getElementById("example-link").classList.add("current-page")
    }

    return
  }, [location])
  return (
    <nav aria-label="primary menu">
      <div id="nav-logo">
        <img id="nav-logo-img" src={logo} alt="" width="150px" />
       </div>
      <ul id="nav-ul">
        <li aria-current="page" id="home-link" className="nav-li archivo">
          <h3><Link to="/home">Home</Link></h3></li>
        <li aria-current="page" id="about-link" className="nav-li archivo">
          <h3><Link to="/meet-the-stylist">Meet the Stylist</Link></h3></li>
        <li aria-current="page" className="nav-li archivo">
          <h3><a href="https://radiantlighthd.glossgenius.com" target="popup" onClick={() => window.open('https://radiantlighthd.glossgenius.com/','Book an Appointment with USERNAME','width=600,height=400')}>Book</a></h3></li>
        <li aria-current="page" id="contact-link" className="nav-li archivo">
          <h3><Link to="/contact">Contact</Link></h3></li>
        <li aria-current="page" id="example-link" className="nav-li archivo">
          <h3><Link to="/">Example Page</Link></h3></li>
      </ul>
      <div>
        <button id="cta-button" className="archivo">Call: (715) 736-9006</button>
      </div>
    </nav>
  )
}

export default Nav;