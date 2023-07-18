import { Role } from "../../props";

const Roles = () => {
  return (
    <section>
      <p className="font-bold text-center my-10 lg:text-3xl">WHAT'S OUR ROLE?</p>

      <div className="flex flex-col gap-5 my-10 lg:flex-row items-center">
        <Role icon="images/franchise/consult.svg" description="CONSULT" />
        <Role icon="images/franchise/provide.svg" description="PROVIDE" />
        <Role icon="images/franchise/market.svg" description="MARKET" />
      </div>
    </section>
  );
};

export default Roles;
