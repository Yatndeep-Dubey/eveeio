import { OperateList } from "../../props";

const Operate = () => {
  return (
    <section>
      <p className="bg-primary px-7 py-3 w-fit mx-auto rounded-xl text-white text-xl my-10 shadow">
        HOW DO WE OPERATE
      </p>

      <img src="images/franchise/kid.svg" alt="" className="my-10 md:w-full" />

      <div className="hidden lg:flex p-5 gap-5">
        <OperateList
          index="1"
          text="E-commerce, logistics, delivery companies like Amazon & commuters need two wheelers on rental basis."
        />
        <OperateList
          index="2"
          text="They search on Google to find nearby two wheeler rental service provider. This is where they find us!"
        />
        <OperateList
          index="3"
          text="We manage 125+ Electric Scooters​. We rent our scooters to these businesses & commuters."
        />
      </div>
    </section>
  );
};

export default Operate;
