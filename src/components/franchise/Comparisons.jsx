import { FranchiseComparisons } from "../../constants";
import { Comparison } from "../../props";

const Comparisons = () => {
  return (
    <section className="my-10">
      <p className="bg-primary px-3 py-5 rounded-xl mx-auto w-fit text-white my-10 lg:w-[60rem] text-center lg:text-4xl">
        Comparison with other investment options
      </p>

      <div className="flex flex-col items-center justify-center gap-7 lg:grid lg:grid-cols-3 lg:gap-3 lg:p-2 xl:gap-7 xl:p-5">
        <Comparison
          icon="images/franchise/notes.svg"
          title="Today’s Investment"
          year=""
          miniDescription="Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. "
          features={FranchiseComparisons[0].features}
          description="Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit."
        />

        <Comparison
          icon="images/franchise/loader.svg"
          title="2 Lac Electric tempo Plan"
          year="(4 years)"
          miniDescription="Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. "
          features={FranchiseComparisons[1].features}
          description="Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. "
        />

        <Comparison
          icon="images/franchise/scooty.svg"
          title="2 Lac Electric Scooters Plan "
          year="(4 years)"
          miniDescription="Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. "
          features={FranchiseComparisons[2].features}
          description="Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit."
        />
      </div>
    </section>
  );
};

export default Comparisons;
