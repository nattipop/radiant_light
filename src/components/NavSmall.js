import { Link } from "react-router-dom";
import "../styles/Nav.css"

const NavSmall = () => {
  return (
    <div>
      <nav aria-label="primary menu" id="nav-small">
        <ul>
        <li aria-current="page" id="home-link" className="nav-small-li raleway">
            <h3><Link to="/">Home</Link></h3>
          </li>
          <li aria-current="page" id="about-link" className="nav-small-li raleway">
            <h3><Link to="/meet-the-stylist">About</Link></h3>
          </li>
          <li aria-current="page" id="services-link" className="nav-small-li raleway">
            <h3><Link to="/services">Services</Link></h3>
          </li>
          <li aria-current="page" className="nav-small-li raleway">
            <h3><a href="https://radiantlighthd.glossgenius.com" target="popup" onClick={() => window.open('https://radiantlighthd.glossgenius.com/','Book an Appointment with USERNAME','width=600,height=400')}>Book</a></h3>
          </li>
          <li aria-current="page" id="shop-link" className="nav-small-li raleway">
            <h3><Link to="https://cp.salonhq.co/radiant-light-hair-design">Shop</Link></h3>
          </li>
          <li aria-current="page" id="gallery-link" className="nav-small-li raleway">
            <h3><Link to="/gallery">Gallery</Link></h3>
          </li>
          <li aria-current="page" id="contact-link" className="nav-small-li raleway">
            <h3><Link to="/contact">Contact</Link></h3>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavSmall;