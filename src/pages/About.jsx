import { Hero, Leadership, Stats, VisionMission, Who } from "../components/about";

const About = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Who />
      <Stats />
      <VisionMission />
      <Leadership />
    </div>
  );
};

export default About;
