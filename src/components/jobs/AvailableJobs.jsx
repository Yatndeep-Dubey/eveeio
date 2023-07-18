import { Job } from "../../props";

const AvailableJobs = () => {
  return (
    <section>
      <p className="uppercase bg-secondary font-bold text-primary w-fit px-5 py-3 mx-auto rounded-lg shadow-lg my-10">
        Current Jobs AVAILABLE
      </p>

      <div className="flex flex-col gap-10 mb-10 items-center md:grid md:grid-cols-2 md:w-fit md:mx-auto lg:grid-cols-3">
        <Job
          customClass="border-secondary"
          icon="images/jobs/hr.svg"
          title="Human Resource"
        />

        <Job
          customClass="border-blueish"
          icon="images/jobs/data.svg"
          title="Data"
        />

        <Job
          customClass="border-secondary"
          icon="images/jobs/ai.svg"
          title="AI Strategy"
        />

        <Job
          customClass="border-blueish"
          icon="images/jobs/operations.svg"
          title="Operations"
        />

        <Job
          customClass="border-secondary"
          icon="images/jobs/finance.svg"
          title="Finance"
        />

        <Job
          customClass="border-blueish"
          icon="images/jobs/tech.svg"
          title="Technology"
        />
      </div>
    </section>
  );
};

export default AvailableJobs;
