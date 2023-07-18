import {
  FAQ,
  Hero,
  HowToUse,
  Investors,
  MapSection,
  Services,
  Feedback,
  Brands,
} from "../components/home";

const Home = () => {
  return (
    <div>
      <Hero />
      <MapSection />
      <Investors />
      <Services />
      <HowToUse />
      <img
        src="/images/how-to-use/video.svg"
        alt="video"
        className="-mt-20 sm:-mt-44 lg:-mt-72 mx-auto"
      />

      <Brands />
      <FAQ />
      <Feedback />
    </div>
  );
};

export default Home;
