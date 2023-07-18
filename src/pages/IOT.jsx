import { Stats } from "../components/about";
import { Potentials, Transform } from "../components/iot";
import { Connect, Details } from "../components/rental";
import Hero from "../containers/Hero";

const IOT = () => {
  return (
    <div>
      <Hero customClass="p-5 lg:h-[30rem] lg:mb-52 xl:h-[38rem]">
        <p className="text-xl text-secondary font-bold md:text-2xl lg:text-4xl">
          Stay Connected on the Move:
        </p>
        <p className="text-white text-sm md:text-md lg:text-lg">
          Track Your Vehicle with Our Smart IoT Solution!
        </p>

        <div className="flex justify-end my-5">
          <img
            src="images/hero/iot.svg"
            alt=""
            className="md:h-72 lg:h-[25rem] xl:h-[30rem]"
          />
        </div>
      </Hero>

      <Stats />

      <Potentials />

      <Transform />

      <section>
        <p className="hidden lg:block text-4xl xl:text-5xl text-primary text-center">
          "Let's Connect : Schedule a Meeting with Us!"
        </p>
        <div className="lg:flex lg:flex-row-reverse lg:justify-evenly lg:mx-10 lg:gap-10 py-10">
          <Details />
          <Connect />
        </div>
      </section>
    </div>
  );
};

export default IOT;
