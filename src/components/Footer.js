import { Link } from "react-router-dom";
import "../styles/Footer.css"

const Footer = () => {
  return (
    <div id="footer">
      <div className="row" id="footer-main">
        <div className="col footer-col" id="contact-col">
          <h3 className="footer-contact" id="footer-phone"><img src="https://res.cloudinary.com/dawteptkh/image/upload/v1706714470/phone-call_1_psmbjw.png" className="footer-img" alt="" width="24px"/><a href="tel:7156423151">(715) 642-3151</a></h3>
          <h3 className="footer-contact" id="footer-email"><img src="https://res.cloudinary.com/dawteptkh/image/upload/v1706714453/mail_sz7phc.png" className="footer-img" alt="" width="24px"/>radiantlighthd@gmail.com</h3>
          <h3 className="footer-contact" id="footer-insta"><img src="https://res.cloudinary.com/dawteptkh/image/upload/v1706714461/instagram_vrh3xy.png" className="footer-img" alt="" width="24px"/><a href="https://www.instagram.com/radiantlighthairdesign">@radiantlighthairdesign</a></h3>
        </div>
        <div className="col footer-col" id="weekday-col">
          <h3 className="hours-weekday">Sun</h3>
          <h3 className="hours-weekday">Mon</h3>
          <h3 className="hours-weekday">Tue</h3>
          <h3 className="hours-weekday">Wed</h3>
          <h3 className="hours-weekday">Thu</h3>
          <h3 className="hours-weekday">Fri</h3>
          <h3 className="hours-weekday">Sat</h3>
        </div>
        <div className="col footer-col" id="times-col">
          <h3 className="hours-times">Closed</h3>
          <h3 className="hours-times">9am - 5pm</h3>
          <h3 className="hours-times">Closed</h3>
          <h3 className="hours-times">9am - 5pm</h3>
          <h3 className="hours-times">Closed</h3>
          <h3 className="hours-times">9am - 5pm</h3>
          <h3 className="hours-times">By Appt.</h3>
        </div>
        <div className="col footer-col" id="navigation-col">
          <Link to="/" className="footer-nav-link">Home</Link>
          <Link to="/meet-the-stylist" className="footer-nav-link">About</Link>
          <Link to="/services" className="footer-nav-link">Services</Link>
          <Link to="/https://cp.salonhq.co/radiant-light-hair-design" className="footer-nav-link">Shop</Link>
          <Link to="/gallery" className="footer-nav-link">Gallery</Link>
          <Link to="/contact" className="footer-nav-link">Contact</Link>
        </div>
      </div>
      <p className="copyright">© Radiant Light Hair Design 2024</p>
      <a href="https://www.vitawd.com/" className="vita-attribute">Website designed and built by Vita Web Design</a>
    </div>
  )
}

export default Footer;