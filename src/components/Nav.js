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
      case "/":
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
    <nav aria-label="primary menu" id="desktop-nav">
        <div id="nav-logo">
          <Link to="/"><img id="nav-logo-img" src={logo} alt="" width="150px" /></Link>
        </div>
        <ul id="nav-ul">
          <li aria-current="page" id="home-link" className="nav-li raleway">
            <h3><Link to="/">Home</Link></h3>
          </li>
          <li aria-current="page" id="about-link" className="nav-li raleway">
            <h3><Link to="/meet-the-stylist">About</Link></h3>
          </li>
          <li aria-current="page" id="services-link" className="nav-li raleway">
            <h3><Link to="/services">Services</Link></h3>
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
          <a href="tel:7156423151"><button id="cta-button">Call: (715) 642-3151</button></a>
        </div>
    </nav>
  )
}

export default Nav;