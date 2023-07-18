const Cost = ({title, description}) => {
  return (
    <div className="flex gap-5 items-center">
      <img src="images/franchise/rupee.svg" alt="INR symbol" />

      <div className="text-xl space-y-1">
        <p className="font-bold">{title}</p>
        <p className="text-primary">{description}</p>
      </div>
    </div>
  );
};

export default Cost;
