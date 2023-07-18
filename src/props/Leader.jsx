import { Link } from "react-router-dom";

const Leader = (props) => {
  const { bg, leader, name, position, link } = props;
  return (
    <div className="bg-white shadow-lg rounded-xl w-fit h-[34.125rem] flex flex-col">
      <img
        src={leader}
        alt="leader"
        className={`${bg} w-[19.125rem] h-[23.938rem] rounded-t-xl`}
      />
      <div className="flex flex-col justify-center w-full items-center h-full gap-2">
        <p className="text-xl font-bold">{name}</p>
        <p>{position}</p>
        <Link to={link}>
          <img src="/images/social/linkedin.svg" alt="linkedin symbol" />
        </Link>
      </div>
    </div>
  );
};

export default Leader;
