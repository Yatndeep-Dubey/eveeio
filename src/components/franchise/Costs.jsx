import { Cost } from "../../props";

const Costs = () => {
  return (
    <section className="flex flex-col gap-5 w-fit mx-auto mb-10 lg:grid lg:grid-cols-2 lg:my-10 lg:gap-24">
      <Cost title="0 (Limited Period)" description="Franchise Fee" />
      <Cost title="1,00,000 Deposit" description="(Refundable)" />
      <Cost title="2,00,000 Investment" description="Per Scooter" />
      <Cost title="4,850/- Revenue" description="Per vehicle Per month" />
    </section>
  );
};

export default Costs;
