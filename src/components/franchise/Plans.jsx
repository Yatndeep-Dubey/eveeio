import { FranchisePlans } from "../../constants";
import { Plan } from "../../props";

const Plans = () => {
  return (
    <section>
      <p className="bg-primary px-3 py-5 rounded-xl mx-auto w-fit text-white my-7 lg:w-[60rem] text-center lg:text-4xl">
        Electric Scooter & Tempo Plan Details
      </p>

      <div className="flex flex-col items-center justify-center gap-7 lg:grid lg:grid-cols-3 lg:gap-3 lg:p-5 xl:gap-7">
        <Plan
          icon="images/franchise/notes.svg"
          title="Eveeio Financials"
          year=""
          miniDescription="Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. "
          features={FranchisePlans[0].features}
          description="Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit."
        />

        <Plan
          icon="images/franchise/loader.svg"
          title="2 Lac Electric tempo Plan"
          year="(4 years)"
          miniDescription="Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. "
          features={FranchisePlans[1].features}
          description="Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. "
        />

        <Plan
          icon="images/franchise/scooty.svg"
          title="2 Lac Electric Scooters Plan "
          year="(4 years)"
          miniDescription="Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. "
          features={FranchisePlans[2].features}
          description="Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit."
        />
      </div>
    </section>
  );
};

export default Plans;
