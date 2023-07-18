import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { BiSolidCircle } from "react-icons/bi";

const HeroCarousel = () => {
  const [active, setActive] = useState(0);
  const images = [
    "images/hero/truck-with-logo.svg",
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000",
    "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg",
  ];

  const updateActiveSlide = (index) => {
    setActive(index);
  };

  const nextSlide = () => {
    setActive((prevActive) => (prevActive + 1) % images.length);
  };

  const previousSlide = () => {
    setActive((prevActive) => (prevActive - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  });

  return (
    <div>
      <div className="flex w-full items-center justify-between">
        <FaChevronLeft
          className={
            active === 0 ? `opacity-0` : `text-3xl text-white cursor-pointer`
          }
          onClick={previousSlide}
        />

        <img
          src={images[active]}
          alt=""
          className="w-80 h-72 lg:h-[20rem] lg:w-[50rem]"
        />

        <FaChevronRight
          className="text-3xl text-white cursor-pointer"
          onClick={nextSlide}
        />
      </div>

      <div className="flex w-fit mx-auto gap-1 py-10">
        {images.map((_, index) => (
          <BiSolidCircle
            key={index}
            className={`cursor-pointer ${
              active === index ? "text-white" : "text-gray-400"
            }`}
            onClick={() => updateActiveSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
