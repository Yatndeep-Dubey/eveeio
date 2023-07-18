const Hero = ({ children, customClass }) => {
  return (
    <div className={`pt-28 bg-hero md:pt-40 ${customClass}`}>{children}</div>
  );
};

export default Hero;
