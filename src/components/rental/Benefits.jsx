import { Benefit } from "../../props";

const Benefits = () => {
  return (
    <section className="my-10">
      <p className="text-primary font-bold text-2xl text-center">
        EVEEIO BENEFITS
      </p>

      <div className="flex flex-col mx-auto w-fit gap-10 my-10 md:grid grid-cols-2 lg:grid-cols-4">
        <Benefit img="images/benefits/fuel.svg" text="No Fuel Cost" />
        <Benefit img="images/benefits/cost.svg" text="Cost Effective" />
        <Benefit
          img="images/benefits/maintenance.svg"
          text="Maintenance Free"
        />
        <Benefit img="images/benefits/remote.svg" text="Remote Access" />
        <Benefit
          img="images/benefits/safety.svg"
          text="Enhanced Safety Features"
        />
        <Benefit
          img="images/benefits/environment.svg"
          text="No Harm to Envirnoment"
        />
        <Benefit
          img="images/benefits/battery.svg"
          text="Free Battery Swapping"
        />
        <Benefit
          img="images/benefits/license.svg"
          text="Streamlined Registration and licensing"
        />
      </div>
    </section>
  );
};

export default Benefits;
