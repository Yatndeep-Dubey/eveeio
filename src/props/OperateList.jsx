const OperateList = ({ index, text }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <p className="text-3xl font-bold bg-secondary h-16 w-16 flex justify-center rounded-lg items-center">{index}</p>
      <p className="text-blakish">{text}</p>
    </div>
  );
};

export default OperateList;
