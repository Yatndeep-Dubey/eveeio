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
          <div className="flex gap-3 items-center justify-center border-black border-r w-1/2 md:p-5">
            <img
              src="images/franchise/rupee.svg"
              className="h-5 w-fit"
              alt="rupee symbol"
            />
            <div>
              <p className="text-lg font-bold">2,00,000</p>
              <p className="font-bold">
                <span className="text-sm text-blueish font-normal">
                  Per vehicle
                </span>
                &nbsp;Investment
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-1/2 md:p-5">
            <div>
              <p>17.88%</p>
              <p className="font-bold">Compounding</p>
            </div>
          </div>
        </div>

        <div className="flex border-t border-black">
          <div className="flex gap-3 items-center justify-center border-black border-r w-1/2 md:p-5">
            <img
              src="images/franchise/rupee.svg"
              className="h-5 w-fit"
              alt="rupee symbol"
            />
            <div>
              <p className="text-lg font-bold">3,60,000</p>
              <p className="font-bold">
                <span className="text-sm text-blueish font-normal">
                  Returns after
                </span>
                &nbsp;4 Years
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-1/2 md:p-5">
            <div>
              <p>20.09%</p>
              <p className="font-bold">IRR</p>
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
