const Benefit = ({ img, text }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={img} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default Benefit;
