import { useEffect } from "react";
import "../styles/About.css"

const About = () => {
  useEffect(() => {
    document.title = "Radiant Light | Meet the Stylist";
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div id="about">
      <div className="row" id="about-image-row">
        <div className="col about-image-div">
          <div className="about-image" id="about-image-one"></div>
        </div>
        <div className="col" id="about-verse">
          <h3>"Those who look to Him are radiant,
    and their faces shall never be ashamed."</h3>
          <h3>Psalm 34:5</h3>
        </div>
        <div className="col about-image-div" id="about-fade-div">
          <div className="about-image" id="about-image-two"></div>
        </div>
      </div>
      <div className="bebas-neue" id="about-main">
        <div className="row" id="about-row">
          <div className="col-4" id="img-box">
            <img id="mts-img" src="https://res.cloudinary.com/dawteptkh/image/upload/v1699925702/IMG_0489_i4l2xt.jpg" alt="" />
          </div>
          <div className="col" id="mts-header">
            <h1 id="mts-title">Meet the Stylist</h1>
            <p id="mts-desc" >Hey y'all!
  I'm Hannah, owner of Radiant Light Hair Design established in 2023. At Radiant Light, I prioritize building relationships with each of my clients and customize my services to achieve their beauty goals. I have a passion for lived-in color looks as well as special event styling.  Whether you're walking down the aisle or looking for your go-to stylist, you've found the right place - welcome to Radiant Light!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;