const Role = ({ icon, description }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <img src={icon} alt="role icon" className="lg:h-72 w-fit" />

      <p className="font-bold lg:text-2xl">{description}</p>
    </div>
  );
};

export default Role;
