import { twMerge } from "tailwind-merge";

const ButtonText = ({ children, classes = "", ...props }) => (
  <button
    {...props}
    className={twMerge(
      "py-[6px] px-4 flex pl-6 items-center justify-center gap-2 rounded-full text-themeableColors-darkBlue text-[20px] bg-transparent hover:bg-transparent transition-all leading-none" +
        " " +
        classes
    )}
  >
    {children}
  </button>
);

export default ButtonText;
