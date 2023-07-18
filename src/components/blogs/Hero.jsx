const Hero = () => {
  const scrollToStories = () => {
    window.scrollTo({
      top: document.getElementById("stories").offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <section className="bg-hero lg:h-[30.935rem] flex items-center justify-between p-5 lg:p-10">
      <img
        src="/images/hero/joining.svg"
        alt="joining"
        className="h-52 mt-24 lg:mt-56 lg:h-96"
      />
      <div className="space-y-2">
        <p className="text-secondary text-2xl font-bold uppercase mt-24 lg:mt-16 lg:text-5xl lg:mr-44">
          New beginnings,
          <br /> new joinings
        </p>
        <p
          onClick={scrollToStories}
          className="text-white uppercase cursor-pointer"
        >
          Read out our blogs&nbsp;&gt;
        </p>
      </div>
    </section>
  );
};

export default Hero;
