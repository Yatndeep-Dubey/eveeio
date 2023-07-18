const Carousel = () => {
  return (
    <div className=" flex flex-col items-center shrink-0">
      <img src="/images/feedback/user.svg" alt="user" />
      <div className="h-[3.875rem] w-[11.606rem] flex items-center justify-center bg-white rounded-lg -mt-10 z-10 relative">
        <p className="text-sm">
          “Amazing services in love with what they provide”
        </p>
      </div>
      <p className="text-xl  text-primary font-bold">Mary Patel</p>
    </div>
  );
};

export default Carousel;
