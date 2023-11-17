import { useEffect } from "react";
import "../styles/Contact.css"

const Contact = () => {
  useEffect(() => {
    document.title = "Radiant Light | Contact";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="contact" className="playfair">
      Contact
    </div>
  )
}

export default Contact;