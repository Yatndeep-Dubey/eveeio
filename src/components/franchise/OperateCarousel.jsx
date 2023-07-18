import { useState } from "react";

// icons
import { BiSolidCircle } from "react-icons/bi";

const OperateCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? 3 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 3 ? 1 : prevSlide + 1));
  };

  return (
    <div className="max-w-lg mx-auto lg:hidden">
      <div className="relative">
        <div className="absolute top-0 left-0 w-full flex justify-center">
          <p className="bg-secondary px-4 py-2 rounded-xl font-bold shadow">
            {currentSlide}
          </p>
        </div>
        <div className="flex items-center">
          <button onClick={handlePrevSlide}>
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
          <div className="mt-14 mb-3">
            <div
              className={`carousel-slide ${
                currentSlide === 1 ? "block" : "hidden"
              }`}
            >
              <div className="p-4">
                <p>
                  Are you interested in running a business like ours? We help
                  you do this by lending our franchise. We help you do this by
                  lending our franchise.
                </p>
              </div>
            </div>
            <div
              className={`carousel-slide ${
                currentSlide === 2 ? "block" : "hidden"
              }`}
            >
              <div className="p-4">
                <p>
                  Are you interested in running a business like ours? We help
                  you do this by lending our franchise. We help you do this by
                  lending our franchise.
                </p>
              </div>
            </div>
            <div
              className={`carousel-slide ${
                currentSlide === 3 ? "block" : "hidden"
              }`}
            >
              <div className="p-4">
                <p>
                  Are you interested in running a business like ours? We help
                  you do this by lending our franchise. We help you do this by
                  lending our franchise.
                </p>
              </div>
            </div>
          </div>
          <button onClick={handleNextSlide}>
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

        <div>
          <div className="flex w-fit mx-auto gap-1 mb-10">
            <BiSolidCircle
              className={currentSlide === 1 ? `text-primary` : `text-gray-400`}
              onClick={() => setCurrentSlide(1)}
            />
            <BiSolidCircle
              className={currentSlide === 2 ? `text-primary` : `text-gray-400`}
              onClick={() => setCurrentSlide(2)}
            />
            <BiSolidCircle
              className={currentSlide === 3 ? `text-primary` : `text-gray-400`}
              onClick={() => setCurrentSlide(3)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperateCarousel;
