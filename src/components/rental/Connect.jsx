const Connect = () => {
  return (
    <section className="my-10 lg:my-0">
      <p className="text-center text-primary font-bold md:text-lg lg:hidden">
        "Let's Connect : Schedule a Meeting with Us!"
      </p>

      <form
        method="POST"
        className="w-[21.375rem] bg-purplish mx-auto my-7 rounded-xl p-5 space-y-5 shadow md:w-[35rem] md:space-y-7 lg:w-fit lg:my-0"
      >
        <p>✅ We respect your privacy and will never spam you</p>

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
          <div className="flex gap-3 items-center">
            <p className="bg-white py-2 px-3 rounded-full">+91</p>
            <input
              type="tel"
              className="rounded-full w-full py-2 px-3 focus:outline-none"
            />
          </div>
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
