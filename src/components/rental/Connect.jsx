import { useState } from "react";

// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Connect = () => {
  const [rname, setName] = useState("");
  const [remail, setEmail] = useState("");
  const [rphone_number, setphone_number] = useState("");
  const [rdate, setdate] = useState("");
  const [rtime, settime] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(rname, remail, rphone_number, rdate, rtime);
      let res = await fetch("http://localhost:4000/rentalform", {
        method: "POST",
        body: JSON.stringify({
          name: rname,
          email: remail,
          phone_number: rphone_number,
          date: rdate,
          time: rtime,
        }),
      });

      let resJson = await res.json();
      console.log(resJson.message);
      console.log(res.status);
      if (res.status === 200) {
        alert("Success");
      } else {
        alert(resJson.message);
      }
    } catch (err) {
      const notify = () =>
        toast.error("Some error occured", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      notify();
      console.log(err);
    }
  };
  return (
    <section className="my-10 lg:my-0">
      <p className="text-center text-primary font-bold md:text-lg lg:hidden">
        "Let's Connect : Schedule a Meeting with Us!"
      </p>

      <form
        method="POST"
        className="w-[21.375rem] bg-purplish mx-auto my-7 rounded-xl p-5 space-y-5 shadow md:w-[35rem] md:space-y-7 lg:w-fit lg:my-0"
        onSubmit={handleSubmit}
      >
        <div>
          <ToastContainer />
        </div>
        <p>✅ We respect your privacy and will never spam you</p>

        <div className="flex flex-col gap-3">
          <label htmlFor="name" className="font-bold text-gray-800">
            Name*
          </label>
          <input
            type="text"
            className="rounded-full w-full py-2 px-3 focus:outline-none lg:w-[30rem]"
            value={rname}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="font-bold text-gray-800">
            Email*
          </label>
          <input
            type="email"
            className="rounded-full w-full py-2 px-3 focus:outline-none lg:w-[30rem]"
            value={remail}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
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
              value={rphone_number}
              placeholder="Phone Number"
              onChange={(e) => setphone_number(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="date" className="font-bold text-gray-800">
            On which day we should call you? (pick a date below)
          </label>
          <input
            type="date"
            className="rounded-full w-full py-2 px-3 focus:outline-none lg:w-[30rem]"
            value={rdate}
            onChange={(e) => setdate(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="time" className="font-bold text-gray-800">
            At what time we should call you? (pick a time below)
          </label>
          <input
            type="time"
            className="rounded-full w-full py-2 px-3 focus:outline-none lg:w-[30rem]"
            value={rtime}
            onChange={(e) => settime(e.target.value)}
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
