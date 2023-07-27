import { useState } from "react";
import { Service } from "../../props";

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? 4 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 4 ? 1 : prevSlide + 1));
  };

  return (
    <section className="bg-primary p-10 md:space-y-10">
      <p className="text-white text-4xl text-center">Our Services</p>

      {/* for mobile screens */}
      <div className="relative md:hidden">
        <div className="absolute top-0 left-0 w-full flex justify-center"></div>
        <div className="flex items-center justify-center">
          <button onClick={handlePrevSlide}>
            <svg
              className="w-10 h-10 text-white"
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
            <div>
              <div
                className={`carousel-slide ${
                  currentSlide === 1 ? "block" : "hidden"
                }`}
              >
                <Service
                  title="Rental"
                  description="Our membership management software provides full automation of membership renewals and payments"
                  img="/images/services/rental.svg"
                />
              </div>
              <div
                className={`carousel-slide ${
                  currentSlide === 2 ? "block" : "hidden"
                }`}
              >
                <Service
                  title="IOT & Mobile&nbsp;application for rental services"
                  description="IOT & Telematics for rental services"
                  img="/images/services/iot.svg"
                />
              </div>
              <div
                className={`carousel-slide ${
                  currentSlide === 3 ? "block" : "hidden"
                }`}
              >
                <Service
                  title="Franchise Model"
                  description="Our membership management software provides full automation of membership renewals and payments"
                  img="/images/services/rental.svg"
                />
              </div>

              <div
                className={`carousel-slide ${
                  currentSlide === 4 ? "block" : "hidden"
                }`}
              >
                <Service
                  title="Third Party Logistics"
                  description="Our membership management software provides full automation of membership renewals and payments"
                  img="/images/services/rental.svg"
                />
              </div>
            </div>
          </div>
          <button onClick={handleNextSlide}>
            <svg
              className="w-10 h-10 text-white"
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
      </div>

      {/* for larger screens */}
      <div className="hidden md:flex flex-wrap lg:flex-nowrap justify-center  gap-5">
        <Service
          title="Rental"
          description="Our membership management software provides full automation of membership renewals and payments"
          img="/images/services/rental.svg"
        />
        <Service
          title="IOT & Mobile &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;application for rental services"
          description="IOT & Telematics for rental services"
          img="/images/services/iot.svg"
        />
        <Service
          title="Franchise Model"
          description="Our membership management software provides full automation of membership renewals and payments"
          img="/images/services/rental.svg"
        />
        <Service
          title="Third Party Logistics"
          description="Our membership management software provides full automation of membership renewals and payments"
          img="/images/services/rental.svg"
        />
      </div>
    </section>
  );
};

export default Services;
