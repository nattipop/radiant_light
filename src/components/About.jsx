import { useEffect } from "react";
import "../styles/About.css"
import radiant from "../Untitled_Artwork 7.png";

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
          <h3>"Those who look to Him are</h3>
          <img id="radiant" src={radiant} alt="" width="250px" />
          <h3>and their faces shall never<br/> be ashamed."</h3>
          <h3>Psalm 34:5</h3>
        </div>
        <div className="col about-image-div" id="about-fade-div">
          <div className="about-image" id="about-image-two"></div>
        </div>
      </div>
      <div className="bebas-neue about-main" id="about-general">
        <div className="row about-row">
          <div className="col-4 img-box">
            <img className="mts-img" src="https://res.cloudinary.com/dawteptkh/image/upload/v1767393063/IMG_0438_ys68e8.jpg" alt="" />
          </div>
          <div className="col mts-header">
            <h1 className="mts-title">About</h1>
            <p className="mts-desc" >Hey y'all!
  I'm Hannah, owner of Radiant Light Hair Design established in 2023. At Radiant Light, I prioritize building relationships with each of my clients and customize my services to achieve their beauty goals. I have a passion for lived-in color looks as well as special occasion styling.  Whether you're walking down the aisle or looking for your go-to stylist, you've found the right place - welcome to Radiant Light!</p>
          </div>
        </div>
      </div>
      <div className="bebas-neue about-main" id="meet-the-stylist-portion">
        <div className="row about-row">
          <div id="meet-the-stylist-title">
            <img className="mts-img" id="mts-img-2" src="https://res.cloudinary.com/dawteptkh/image/upload/v1767392253/IMG_0171_adv2qs.jpg" alt="" />
            <h1 id="meet-header">Meet the Stylist</h1>
            <p id="meet-paragraph">I'm North Carolina-born into a military family and have lived many places before settling in Wisconsin. Early on, I expressed my artistic nature through painting and drawing. When selecting a career, hair became my chosen canvas. I graduated from Northwood Technical College with my cosmetology degree in 2023.  As a creative entrepreneur, I love the flexibility and adventure that comes with owning my own business. Since opening Radiant Light, I've enjoyed both serving clients in my chair and traveling as a wedding hairstylist. When I'm not behind the chair, I love exploring new coffee shops or reading a great book. You also might find me enjoying God's creation while canoeing in the Boundary Waters or perched in a treestand!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;