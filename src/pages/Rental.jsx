import {
  Benefits,
  Connect,
  Details,
  HeroCarousel,
  Pathway,
  Unleash,
} from "../components/rental";
import Hero from "../containers/Hero";

const Rental = () => {
  return (
    <div>
      <Hero>
        <HeroCarousel />
      </Hero>

      <Benefits />

      <Unleash />

      <Pathway />

      <section>
        <p className="hidden lg:block text-4xl xl:text-5xl text-primary text-center">
          "Let's Connect : Schedule a Meeting with Us!"
        </p>
        <div className="w-full lg:flex lg:flex-row-reverse lg:justify-evenly lg:gap-10 py-10 lg:w-fit lg:mx-auto xl:gap-24">
          <Details />
          <Connect />
        </div>
      </section>
    </div>
  );
};

export default Rental;
