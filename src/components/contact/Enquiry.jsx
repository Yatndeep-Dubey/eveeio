import { useState } from "react";

// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Success from "../Success";

// containers
import Button from "../../containers/Button";

const Enquiry = () => {
  const [successMessage, setSuccessMessage] = useState(false);

  const [ename, setName] = useState("");
  const [eemail, setEmail] = useState("");
  const [ephone_number, setphone_number] = useState("");
  const [ewhatsapp_number, setwhatsapp_number] = useState("");
  const [emessage, setmessage] = useState("");
  const [elocation, setlocation] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:4000/rentalform", {
        method: "POST",
        body: JSON.stringify({
          name: ename,
          email: eemail,
          phone_number: ephone_number,
          whatsapp_number: ewhatsapp_number,
          message: emessage,
          location: elocation,
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
    <section className="my-10 lg:my-0">
      {successMessage && <Success />}
      <ToastContainer />

      <form
        className="w-[21.375rem] bg-purplish mx-auto my-7 rounded-xl p-5 space-y-5 shadow md:w-[35rem] md:space-y-7 lg:w-fit lg:my-0"
        onSubmit={handleSubmit}
      >
        <p className="text-lg font-bold">Enquire For Us </p>

        <div className="flex flex-col gap-3">
          <label htmlFor="name" className="font-bold text-gray-800">
            Name*
          </label>
          <input
            type="text"
            className="rounded-full w-full py-2 px-3 focus:outline-none lg:w-[30rem]"
            value={ename}
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
            value={eemail}
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
              value={ephone_number}
              onChange={(e) => setphone_number(e.target.value)}
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
            value={ewhatsapp_number}
            onChange={(e) => setwhatsapp_number(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="location" className="font-bold text-gray-800">
            Location*
          </label>
          <input
            type="text"
            className="rounded-full w-full py-2 px-3 focus:outline-none lg:w-[30rem]"
            value={elocation}
            onChange={(e) => setlocation(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="message" className="font-bold text-gray-800">
            Message*
          </label>
          <input
            type="text"
            className="rounded-full w-full py-2 px-3 focus:outline-none lg:w-[30rem]"
            value={emessage}
            onChange={(e) => setmessage(e.target.value)}
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
