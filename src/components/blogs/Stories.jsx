import { useState } from "react";
import { Blog, BlogFilter } from "../../props";

const Stories = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className="lg:my-16 p-10" id="stories">
      <p className="text-2xl">Latest Stories</p>
      <div className="my-5">
        <ul className="flex overflow-x-scroll scrollbar scrollbar-none gap-10">
          <li
            onClick={() => {
              setActiveFilter("All");
            }}
          >
            <BlogFilter filter="All" active={activeFilter} />
          </li>
          <li
            className="shrink-0"
            onClick={() => {
              setActiveFilter("Career & growth");
            }}
          >
            <BlogFilter filter="Career & growth" active={activeFilter} />
          </li>
          <li
            onClick={() => {
              setActiveFilter("Conversations");
            }}
          >
            <BlogFilter filter="Conversations" active={activeFilter} />
          </li>
          <li
            onClick={() => {
              setActiveFilter("Process");
            }}
          >
            <BlogFilter filter="Process" active={activeFilter} />
          </li>
          <li
            onClick={() => {
              setActiveFilter("Product");
            }}
          >
            <BlogFilter filter="Product" active={activeFilter} />
          </li>
        </ul>
      </div>
      {/* blogs cards */}
      <section className="flex flex-wrap justify-center gap-10 my-10">
        <Blog
          blogImg="/images/blogs/scooter.svg"
          title="All your question..."
        />
        <Blog
          blogImg="/images/blogs/scooty.svg"
          title="Redefine Urban Mobility"
        />
        <Blog
          blogImg="/images/blogs/girl-with-car.svg"
          title="Redefine Urban Mobility"
        />
        <Blog
          blogImg="/images/blogs/house.svg"
          title="Redefine Urban Mobility"
        />
        <Blog
          blogImg="/images/blogs/cubes.svg"
          title="Redefine Urban Mobility"
        />
        <Blog
          blogImg="/images/blogs/sunset.svg"
          title="Redefine Urban Mobility"
        />
      </section>
      <div className="w-fit mx-auto">
        <button className="bg-secondary text-primary font-bold uppercase px-5 py-2 rounded-xl shadow-xl">
          More Blogs
        </button>
      </div>
    </section>
  );
};

export default Stories;
