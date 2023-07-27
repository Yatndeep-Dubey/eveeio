// const MapSection = () => {
//   return (
//     <div className="flex flex-col gap-10 p-10 lg:p-0 md:gap-7 lg:gap-44 md:flex-row md:justify-evenly ">
//       <div className="pt-24" >
//         <p className=" lg:text-5xl text-4xl leading-[50px] font-bold">Live In</p>
//         <p className=" lg:text-5xl text-4xl leading-[50px] font-bold"><span className="text-[#313A70]">6 Cities</span> and </p>
//         <p className=" lg:text-5xl  text-4xl leading-[50px] font-bold">growing more</p>
//         <p className="mt-5 md:text-2xl text-lg font-[600]">Launch New Cities with us </p>
//          <p className=" md:text-2xl text-lg font-[600] ">Be a part of Eveeio</p>
//          <p className="mt-2 md:text-xl text-lg">Gurgaon | Faridabad | Noida</p>
//       </div>

//       <div>
//         <img
//           src="/images/map/map.svg"
//           alt="IndiaMap"
//           className="h-[20rem] w-[40rem] lg:hidden"
//         />
//         <img
//           src="/images/map/map.svg"
//           alt="IndiaMap"
//           className="hidden lg:block h-[50rem] w-[40rem]"
//         />
//       </div>
//     </div> /*main div close */
//   );
// };
// export default MapSection;

const MapSection = () => {
  return (
    <div className="flex flex-col p-10 gap-7 md:flex-row md:justify-evenly">
      <div>
        <p className="font-extrabold text-4xl lg:leading-[4rem] md:text-4xl lg:text-5xl xl:text-6xl">
          Live In <br />
          <span className="text-primary">6 Cities</span> and <br />
          growing more
        </p>
        <p className="font-bold my-2 lg:my-5 md:text-lg lg:text-xl">
          Launch New Cities with us <br />
          Be a part of Eveeio
        </p>

        <p>Gurgaon | Faridabad | Noida</p>
      </div>

      <div>
        <img
          src="/images/map/map.svg"
          alt="IndiaMap"
          className="h-64 w-64 lg:hidden"
        />
        <img
          src="/images/map/map.svg"
          alt="IndiaMap"
          className="hidden lg:block lg:h-[35rem] xl:h-[45rem] w-fit"
        />
      </div>
    </div> /*main div close */
  );
};
export default MapSection;
