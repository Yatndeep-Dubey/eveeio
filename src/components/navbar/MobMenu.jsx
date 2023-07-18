import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";


// icons
import { HiMenu, HiX } from "react-icons/hi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MobMenu() {
  const menuStyleColor = "text-[#3D4294]";
  const [menu, setMenu] = useState(false);
  const [featuresDropdown, setFeaturesDropdown] = useState(false);
  const closeMenu = () => {
    setMenu(false);
  };
  const openMenu = () => {
    setMenu(true);
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex w-full justify-center gap-x-1.5 px-3 py-2 items-center h-full">
          {!menu ? (
            <HiMenu onClick={openMenu} className="text-3xl text-primary" />
          ) : (
            <HiX onClick={closeMenu} className="text-3xl text-primary" />
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/"
                  className={classNames(
                    active ? "bg-gray-100 text-[#3D4294]" : "text-[#3D4294]",
                    "block px-4 py-2 text-sm text-[17px]"
                  )}
                >
                Home
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/about"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-[#3D4294]",
                    "block px-4 py-2 text-sm text-[17px]"
                  )}
                >
                 About Us
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
  {({ active }) => (
    <p
      className={classNames(
        active ? "bg-gray-100 text-gray-900" : "text-[#3D4294]",
        "px-4 py-2 text-sm flex text-[17px]"
      )}
      onClick={(e) => {
        e.preventDefault();
        setFeaturesDropdown(!featuresDropdown)}}
    >
      Our Services &nbsp; <img src='images/navbar/dropdown.svg' alt="dropdown"/>
    </p>
  )}
</Menu.Item>
{featuresDropdown && (
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/rental"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "flex px-4 py-2 text-sm space-x-3"
                    )}
                  >
                    <img src="images/navbar/rental.svg" alt="" /><p  className={menuStyleColor}>Rental</p>
                  </a>
                )}
              </Menu.Item>
            )}
              {featuresDropdown && (
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/iot"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "flex px-4 py-2 text-sm space-x-3"
                    )}
                  >
                     <img src="images/navbar/iot.svg" className="h-fit" alt="" /><p  className={menuStyleColor}>IOT & Mobile application for rental services</p>
                  </a>
                )}
              </Menu.Item>
            )}
             {featuresDropdown && (
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/franchise"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-[#3D4294]",
                      "flex px-4 py-2 text-sm space-x-3 "
                    )}
                  >
                      <img src="images/navbar/deal.svg" alt="" /><p  className={menuStyleColor}>Franchise Model</p>    </a>
                )}
              </Menu.Item>
            )}
             {featuresDropdown && (
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/third-party-logistics"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "flex px-4 py-2 text-sm space-x-3"
                    )}
                  >
                     <img src="images/navbar/third-party.svg" alt="" /><p className={menuStyleColor}>Third Party Logistics</p>
                  </a>
                )}
              </Menu.Item>
            )}
            <Menu.Item>
  {({ active }) => (
    <a
      href="/"
      className={classNames(
        active ? "bg-gray-100 text-gray-900" : "text-[#3D4294]",
        "block px-4 py-2 text-sm text-[17px]"
      )}
      onClick={() => setFeaturesDropdown(!featuresDropdown)}
    >
      Features
    </a>
  )}
</Menu.Item>

          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
