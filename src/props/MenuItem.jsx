// react imports
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const MenuItem = (props) => {
  // active page
  const [activepage, setActivepage] = useState("/");
  const location = useLocation();

  useEffect(() => {
    const currentPage = location.pathname;
    setActivepage(currentPage);
  }, [location]);

  return (
    <li>
      <NavLink
        exact
        to={props.link}
        className={`${
          activepage === props.link ? "text-primary font-bold" : "text-black"
        } `}
      >
        {props.title}
      </NavLink>
    </li>
  );
};

export default MenuItem;
