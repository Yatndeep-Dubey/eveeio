import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function OurServices() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 items-center">
          Our Services
          <ChevronDownIcon
            className="-mr-1 h-7 w-10 text-gray-400"
            aria-hidden="true"
          />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-[14.987rem] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/rental"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "px-4 py-2 text-sm flex gap-3"
                  )}
                >
                  <img src="/images/navbar/rental-symbol.svg" alt="" />
                  Rental
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/iot"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "px-4 py-2 text-sm flex gap-3"
                  )}
                >
                  <img src="/images/navbar/iot-symbol.svg" alt="" />
                  IOT Telematics
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/franchise"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "px-4 py-2 text-sm flex gap-3"
                  )}
                >
                  <img src="/images/navbar/franchise-symbol.svg" alt="" />
                  Franchise Model
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/third-party-logistics"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "px-4 py-2 text-sm flex gap-3"
                  )}
                >
                  <img src="/images/navbar/third-party-symbol.svg" alt="" />
                  Third Party Logistics
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
