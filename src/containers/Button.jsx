const Button = ({ children, customClass }) => {
  return (
    <button
      type="submit"
      className={`text-white bg-primary py-2 px-5 rounded-full ${customClass}`}
    >
      {children}
    </button>
  );
};

export default Button;
