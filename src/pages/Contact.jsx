import { ContactDetails, Enquiry, EnquiryDetails } from "../components/contact";
import Hero from "../containers/Hero";

const Contact = () => {
  return (
    <div>
      <Hero customClass="h-[23rem] mb-28 p-5 md:mb-56 md:p-10 lg:flex lg:flex-row-reverse lg:justify-end xl:h-[27rem] lg:justify-center lg:gap-20 lg:pt-44">
        <div className="lg:pt-20">
          <p className="uppercase text-xl font-bold text-secondary md:text-4xl lg:text-5xl xl:text-6xl">
            Contact Us
          </p>
          <p className="text-white text-xs uppercase md:text-md lg:text-lg">
            Get in touch with us{" "}
          </p>
        </div>

        <img
          src="images/hero/girl-using-laptop.svg"
          alt=""
          className="h-64 mx-auto md:h-80 md:mx-0 xl:h-[25rem]"
        />
      </Hero>

      <ContactDetails />

      <div className="my-10 flex flex-col items-center justify-center lg:p-10">
        <p
          className="uppercase bg-primary px-7 py-3 rounded-xl text-white text-2xl font-bold w-fit mx-auto
                      lg:w-full lg:text-center"
        >
          Quick Enquiry
        </p>

        <div className="lg:flex lg:flex-row-reverse lg:my-10 lg:gap-20">
          <div className="lg:flex lg:flex-col-reverse">
            <EnquiryDetails />
            <img src="images/contact/contact.svg" alt="" className="mx-auto" />
          </div>

          <Enquiry />
        </div>
      </div>
    </div>
  );
};

export default Contact;
