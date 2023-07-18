const MapSection = () => {
  return (
    <div className="flex flex-col items-center p-10 gap-7 md:flex-row md:justify-evenly">
      <div>
        <p className="font-extrabold text-4xl md:text-4xl lg:text-6xl">
          LIVE in
          <div className="flex">
            {" "}
            <p className="text-secondary">6 Cities</p>
            <p>&nbsp; and</p>
          </div>
          <h1> growing more</h1>
        </p>
        <p className="font-bold md:text-lg lg:text-xl">
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
          className="hidden lg:block h-96"
        />
      </div>
    </div> /*main div close */
  );
};
export default MapSection;
