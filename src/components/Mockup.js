import { useEffect } from "react";
import "../styles/Mockup.css";

const Mockup = () => {
  useEffect(() => {
    document.title = "Radiant Light | Example Page";
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <button className="background-button" onClick={() => {
        if (document.body.style.backgroundColor === "rgb(0, 0, 0)") {
          return document.body.style.backgroundColor = "rgb(255, 255, 255)";
        }
        if (document.body.style.backgroundColor === "rgb(255, 255, 255)") {
          return document.body.style.backgroundColor = "rgb(0,0,0)";
        };
      }}>Background color</button>
      <div className='row palette'>
        <div className='col-2'>
          <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1699925825/IMG_0780_m8jyrd.jpg" alt="" />
        </div>
        <div className='col-2'>
          <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1699925822/IMG_0703_k5vwtu.jpg" alt="" />
        </div>
        <div className='col-2'>
          <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1699925703/IMG_0467_iv7ohc.jpg" alt="" />
        </div>
        <div className='col-2'>
          <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1699925727/IMG_0583_amucdr.jpg" alt="" />
        </div>
        <div className='col-2'>
          <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1699925670/IMG_0448_eimcd3.jpg" alt="" />
        </div>
        <div className='col-2'>
          <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1699925765/IMG_0491_dx0xbk.jpg" alt="" />
        </div>
      </div>
      <div className="color-palette row">
        <div className="col color-box contrast" />
        <div className="col color-box pink" />
        <div className="col color-box light-tan" />
        <div className="col color-box light-teal" />
        <div className="col color-box teal" />
      </div>
      <div className='row photos'>
        <div className='col-3' style={{margin: "0px", padding: "0px"}}>
          <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1699925702/IMG_0489_i4l2xt.jpg" width="100%" alt="" />
        </div>
        <div className='col-6' style={{margin: "0px", padding: "0px"}}>
          <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1699925701/IMG_0475_zurj9z.jpg" width="112.5%" alt="" />
        </div>
        <div className='col-3' style={{margin: "0px", padding: "0px"}}>
          <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1699925785/IMG_0612_jngbvf.jpg" width="100%" alt="" />
        </div>
      </div>
    </div>
  )
};

export default Mockup;