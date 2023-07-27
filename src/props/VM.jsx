const VM = (props) => {
  return (
    <div className="flex gap-16 items-center lg:px-24">
      <img src={props.symbol} alt="symbol" className="w-36" />
      <div className="space-y-5">
        <p className="text-4xl text-primary font-bold">{props.title}</p>
        <p className="text-grayish">{props.description}</p>
      </div>
    </div>
  );
};

export default VM;
