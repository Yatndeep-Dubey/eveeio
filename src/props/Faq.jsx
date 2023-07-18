// react imports
import { useState } from "react";

const Faq = () => {
  const [accordion, setAccordion] = useState(null);
  const toggleAccordion = () => {
    setAccordion(!accordion);
  };

  return (
    <div className="sm:w-[22.377rem] lg:w-[25rem] xl:w-[35rem] p-5 shadow rounded-xl">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <p className="text-xl font-bold">How can i book E-vehicle for rent?</p>
        {!accordion ? (
          <button className="bg-primary h-[2.594rem] w-[2.84rem] text-white rounded-lg text-2xl cursor-pointer">
            +
          </button>
        ) : (
          <button className="bg-primary h-[2.594rem] w-[2.84rem] text-white rounded-lg text-2xl cursor-pointer">
            -
          </button>
        )}
      </div>
      <p
        className={
          !accordion
            ? `-translate-y-[100%] hidden`
            : `translate-y-0 transform ease-in-out transition-all duration-500 text-blackish text-sm`
        }
      >
        Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat aute irure dolor
      </p>
    </div>
  );
};

export default Faq;
