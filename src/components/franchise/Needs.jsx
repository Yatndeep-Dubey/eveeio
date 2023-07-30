import { Need } from "../../props";

const Needs = () => {
  return (
    <section className="p-5">
      <img
        src="images/franchise/questionmark.svg"
        alt="question mark"
        className="mx-auto"
      />
      <p className="lg:text-xl font-bold xl:text-2xl lg:text-center">
        Are you interested in running a business like ours? We help you do this
        by lending our franchise.
      </p>

      <p className="bg-secondary text-xs py-2 text-center my-10 rounded-lg font-bold shadow-lg lg:w-fit lg:px-14 lg:mx-auto lg:text-xl lg:py-5">
        WHAT WILL YOU NEED TO START EVEEIO FRANCHISE?
      </p>

      <div className="flex flex-col gap-5 lg:flex-row">
        <Need
          icon="/images/franchise/scooter.svg"
          description="Minimum of 20 Electric Scooters to start with. We help you buy these at a lower price from our partner distributors."
        />

        <Need
          icon="/images/franchise/car.svg"
          description="A space to keep all these Electric Scooters parked & charged. Don't worry, most of your scooters will always be rented out so you won't need much space."
        />

        <Need
          icon="/images/franchise/mechanic.svg"
          description="1 skilled mechanic. 1 skilled mechanic can handle a fleet of 50 Electric Scooters."
        />
      </div>
    </section>
  );
};

export default Needs;
