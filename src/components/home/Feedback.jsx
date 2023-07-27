import { Carousel } from "../../props";

const Feedback = () => {
  return (
    <section className="my-16">
      <p className="text-center text-4xl text-primary font-bold my-3">
        Caring is the new marketing
      </p>
      <p className="text-grayish text-xl text-center">
        Listen to what people have to say about us
      </p>

      <div className="flex overflow-x-scroll scrollbar-none mt-10 mx-20">
        <Carousel />
        <Carousel />
        <Carousel />
      </div>
      <div className="mt-5">
        <img src="/images/hero/dot.svg" className="mx-auto" alt="dot"></img>
      </div>
    </section>
  );
};

export default Feedback;
