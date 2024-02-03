import "../styles/Footer.css"

const Footer = () => {
  return (
    <div id="footer">
      <div className="row">
        <div className="col" id="footer-col">
          <h3 className="footer-contact" id="footer-phone"><img src="https://res.cloudinary.com/dawteptkh/image/upload/v1706714470/phone-call_1_psmbjw.png" className="footer-img" alt="" width="24px"/>(715) 642-3151</h3>
          <h3 className="footer-contact" id="footer-email"><img src="https://res.cloudinary.com/dawteptkh/image/upload/v1706714453/mail_sz7phc.png" className="footer-img" alt="" width="24px"/>radiantlighthd@gmail.com</h3>
          <h3 className="footer-contact" id="footer-insta"><img src="https://res.cloudinary.com/dawteptkh/image/upload/v1706714461/instagram_vrh3xy.png" className="footer-img" alt="" width="24px"/><a href="https://www.instagram.com/radiantlighthairdesign">@radiantlighthairdesign</a></h3>
        </div>
        <a href="https://www.flaticon.com/free-icons/phone" className="icon-attribute" title="phone icons">Phone icon created by Gregor Cresnar - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/instagram" className="icon-attribute" title="instagram icons">Instagram icon created by Prosymbols Premium - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/email" className="icon-attribute" title="email icons">Email icon created by Freepik - Flaticon</a>
      </div>
    </div>
  )
}

export default Footer;