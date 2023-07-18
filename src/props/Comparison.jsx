const Comparison = ({
    title,
    icon,
    miniDescription,
    description,
    year,
    features,
  }) => {
    return (
      <div className="w-80 border-2 border-primary rounded-xl p-5 lg:w-fit lg:h-[42rem]">
        <div className="flex items-center">
          <img src={icon} alt="icon" />
          <p className="text-3xl">{title}</p>
        </div>
  
        <p className="text-center my-3 text-primary text-xl">{year}</p>
  
        <p className="text-grayish text-lg">{miniDescription}</p>
  
        <div className="my-3">
          <p className="text-primary text-lg font-bold">What’s included</p>
  
          <ul className="space-y-3 my-5">
            {features.map((feature) => (
              <li className="flex gap-3 text-primary font-[400]">
                {" "}
                <img src="images/franchise/tick.svg" alt="" />{" "}
                <p> {feature}</p>
              </li>
            ))}
          </ul>
        </div>
  
        <p className="text-grayish">{description}</p>
      </div>
    );
  };
  
  export default Comparison;
  