import Button from "../../containers/Button";

const Comment = () => {
  return (
    <form className="w-[21.375rem] bg-purplish mx-auto my-7 rounded-xl p-5 space-y-5 shadow md:w-[35rem] md:space-y-7 lg:my-10 lg:w-full">
      <p className="text-3xl font-bold">Comment</p>

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
        <label htmlFor="message" className="font-bold text-gray-800">
          Message*
        </label>
        <textarea className="rounded-lg w-full py-2 px-3 h-44 focus:outline-none" />
      </div>

      <div className="flex justify-center lg:justify-start">
        <Button customClass="lg:px-16">
          <p className="text-white">Submit</p>
        </Button>
      </div>
    </form>
  );
};

export default Comment;
