import Button from "../../containers/Button";

const Enquiry = () => {
  return (
    <section className="my-10 lg:my-0">
      <form className="w-[21.375rem] bg-purplish mx-auto my-7 rounded-xl p-5 space-y-5 shadow md:w-[35rem] md:space-y-7 lg:w-fit lg:my-0">
        <p className="text-lg font-bold">Enquire For Us </p>

        <div className="flex flex-col gap-3">
          <label htmlFor="name" className="font-bold text-gray-800">
            Name*
          </label>
          <input
            type="text"
            className="rounded-full w-full py-2 px-3 focus:outline-none lg:w-[30rem]"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="font-bold text-gray-800">
            Email*
          </label>
          <input
            type="email"
            className="rounded-full w-full py-2 px-3 focus:outline-none lg:w-[30rem]"
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
          <label htmlFor="whatsapp" className="font-bold text-gray-800">
            WhatsApp Number*
          </label>
          <input
            type="tel"
            className="rounded-full w-full py-2 px-3 focus:outline-none lg:w-[30rem]"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="location" className="font-bold text-gray-800">
            Location*
          </label>
          <input
            type="text"
            className="rounded-full w-full py-2 px-3 focus:outline-none lg:w-[30rem]"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="message" className="font-bold text-gray-800">
            Message*
          </label>
          <input
            type="text"
            className="rounded-full w-full py-2 px-3 focus:outline-none lg:w-[30rem]"
          />
        </div>

        <Button>
          <p className="text-white">Submit</p>
        </Button>
      </form>
    </section>
  );
};

export default Enquiry;
