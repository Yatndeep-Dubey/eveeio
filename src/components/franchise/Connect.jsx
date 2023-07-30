import { useState } from "react";

// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Success from "../Success";

const Connect = () => {
  const [successMessage, setSuccessMessage] = useState(false);

  const [fname, setName] = useState("");
  const [femail, setEmail] = useState("");
  const [fphone_number, setphone_number] = useState("");
  const [fdate, setdate] = useState("");
  const [ftime, settime] = useState("");
  const [fcity, setcity] = useState("");
  const [fstarting_scooters, setstarting_scooters] = useState("");
  const [fcurrent_bussiness, setcurrent_bussiness] = useState("");
  const [fmessage, setmessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(fname, femail, fphone_number, fdate, ftime);
      let res = await fetch("http://localhost:4000/rentalform", {
        method: "POST",
        body: JSON.stringify({
          name: fname,
          email: femail,
          phone_number: fphone_number,
          date: fdate,
          time: ftime,
          city: fcity,
          starting_scooters: fstarting_scooters,
          current_bussiness: fcurrent_bussiness,
          message: fmessage,
        }),
      });

      let resJson = await res.json();
      console.log(resJson.message);
      console.log(res.status);
      if (res.status === 200) {
        setSuccessMessage(true);
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
    <section className="my-10 p-5 lg:my-0">
      {successMessage && <Success />}
      <div>
        <ToastContainer />
      </div>
      <p className="text-primary font-bold text-3xl lg:hidden">
        "Let's Connect : Schedule a Meeting with Us!"
      </p>

      <form
        method="POST"
        className="w-[20rem] bg-purplish mx-auto my-7 rounded-xl p-5 space-y-5 shadow md:w-[35rem] md:space-y-7 lg:w-fit lg:my-0"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="name" className="font-bold text-gray-800">
            Name*
          </label>
          <input
            type="text"
            className="rounded-full w-full py-2 px-3 focus:outline-none lg:w-[30rem]"
            value={fname}
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
            value={femail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="phone" className="font-bold text-gray-800">
            Phone Number*
          </label>
          <input
            type="tel"
            className="rounded-full w-full py-2 px-3 focus:outline-none lg:w-[30rem]"
            value={fphone_number}
            onChange={(e) => setphone_number(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="city" className="font-bold text-gray-800">
            In which city you are planning to run the franchise ?
          </label>
          <input
            type="text"
            className="rounded-full w-full py-2 px-3 focus:outline-none lg:w-[30rem]"
            value={fcity}
            onChange={(e) => setcity(e.target.value)}
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
              className="h-6 w-6"
              value={fstarting_scooters}
              onChange={(e) => setstarting_scooters(e.target.value)}
            />
            <label for="numOfScooters50">50</label>
          </div>

          <div className="flex gap-3 items-center">
            <input
              type="radio"
              name="numOfScooters"
              id="numOfScooters100"
              className="h-6 w-6"
              value={fstarting_scooters}
              onChange={(e) => setstarting_scooters(e.target.value)}
            />
            <label for="numOfScooters100">100</label>
          </div>

          <div className="flex gap-3 items-center">
            <input
              type="radio"
              name="numOfScooters"
              id="numOfScooters500"
              className="h-6 w-6"
              value={fstarting_scooters}
              onChange={(e) => setstarting_scooters(e.target.value)}
            />
            <label for="numOfScooters500">500</label>
          </div>

          <div className="flex gap-3 items-center">
            <input
              type="radio"
              name="numOfScooters"
              id="numOfScooters1000"
              className="h-6 w-6"
              value={fstarting_scooters}
              onChange={(e) => setstarting_scooters(e.target.value)}
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
            value={fcurrent_bussiness}
            onChange={(e) => setcurrent_bussiness(e.target.value)}
          ></textarea>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="date" className="font-bold text-gray-800">
            On which day we should call you? (pick a date below)
          </label>
          <input
            type="date"
            className="rounded-full w-full py-2 px-3 focus:outline-none lg:w-[30rem]"
            value={fdate}
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
            value={ftime}
            onChange={(e) => settime(e.target.value)}
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
            value={fmessage}
            onChange={(e) => setmessage(e.target.value)}
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
