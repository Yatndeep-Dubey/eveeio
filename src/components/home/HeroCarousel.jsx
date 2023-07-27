import { useState } from "react";

// icons
import { BiSolidCircle } from "react-icons/bi";
import Hero from "./Hero";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? 2 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 1 : prevSlide + 1));
  };

  return (
    <div className="max-w-lg mx-auto bg-hero pt-44 h-[52rem]">
      <div className="relative">
        <div className="flex items-center">
          <button className="absolute top-44" onClick={handlePrevSlide}>
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="w-full">
            <div
              className={`carousel-slide ${
                currentSlide === 1 ? "block" : "hidden"
              }`}
            >
              <div className="h-[37rem]"></div>
            </div>

            <div
              className={`carousel-slide ${
                currentSlide === 2 ? "block" : "hidden"
              }`}
            >
              <div>
                {" "}
                <Hero />
              </div>
            </div>
          </div>
          <button className="absolute right-3 top-44" onClick={handleNextSlide}>
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="flex w-fit mx-auto gap-1 mb-10 mt-5">
          <BiSolidCircle
            className={currentSlide === 1 ? `text-primary` : `text-gray-400`}
            onClick={() => setCurrentSlide(1)}
          />
          <BiSolidCircle
            className={currentSlide === 2 ? `text-primary` : `text-gray-400`}
            onClick={() => setCurrentSlide(2)}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
