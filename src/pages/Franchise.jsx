import {
  Comparisons,
  Connect,
  Content,
  Costs,
  Details,
  Needs,
  Operate,
  OperateCarousel,
  Payment,
  Plans,
  Roles,
  Steps,
} from "../components/franchise";
import Hero from "../containers/Hero";

const Franchise = () => {
  return (
    <div>
      <Hero customClass="lg:flex lg:px-10">
        <div>
          <h1 class="mt-4 font-extrabold text-2xl md:text-4xl lg:text-3xl  text-secondary text-center lg:text-left lg:mb-5">
            Welcome to Eveeio Franchise
          </h1>

          <p className="hidden lg:block text-sm text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat. <br />{" "}
            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis
            enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat. <br />{" "}
            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis
            enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>

        <img
          src="images/hero/scooter-girl.svg"
          className="lg:h-[25rem] lg:-mr-10 lg:-ml-20"
          alt="girl riding scooter"
        />
      </Hero>

      <Content />

      <Costs />

      <Operate />

      <OperateCarousel />

      <Needs />

      <Roles />

      <Payment />

      <Steps />

      <Plans />

      <Comparisons />

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

export default Franchise;
