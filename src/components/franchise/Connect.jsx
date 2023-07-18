const Connect = () => {
  return (
    <section className="my-10 p-5 lg:my-0">
      <p className="text-primary font-bold text-3xl lg:hidden">
        "Let's Connect : Schedule a Meeting with Us!"
      </p>

      <form
        method="POST"
        className="w-[21.375rem] bg-purplish mx-auto my-7 rounded-xl p-5 space-y-5 shadow md:w-[35rem] md:space-y-7 lg:w-fit lg:my-0"
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="name" className="font-bold text-gray-800">
            Name*
          </label>
          <input
            type="text"
            className="rounded-full w-full py-2 px-3 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="font-bold text-gray-800">
            Email*
          </label>
          <input
            type="email"
            className="rounded-full w-full py-2 px-3 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="phone" className="font-bold text-gray-800">
            Phone Number*
          </label>
          <input
            type="tel"
            className="rounded-full w-full py-2 px-3 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="city" className="font-bold text-gray-800">
            In which city you are planning to run the franchise ?
          </label>
          <input
            type="text"
            className="rounded-full w-full py-2 px-3 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="city" className="font-bold text-gray-800">
            How many e-scooters you can start with ?
          </label>

          <div className="flex gap-3 items-center">
            <input
              type="radio"
              name="numOfScooters"
              id="numOfScooters50"
              value="50"
              className="h-6 w-6"
            />
            <label for="numOfScooters50">50</label>
          </div>

          <div className="flex gap-3 items-center">
            <input
              type="radio"
              name="numOfScooters"
              id="numOfScooters100"
              value="100"
              className="h-6 w-6"
            />
            <label for="numOfScooters100">100</label>
          </div>

          <div className="flex gap-3 items-center">
            <input
              type="radio"
              name="numOfScooters"
              id="numOfScooters500"
              value="500"
              className="h-6 w-6"
            />
            <label for="numOfScooters500">500</label>
          </div>

          <div className="flex gap-3 items-center">
            <input
              type="radio"
              name="numOfScooters"
              id="numOfScooters1000"
              value="1000"
              className="h-6 w-6"
            />
            <label for="numOfScooters1000">1000</label>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="city" className="font-bold text-gray-800">
            Your Profile (write about your current business/job)
          </label>
          <textarea
            name="yourProfile"
            id="youProfile"
            className="h-36 rounded-xl"
          ></textarea>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="date" className="font-bold text-gray-800">
            On which day we should call you? (pick a date below)
          </label>
          <input
            type="date"
            className="rounded-full w-full py-2 px-3 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="time" className="font-bold text-gray-800">
            At what time we should call you? (pick a time below)
          </label>
          <input
            type="time"
            className="rounded-full w-full py-2 px-3 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="city" className="font-bold text-gray-800">
            Do you have any message for us? (optional)
          </label>
          <textarea
            name="yourProfile"
            id="youProfile"
            className="h-28 rounded-xl"
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-white bg-primary py-2 px-5 rounded-full"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Connect;
