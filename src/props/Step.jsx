const Step = ({ index, icon, title, description }) => {
  return (
    <div className="flex flex-col items-center gap-3 p-5">
      <p className="w-fit mx-auto text-2xl bg-secondary text-primary shadow px-10 py-3 rounded-lg">
        {index}
      </p>
      <img src={icon} alt="" />
      <p className="text-center font-bold">{title}</p>
      <p className="text-center text-primary">{description}</p>
    </div>
  );
};

export default Step;
