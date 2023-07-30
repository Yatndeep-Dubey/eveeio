import {
  FAQ,
  Hero,
  HowToUse,
  Investors,
  MapSection,
  Services,
  Feedback,
  Brands,
  HeroCarousel,
} from "../components/home";

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <MapSection />
      <Investors />
      <Services />
      <HowToUse />
      <img
        src="/images/how-to-use/video.svg"
        alt="video"
        className="-mt-24 sm:-mt-44 lg:-mt-72 mx-auto"
      />

      <Brands />
      <FAQ />
      <Feedback />
    </div>
  );
};

export default Home;
