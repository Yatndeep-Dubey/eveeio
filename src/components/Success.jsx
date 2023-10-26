import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Success() {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-start mt-24 lg:mt-10 justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full lg:w-[55rem] lg:h-[25rem]">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 h-full">
                  <div className="sm:flex sm:items-start h-full">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left flex flex-col justify-between h-full">
                      <button
                        type="button"
                        className="text-3xl absolute top-5 right-5 focus:outline-none"
                        onClick={() => setOpen(false)}
                      >
                        X
                      </button>

                      <Dialog.Title
                        as="h3"
                        className="text-base my-5 font-bold leading-6 text-blackish text-center lg:text-xl xl:text-2xl"
                      >
                        Your Form has been sent Successfully!
                      </Dialog.Title>

                      <img
                        src="images/contact/form.svg"
                        alt=""
                        className="mx-auto lg:h-36 w-fit"
                      />

                      <div className="mb-5">
                        <p className="text-xs text-grayish font-bold lg:text-sm">
                          Thank you for contacting EVEEIO! We will get back to
                          you within 48 hours! Contact us on
                          +91-911-365-1818/+91-953-853-1818 in case it is
                          urgent!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
