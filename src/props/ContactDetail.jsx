const ContactDetail = ({ title, detail, icon }) => {
  return (
    <div className="border-2 border-secondary w-80 h-96 rounded-xl flex flex-col items-center justify-evenly p-7
                    lg:w-72">
      <p className="uppercase bg-primary px-7 py-3 rounded-xl text-white text-2xl font-bold">
        {title}
      </p>

      <img src={icon} alt="" />

      <p className="text-center text-lg">{detail}</p>
    </div>
  );
};

export default ContactDetail;
