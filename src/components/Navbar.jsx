// react imports
import { Link } from "react-router-dom";

// props
import { MenuItem } from "../props";

// components
import { MobMenu, OurServices } from "./navbar/";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur pt-5 md:pt-[1.5rem]">
      {/* for small screen */}
      <div className="bg-white shadow pl-3 h-[3.813rem] mx-[0.688rem] rounded-2xl flex items-center justify-between lg:hidden">
        {/* logo */}
        <Link to="/">
          <img
            src="/images/logo/logo-with-title.svg"
            alt="logo with the title"
            className="h-14"
          />
        </Link>

        {/* menu */}
        <MobMenu />
      </div>

      {/* for large screen */}
      <div className="hidden bg-white mx-[1.531rem] rounded h-[5.18rem] items-center justify-between px-5 shadow md:hidden lg:flex">
        {/* logo */}
        <Link to="/">
          <img
            src="/images/logo/logo-with-title.svg"
            alt="logo with the title"
          />
        </Link>

        {/* menu */}
        <ul className="text-lg gap-14 items-center hidden md:flex">
          <MenuItem link="/" title="Home" />
          <MenuItem link="/about" title="About us" />
          <OurServices />
          <MenuItem link="/contact" title="Contact Us" />
          <li>
            <Link to="/">
              <button className="bg-secondary py-1 px-5 rounded font-bold">
                <p className="text-[#263973] ">Download</p>
              </button>  
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
