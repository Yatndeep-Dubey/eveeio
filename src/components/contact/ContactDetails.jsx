import { ContactDetail } from "../../props";

const ContactDetails = () => {
  return (
    <section className="flex flex-col items-center gap-10 my-10 lg:flex-row lg:justify-center">
      <ContactDetail
        title="OUR ADDRESS"
        detail="Lorem enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper veli libero urna, feugiat."
        icon="images/contact/location.svg"
      />

      <ContactDetail
        title="CONTACT US"
        detail="Customer Care:+91-911-365-1818 Claims & Support: +91-953-853-1818"
        icon="images/contact/call.svg"
      />

      <ContactDetail
        title="OUR EMAIL"
        detail="info@eveeio.com / eveeio@gmail.com"
        icon="images/contact/email.svg"
      />
    </section>
  );
};

export default ContactDetails;
