const Button = ({ children, classes = "", ...props }) => (
  <button
    {...props}
    className={
      "py-[6px] px-4 flex items-center justify-center gap-2 rounded-full text-white text-[18px] bg-brand-blue hover:bg-hover-blue transition-all leading-none" +
      " " +
      classes
    }
  >
    {children}
  </button>
);

export default Button;
