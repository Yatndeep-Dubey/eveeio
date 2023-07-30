const Carousel = () => {
  return (
    <>

    {/* larger screens */}
      <div className="hidden lg:flex flex-col items-center shrink-0 py-10 ">
        <div>
          <img src="/images/feedback/user.svg" alt="user" className="w-96" />
        </div>
        <div className="bg-[#F5F7FA] w-[70%] text-center rounded-lg -mt-10 py-5 shadow-xl">
          <p className="text-xl">
            “Amazing services in love with what they provide”
          </p>
          <p className="text-[#313A70] text-center font-bold text-xl mt-2">
            Mary Patel
          </p>
        </div>
      </div>


      {/* mobile screen */}

      <div className="flex flex-col items-center shrink-0 lg:hidden">
        <img src="/images/feedback/user.svg" alt="user" />
        <div className="h-[3.875rem] w-[11.606rem] flex items-center justify-center bg-white rounded-lg -mt-10 z-10 relative">
          <p className="text-sm">
            “Amazing services in love with what they provide”
          </p>
        </div>
        <p className="text-xl text-primary font-bold">Mary Patel</p>
      </div>
    </>
  );
};

export default Carousel;
