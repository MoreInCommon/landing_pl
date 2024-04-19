const Notification = ({ message, setShowSuccess }) => {
  return (
    <div className="fixed top-32 right-10 max-w-[90%] bg-white rounded-[5px] shadow-tile-shadow border border-brand-darkGreen px-6 py-[16px] z-50">
      <div className="flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clipPath="url(#clip0_2110_8133)">
            <circle cx="12" cy="12" r="12" fill="#009E59" />
            <path
              d="M9.59844 14.9246L6.44844 11.7746L5.39844 12.8246L9.59844 17.0246L18.5984 8.02461L17.5484 6.97461L9.59844 14.9246Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2110_8133">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h5 className="text-h5 font-bold text-black leading-[16px] relative top-[1px]">
          {message}
        </h5>
        <div className="cursor-pointer flex items-center relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            onClick={() => setShowSuccess(false)}
          >
            <path
              d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Notification;
