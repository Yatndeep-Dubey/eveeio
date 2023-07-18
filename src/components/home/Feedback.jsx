import { Carousel } from "../../props";

const Feedback = () => {
  return (
    <section className="my-5">
      <p className="text-center text-4xl text-primary font-bold my-3">
        Caring is the new marketing
      </p>
      <p className="text-grayish text-xl text-center">
        Listen to what people have to say about us
      </p>

      <div className="flex gap-10 overflow-x-scroll scrollbar-none mt-10">
        <Carousel />
        <Carousel />
        <Carousel />
        <Carousel />
        <Carousel />
        <Carousel />
        <Carousel />
      </div>
    </section>
  );
};

export default Feedback;
