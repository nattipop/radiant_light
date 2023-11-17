import { useEffect } from "react";
import "../styles/Mockup.css";

const Mockup = () => {
  useEffect(() => {
    document.title = "Radiant Light | Example Page";
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
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
      <div className='row'>
        <div className='container col-4'>
          <h1 className='header-title julius-so'>Ready to shine?</h1>
          <h3 className='header-sub archivo'>Radiant Light Hair Design</h3>
        </div>
        <div className='container col-4'>
          <h1 className='header-title playfair'>Ready to shine?</h1>
          <h3 className='header-sub raleway'>Radiant Light Hair Design</h3>
        </div>
        <div className='container col-4'>
          <h1 className='header-title playfair'>Ready to shine?</h1>
          <h3 className='header-sub source-s3'>Radiant Light Hair Design</h3>
        </div>
        <div className='container col-4'>
          <h1 className='header-title julius-so'>Ready to shine?</h1>
          <h3 className='header-sub raleway'>Radiant Light Hair Design</h3>
        </div>
        <div className='container col-4'>
          <h1 className='header-title yeseva'>Ready to shine?</h1>
          <h3 className='header-sub bebas-neue'>Radiant Light Hair Design</h3>
        </div>
        <div className='container col-4'>
          <h1 className='header-title julius-so'>Ready to shine?</h1>
          <h3 className='header-sub yeseva'>Radiant Light Hair Design</h3>
        </div>
      </div>
      <div id="color-palette" className="row">
        <div className="col color-box pink" />
        <div className="col color-box light-pink" />
        <div className="col color-box light-brown" />
        <div className="col color-box brown" />
        <div className="col color-box gray" />
        <div className="col color-box green" />
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