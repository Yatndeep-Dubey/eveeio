import { Link } from "react-router-dom";
import { FooterLinks, FooterSocials } from "../constants";
import { FooterItem } from "../props";

// icons
import { HiArrowRight, HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-[#2e2e2e]">
      {/* mobile menu */}
      <div className="lg:hidden p-5">
        <div className="flex flex-wrap">
          <FooterItem
            title={FooterLinks[0].title}
            links={FooterLinks[0].links}
          />
          <FooterItem
            title={FooterLinks[1].title}
            links={FooterLinks[1].links}
          />
          <FooterItem
            title={FooterLinks[2].title}
            links={FooterLinks[2].links}
          />

          {/* subscribe section */}
          <div className="space-y-[1.875rem] p-7">
            <p className="text-xl text-white font-bold">Subscribe</p>
            <div className="space-y-5">
              <p className="text-[#969696]">
                Want to receive amazing updates from EVEEIO?
              </p>
              <div className="flex items-center bg-white rounded-full py-3 px-2 gap-2 w-72 sm:w-fit">
                <HiOutlineMail className="text-[#b8b8b8] text-2xl" />
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="bg-transparent focus:outline-none w-[80%] sm:w-[100%]"
                />
                <HiArrowRight className="text-2xl" />
              </div>
            </div>
          </div>
        </div>

        <hr className="mx-7 my-10 bg-white" />

        {/* download from.... */}
        <div className="m-7 space-y-[1.875rem]">
          <p className="text-xl text-white font-bold">EVEEIO APP</p>
          <div className="flex gap-7 items-center">
            <img src="/images/social/playstore.svg" alt="playstore logo" />
            <img src="/images/social/apple.svg" alt="apple logo" />
          </div>
        </div>

        <hr className="mx-7 my-10 bg-white" />

        {/* socials... */}
        <div>
          {FooterSocials.map((item) => {
            return (
              <ul className="inline-flex">
                <li className="text-white text-2xl ml-7">
                  <Link to={item.url}>{item.icon}</Link>
                </li>
              </ul>
            );
          })}
        </div>

        <p className="text-white my-7 text-center">
          Copyright © 2020 All rights reserved.
        </p>

        <div className="flex justify-end mb-7">
          <img src="images/social/razorpay.svg" alt="razorpay logo" />
        </div>
      </div>

      {/*for large screen */}
      <div className="hidden lg:block">
        {/* upper section */}
        <div className="flex flex-wrap border-b">
          <FooterItem
            title={FooterLinks[0].title}
            links={FooterLinks[0].links}
          />
          <FooterItem
            title={FooterLinks[1].title}
            links={FooterLinks[1].links}
          />
          <FooterItem
            title={FooterLinks[2].title}
            links={FooterLinks[2].links}
          />

          <div>
            {/* subscribe section */}
            <div className="space-y-[1.875rem] py-16 px-10 border-b">
              <p className="text-xl text-white font-bold">Subscribe</p>
              <div className="space-y-5">
                <p className="text-[#969696] text-sm max-w-64">
                  Want to receive amazing updates from EVEEIO?
                </p>
                <div className="w-fit flex items-center bg-white rounded-full py-3 px-2 gap-2">
                  <HiOutlineMail className="text-[#b8b8b8] text-2xl" />
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="bg-transparent focus:outline-none"
                  />
                  <HiArrowRight className="text-2xl" />
                </div>
              </div>
            </div>

            <div className="space-y-4 p-10">
              <p className="text-xl text-white font-bold">EVEEIO APP</p>
              <div className="flex gap-7 items-center">
                <img src="/images/social/playstore.svg" alt="playstore logo" />
                <img src="/images/social/apple.svg" alt="apple logo" />
              </div>
            </div>
          </div>
        </div>

        {/* lower section */}
        <div className="flex justify-between text-white p-10">
          {/* socials... */}
          <div>
            {FooterSocials.map((item) => {
              return (
                <ul className="inline-flex">
                  <li className="text-white text-2xl ml-5">
                    <Link to={item.url}>{item.icon}</Link>
                  </li>
                </ul>
              );
            })}
          </div>

          <p>Copyright © 2020 All rights reserved.</p>

          <img src="images/social/razorpay.svg" alt="razorpay logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
