// CarouselItem.js
import React from "react";
import "./carousel.css";
const CarouselItem = ({ content }) => {
  return (
    <div className="carousel-item">
      {<img className="carousel_main_img" src={content} alt="" srcset="" />}
    </div>
  );
};

export default CarouselItem;
