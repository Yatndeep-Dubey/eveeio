const BlogFilter = (props) => {
  return (
    <p
      className={`${
        props.active === props.filter && `text-primary underline`
      } cursor-pointer`}
    >
      {props.filter}
    </p>
  );
};

export default BlogFilter;
