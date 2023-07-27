import { Faq } from "../../props";

const FAQ = () => {
  return (
    <section className="px-10 pt-28" id="faq">
      <p className="text-4xl text-primary font-bold text-center">FAQs</p>
      <div className="flex flex-col lg:flex-row justify-between w-fit mx-auto gap-10 my-10">
        <div className="flex flex-col gap-5">
          <Faq
            title="How can i book E-vehicle for rent?"
            description="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
          />
          <Faq
            title="Are there any age restriction for renting an Evehicle?"
            description="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
          />
          <Faq
            title="What type of Evehicle offered by your company?"
            description="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
          />
        </div>

        <div className="flex flex-col gap-5">
          <Faq
            title="What will be the cost of renting an Evehicle?"
            description="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
          />
          <Faq
            title="Will insurances and taxes be included in the rental cost?"
            description="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
          />
          <Faq
            title="What is the return policy of the electric vehicle at rent?"
            description="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
