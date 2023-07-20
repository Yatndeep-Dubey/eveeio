import { Stat } from "../../props";

const Stats = () => {
  return (
    <section className="my-10">
      <p className="text-4xl font-bold text-primary text-center">
        EVEEIO IN NUMBERS
      </p>
      <p className="text-center">
        We reached here with our hard work and dedication
      </p>
      <div className="w-fit mx-auto lg:grid grid-cols-2 gap-10 lg:w-fit lg:gap-24 my-10 space-x-36">
        <Stat
          symbol="/images/stats/scooter.svg"
          title="10K"
          description="EVS on road"
        />
        <Stat
          symbol="/images/stats/environment.svg"
          title="10MN"
          description="Kg Co2 Emissions"
        />
        </div>
        <div className=" w-fit mx-auto lg:grid grid-cols-2 gap-10 lg:w-fit lg:gap-24 my-10 space-x-36" >
        <Stat
          symbol="/images/stats/ride.svg"
          title="25MN"
          description="Rides Completed"
        />
        <Stat
          symbol="/images/stats/scooter.svg"
          title="100K"
          description="Rental Services"
        />
      </div>
    </section>
  );
};

export default Stats;
