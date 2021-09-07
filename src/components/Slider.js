import React, { useEffect, useRef } from "react";
import Splide from "@splidejs/splide"; //https://splidejs.com

const Slider = () => {
  //create slider reference
  let slider = useRef(null);

  //mount slider(Splide) after slider/splide dom elements have been mounted
  useEffect(() => {
    //for Splide options visit https://splidejs.com/options
    new Splide(slider.current, {
      type: "loop",
      perPage: 1,
      height: "500px",
      breakpoints: {
        760: {
          height: "400px",
        },
      },
    }).mount();
  });

  const images = [
    "img-1.jpg",
    "img-2.jpg",
    "img-3.jpg",
    "img-4.jpg",
    "img-5.jpg",
    "img-6.jpg",
  ];

  return (
    <div className="splide" ref={slider}>
      <div className="splide__track">
        <ul className="splide__list">
          {images.map((image) => (
            <li key={image} className="splide__slide">
              <img src={`${process.env.PUBLIC_URL}/img/${image}`} alt={image} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slider;
