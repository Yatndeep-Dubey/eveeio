const Hero = () => {
  return (
    <section className="mb-24">
      {/* mobile version */}
      <div className="bg-hero h-[75vh] pt-36 lg:hidden">
        <p className="text-secondary text-2xl text-center font-bold">
          WHO ARE WE ?
        </p>
        <img
          src="/images/hero/phone-with-scooter.svg"
          alt="phone with scooter"
        />
      </div>

      {/* for larger screen */}
      <div className="hidden items-center bg-hero h-[47rem] pt-56 mb-44 lg:flex">
        <div className="max-w-2xl pl-10">
          <p className="text-5xl text-secondary font-bold">WHO ARE WE?</p>
          <p className="text-lg text-white my-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat. <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At itaque
            recusandae ipsam accusamus quasi fugiat perspiciatis nulla omnis
            quod, in delectus, harum repellendus. Veritatis vitae adipisci, id,
            sunt harum ipsa dolorum, quisquam dolores laboriosam sequi
            asperiores ad accusantium dolore libero quia architecto. Ex pariatur
            fuga nostrum beatae, quas debitis quod minus dolore?
          </p>
        </div>

        <img
          src="images/hero/phone-with-scooter.svg"
          alt="phone with scooter"
          className="h-[50rem] w-fit"
        />
      </div>
    </section>
  );
};

export default Hero;
