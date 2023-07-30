import { useRef, useState } from "react";
import { Carousel } from "../../props";

// icons
import { BiSolidCircle } from "react-icons/bi";

const Feedback = () => {
  const carouselContainerRef = useRef(null);
  const [activeDot, setActiveDot] = useState(1);

  const scrollToCenter = (index) => {
    const carouselItems = carouselContainerRef.current.children;
    if (carouselItems && carouselItems[index]) {
      const item = carouselItems[index];
      const containerRect =
        carouselContainerRef.current.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      const scrollLeft =
        itemRect.left -
        containerRect.left -
        containerRect.width / 2 +
        itemRect.width / 2;
      carouselContainerRef.current.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });

      setActiveDot(index);
    }
  };

  const dotStyle = (index) => {
    return {
      color: activeDot === index ? "#313a70" : "#d9d9d9",
      cursor: "pointer",
    };
  };

  return (
    <section className="my-16">
      <p className="text-center text-4xl text-primary font-bold my-3">
        Caring is the new marketing
      </p>
      <p className="text-grayish text-xl text-center">
        Listen to what people have to say about us
      </p>

      <div
        className="flex overflow-x-scroll scrollbar-none mt-10 gap-10 px-5 lg:mx-20"
        ref={carouselContainerRef}
      >
        <Carousel />
        <Carousel />
        <Carousel />
      </div>
      <div className="mt-5 mx-auto flex w-fit gap-2">
        <BiSolidCircle
          className="dot"
          style={dotStyle(0)}
          onClick={() => scrollToCenter(0)}
        />
        <BiSolidCircle
          className="dot"
          style={dotStyle(1)}
          onClick={() => scrollToCenter(1)}
        />
        <BiSolidCircle
          className="dot"
          style={dotStyle(2)}
          onClick={() => scrollToCenter(2)}
        />
      </div>
    </section>
  );
};

export default Feedback;
