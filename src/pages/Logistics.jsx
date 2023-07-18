import { Investors } from "../components/home";
import { Content } from "../components/logistics";
import { Connect, Details } from "../components/rental";
import Hero from "../containers/Hero";

const Logistics = () => {
  return (
    <div>
      <Hero customClass="h-72 mb-40 p-5">
        <p className="text-grayish text-sm">Ecommerce Logistics, Back Office</p>
        <p className="font-bold text-secondary">
          What is 3PL: Meaning and How to Pick One
        </p>

        <img src="images/hero/man-truck.svg" alt="" className="mx-auto" />
      </Hero>

      <Content />

      <Investors /> {/* This is the same as the one in Home.jsx */}

      <section className="my-20">
        <p className="hidden lg:block text-4xl xl:text-5xl text-primary text-center font-bold">
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

export default Logistics;
