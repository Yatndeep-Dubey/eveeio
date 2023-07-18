const Blog = (props) => {
  return (
    <div className="flex flex-col">
      <img
        src={props.blogImg}
        alt="blog img"
        className="!h-[19.93rem] !w-[17.81rem] shrink-0"
      />
      <div className="flex justify-between my-3">
        <button className="border rounded-full px-5 border-blackish">
          Article
        </button>
        <p className="text-grayish">
          {/* this date has to be pulled through backend */}
          {/* entering current date as dummy data */}
          {new Date().toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>
      <p className="text-2xl">{props.title}</p>
    </div>
  );
};

export default Blog;
