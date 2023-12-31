/* eslint-disable react-hooks/exhaustive-deps */
import "../styles/Nav.css";
import logo from "../RadiantLightAllWhite.png"
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Nav = () => {
  const location = useLocation();
  const pages = Array.prototype.slice.call(document.getElementsByClassName("nav-li"));

  useEffect(() => {
    pages.forEach(item => item.classList.remove("current-page"));

    switch (location.pathname) {
      case "/home":
        document.getElementById("home-link").classList.add("current-page");
        break;
      case "/meet-the-stylist":
        document.getElementById("about-link").classList.add("current-page");
        break;
      case "/services":
        document.getElementById("services-link").classList.add("current-page");
        break;
      case "/shop":
      case "/gallery":
        document.getElementById("gallery-link").classList.add("current-page");
        break;
      case "/contact":
        document.getElementById("contact-link").classList.add("current-page");
        break;
      default:
        break;
    }

    return
  }, [location])

  return (
    <nav aria-label="primary menu">
      <div id="nav-logo">
        <img id="nav-logo-img" src={logo} alt="" width="150px" />
       </div>
      <ul id="nav-ul">
        <li aria-current="page" id="home-link" className="nav-li raleway">
          <h3><Link to="/home">Home</Link></h3>
        </li>
        <li aria-current="page" id="about-link" className="nav-li raleway">
          <h3><Link to="/meet-the-stylist">About</Link></h3>
        </li>
        <li aria-current="page" id="services-link" className="nav-li raleway">
          <h3><Link to="/services">Services</Link></h3>
        </li>
        <li aria-current="page" className="nav-li raleway">
          <h3><a href="https://radiantlighthd.glossgenius.com" target="popup" onClick={() => window.open('https://radiantlighthd.glossgenius.com/','Book an Appointment with USERNAME','width=600,height=400')}>Book</a></h3>
        </li>
        <li aria-current="page" id="shop-link" className="nav-li raleway">
          <h3><Link to="https://cp.salonhq.co/radiant-light-hair-design">Shop</Link></h3>
        </li>
        <li aria-current="page" id="gallery-link" className="nav-li raleway">
          <h3><Link to="/gallery">Gallery</Link></h3>
        </li>
        <li aria-current="page" id="contact-link" className="nav-li raleway">
          <h3><Link to="/contact">Contact</Link></h3>
        </li>
      </ul>
      <div>
        <button id="cta-button" className="raleway">Call: (715) 736-9006</button>
      </div>
    </nav>
  )
}

export default Nav;