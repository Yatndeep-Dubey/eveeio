const Need = ({ icon, description }) => {
  return (
    <div className="w-fit flex flex-col items-center gap-3">
      <img src={icon} alt="" className="md:h-56 w-fit" />
      <p className="text-grayish">{description}</p>
    </div>
  );
};

export default Need;
