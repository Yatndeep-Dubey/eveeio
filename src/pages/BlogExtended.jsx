import Hero from "../containers/Hero";
import { Article, Comment } from "../components/blogs";

const BlogExtended = () => {
  return (
    <div>
      <Hero customClass="flex h-52 items-center pt-44 px-5 mb-32 lg:items-start lg:h-80">
        <img src="images/hero/joining.svg" className="h-48 lg:h-64" alt="" />
        <p className="text-2xl text-secondary font-bold lg:text-5xl">
          BLOGS &gt;
        </p>
      </Hero>

      <Article />

      <div className="lg:p-10">
        <Comment />
      </div>
    </div>
  );
};

export default BlogExtended;
