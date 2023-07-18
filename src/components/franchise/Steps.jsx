import { Step } from "../../props";

const Steps = () => {
  return (
    <section className="flex flex-col gap-5">
      <Step
        index="STEP 1"
        icon="images/franchise/purse.svg"
        title="You Finance Electric Scooters For Us"
        description="1 Scooter Or Up To 100 Scooters, Choice Is Yours! Hurrray! 100% Of Your Job Ends Here."
      />

      <Step
        index="STEP 2"
        icon="images/franchise/maintenance.svg"
        title="We Will Manage Your Scooters"
        description="Repairs, Maintenance, Insurance Claims And Everything Else!"
      />

      <Step
        index="STEP 3"
        icon="images/franchise/scooter.svg"
        title="We Rent These Scooters"
        description="Logistics Companies, Delivery Executives, Commuters - We Have Contacts All Around So Your Vehicles Are Always MAKING MONEY!"
      />

      <Step
        index="STEP 4"
        icon="images/franchise/money.svg"
        title="We Keep Our Share And Issue You "
        description="Your fixed income"
      />
    </section>
  );
};

export default Steps;
