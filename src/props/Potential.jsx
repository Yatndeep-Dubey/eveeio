const Potential = ({ title, description, image, customClass }) => {
  return (
    <div className={`flex flex-col items-center gap-3 ${customClass}`}>
      <p className="text-primary font-bold uppercase lg:hidden">{title}</p>
      <p className="text-grayish text-justify lg:hidden">{description}</p>

      <div className="hidden lg:block">
        <p className="text-primary font-bold uppercase">{title}</p>
        <p className="text-grayish text-justify">{description}</p>
      </div>

      <img src={image} alt={title} />
    </div>
  );
};

export default Potential;
