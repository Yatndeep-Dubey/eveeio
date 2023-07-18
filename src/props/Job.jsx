const Job = ({ customClass, icon, title }) => {
  return (
    <div
      className={`border p-5 w-[18.813rem] h-44 rounded-lg flex flex-col items-center gap-5 ${customClass}`}
    >
      <img src={icon} className="h-24 w-fit" alt="" />
      <p className="text-xl font-bold text-primary">{title}</p>
    </div>
  );
};

export default Job;
