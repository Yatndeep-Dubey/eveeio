const Service = (props) => {
  return (
    <div className="bg-white rounded text-blackish w-[17rem] h-[25.75rem] flex flex-col text-center p-10 justify-between">
      <div>
        <p className="text-2xl font-bold">{props.title}</p>
        <p className="text-xs">{props.description}</p>
      </div>
      <img
        src={props.img}
        alt="services illustration"
        className="h-[11.454rem]"
      />
    </div>
  );
};

export default Service;
