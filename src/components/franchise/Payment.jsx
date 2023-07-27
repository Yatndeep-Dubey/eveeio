const Payment = () => {
  return (
    <section className="my-20">
      <p className="text-2xl text-primary font-bold text-center lg:text-4xl">
        FIXED MONTHLY PAYMENT{" "}
      </p>

      <p className="text-center text-xl mb-10 lg:text-xl">
        One time investment{" "}
      </p>

      {/* payment chart */}
      <div className="border border-black w-[23rem] mx-auto my-10 sm:w-[30rem] lg:w-[60rem]">
        <div className="flex">
          <div className="flex gap-3 items-center justify-center border-black border-r w-1/2 md:p-5 lg:h-[7rem] xl:h-[10rem]">
            <img
              src="images/franchise/rupee.svg"
              className="h-5 w-fit lg:h-7"
              alt="rupee symbol"
            />
            <div>
              <p className="text-lg font-bold lg:text-xl">2,00,000</p>
              <p className="font-bold lg:text-xl">
                <span className="text-sm text-blueish font-normal lg:text-base">
                  Per vehicle
                </span>
                &nbsp;Investment
              </p>
            </div>
          </div>

          <div className="flex flex-col pl-48 justify-center w-1/2">
            <div>
              <p className="text-lg font-bold lg:text-xl">17.88%</p>
              <p className="font-extrabold text-lg lg:text-xl">Compounding</p>
            </div>
          </div>
        </div>

        <div className="flex border-t border-black lg:h-[7rem] xl:h-[10rem]">
          <div className="flex gap-3 items-center justify-center border-black border-r w-1/2 md:p-5">
            <img
              src="images/franchise/rupee.svg"
              className="h-5 w-fit lg:h-7"
              alt="rupee symbol"
            />
            <div>
              <p className="ext-lg font-bold lg:text-xl">3,60,000</p>
              <p className="font-bold lg:text-xl">
                <span className="text-sm text-blueish font-normal lg:text-base">
                  Returns after
                </span>
                &nbsp;4 Years
              </p>
            </div>
          </div>

          <div className="flex flex-col pl-48 justify-center w-1/2">
            <div>
              <p className="text-lg font-bold lg:text-xl">20.09%</p>
              <p className="font-extrabold text-lg lg:text-xl">IRR</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <img
          src="/images/franchise/rupee.svg"
          alt="rupee symbol"
          className="h-6 w-fit"
        />
        <p className="text-4xl font-bold text-primary">4,850/-</p>
      </div>

      <p className="mb-10 p-5 text-xs lg:text-xl">
        will be your fixed monthly income for a period of 4 years with an
        investment of ₹2,00,000/-. ₹2,00,000 is the investment behind one
        Electric Scooter.
      </p>
    </section>
  );
};

export default Payment;
