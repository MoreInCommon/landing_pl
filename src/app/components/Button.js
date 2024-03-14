import { twMerge } from "tailwind-merge";

const Button = ({ children, classes = "", ...props }) => (
  <button
    {...props}
    className={twMerge(
      "py-[6px] px-4 pl-6 flex items-center justify-center gap-4 rounded-full text-white text-[20px] bg-brand-blue hover:bg-hover-blue transition-all leading-none" +
        " " +
        classes
    )}
  >
    {children}
  </button>
);

export default Button;
