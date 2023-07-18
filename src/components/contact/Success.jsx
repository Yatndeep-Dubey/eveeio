const Success = () => {
  return (
    <>
      <div>
        <button
          data-modal-target="popup-modal"
          data-modal-toggle="popup-modal"
          className=""
          type="button"
        >
          Submit
        </button>

        <div
          id="popup-modal"
          tabindex="-1"
          className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow -top-[10rem]">
              <button
                type="button"
                className="absolute top-3 right-2.5 bg-transparent hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="popup-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <h3 className="mb-5 text-sm font-bold">
                  Your Form has been sent Successfully!
                </h3>

                <img src="images/contact/form.svg" alt="" className="mx-auto" />

                <p className="text-grayish text-xs">
                  Thank you for contacting EVEEIO! We will get back to you
                  within 48 hours! Contact us on
                  +91-911-365-1818/+91-953-853-1818 in case it is urgent!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
