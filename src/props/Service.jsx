const Service = (props) => {
  return (
    <div className="bg-white rounded text-black w-[20rem] h-[25.75rem] flex flex-col text-center py-10 justify-between">
      <div>
        <p className="text-2xl font-[800]">{props.title}</p>
        <p className="text-sm">{props.description}</p>
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
