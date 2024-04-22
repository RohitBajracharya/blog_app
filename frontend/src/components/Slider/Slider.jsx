import React, { useEffect, useState } from "react";
import Slider1 from "../../assets/slider1.jpg";
import Slider2 from "../../assets/slider2.jpg";
import Slider3 from "../../assets/slider3.jpg";

const Slider = () => {
  const images = [Slider3, Slider2, Slider1];
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) =>
        prevPosition === -200 ? 0 : prevPosition - 100
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full h-[280px] md:h-[350px] lg:h-[380px] lg:w-[90%] lg:ml-auto lg:mr-auto  overflow-hidden">
      <div
        className="slider absolute top-0 left-0 w-full h-full flex"
        style={{
          transform: `translateX(${position}%)`,
          transition: "transform 1s ease",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slider ${index + 1}`}
            className="w-full h-full flex-shrink-0 "
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
