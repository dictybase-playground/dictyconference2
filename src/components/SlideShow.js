import React from "react";
import { Carousel } from "react-responsive-carousel";
import SlideShowImage1 from "../images/slideshow-1.jpg";
import SlideShowImage2 from "../images/slideshow-2.jpg";
import SlideShowImage3 from "../images/slideshow-3.jpg";
import SlideShowImage4 from "../images/slideshow-4.jpg";
import SlideShowImage5 from "../images/slideshow-5.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SlideShow = () =>
  <Carousel
    autoPlay
    emulateTouch
    infiniteLoop
    useKeyboardArrows
    showThumbs={false}
    showStatus={false}
  >
    <div>
      <img
        src={SlideShowImage1}
        alt="The J.C.J. van Speijk Lighthouse at Egmond aan Zee"
      />
    </div>
    <div>
      <img src={SlideShowImage2} alt="Hotel Zuiderduin" />
    </div>
    <div>
      <img
        src={SlideShowImage3}
        alt="Horse riding on the beach of Egmond aan Zee"
      />
    </div>
    <div>
      <img src={SlideShowImage4} alt="Egmond aan Zee offshore wind farm" />
    </div>
    <div>
      <img src={SlideShowImage5} alt="Sunset on the beach of Egmond aan Zee" />
    </div>
  </Carousel>;

export default SlideShow;
