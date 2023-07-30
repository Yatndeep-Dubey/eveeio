import { VM } from "../../props";

const VisionMission = () => {
  return (
    <section className="my-16 p-10 space-y-7">
      <VM
        symbol="/images/visionmission/eye.svg"
        title="Our Vision"
        description="To reduce the problem of pollution & climate change with sustainability at the core, solving the last mile first in India and then extending the EV-as-a-Service solution to the world."
      />
      <VM
        symbol="/images/visionmission/target.svg"
        title="Our Mission"
        description="We are on a mission zero emission where we wish to accelerate last mile delivery to go 100% sustainable with EVs by 2028 while making it efficient, affordable, intelligent, and reliable."
      />

    </section>

    
  );
};

export default VisionMission;
