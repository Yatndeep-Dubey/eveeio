import { Apply, AvailableJobs } from "../components/jobs";
import { Content } from "../components/logistics";
import Hero from "../containers/Hero";

const Jobs = () => {
  return (
    <div>
      <Hero customClass="h-72 mb-44 lg:flex flex-row-reverse justify-end gap-20 items-start lg:pr-10 lg:h-96 xl:mb-52 xl:gap-32">
        <p className="text-secondary text-xl uppercase font-bold text-center lg:text-4xl lg:text-left xl:text-5xl">
          careers at eveeio <br />
          <span className="text-sm text-white hidden lg:block lg:text-lg xl:text-xl">
            Apply in our job section
          </span>
        </p>
        <img
          src="images/hero/people.svg"
          alt=""
          className="h-72 w-fit lg:h-[25rem] lg:-mt-20 xl:h-[30rem]"
        />
      </Hero>

      <Apply />

      <Content />

      <p className="text-center font-bold text-lg md:text-xl">
        The Passionate People We Look For{" "}
      </p>

      <AvailableJobs />
      
    </div>
  );
};

export default Jobs;
