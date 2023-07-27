const Carousel = () => {
  return (
    <div className=" flex flex-col items-center shrink-0 py-10 ">
      <div>
       <img src="/images/feedback/user.svg" alt="user" className="w-96"/>
      </div>
      <div className="bg-[#F5F7FA] w-[70%] text-center rounded-lg -mt-10 py-5 shadow-xl">
            <p className="text-xl">“Amazing services in love with what they provide”</p>
            <p className="text-[#313A70] text-center font-bold text-xl mt-2">Mary Patel</p>
      </div>
      
    </div>
  );
};

export default Carousel;
