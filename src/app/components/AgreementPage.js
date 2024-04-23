import { useState } from "react";

const AgreementPage = ({ questions, setAnswer }) => {
  const [hovered, setHovered] = useState(null);
  const [errors, setErrors] = useState([]);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };
  const handleMouseLeave = (e) => {
    setHovered(null);
  };
  console.log(hovered);

  const handleAnswer = (index, answer) => {
    setErrors([]);
  };

  return (
    <div className="mt-20">
      {errors.length > 0 && (
        <div className="bg-[#FDF7E7] p-6 flex gap-6 items-center mb-6">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2040_16840)">
              <circle cx="12" cy="12" r="12" fill="#F2AD0E" />
              <path
                d="M10.844 14.352L10.716 6.032H13.452L13.308 14.352H10.844ZM12.076 15.344C12.4707 15.344 12.8067 15.4827 13.084 15.76C13.3613 16.0267 13.5 16.3627 13.5 16.768C13.5 17.1627 13.3613 17.4987 13.084 17.776C12.8067 18.0427 12.4707 18.176 12.076 18.176C11.6813 18.176 11.3453 18.0427 11.068 17.776C10.8013 17.4987 10.668 17.1627 10.668 16.768C10.668 16.3627 10.8013 16.0267 11.068 15.76C11.3453 15.4827 11.6813 15.344 12.076 15.344Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2040_16840">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span>Prosimy o zaznaczenie wszystkich odpowiedzi</span>
        </div>
      )}
      <h4 className="text-[18px] font-bold mb-10">
        W jakim stopniu zgadzasz się lub nie zgadzasz z następującymi stwierdzeniami?
      </h4>
      <div class="w-full grid grid-cols-7 mt-2">
        <div class="col-span-2 border-b b-[#E4E4E4]"></div>
        <div className="p-4 text-center border-b b-[#E4E4E4]">Zdecydowanie zgadzam się</div>
        <div className="p-4 text-center border-b b-[#E4E4E4]">Raczej zgadzam się</div>
        <div className="p-4 text-center border-b b-[#E4E4E4]">Ani się zgadzam, ani nie zgadzam</div>
        <div className="p-4 text-center border-b b-[#E4E4E4]">Raczej się nie zgadzam</div>
        <div className="p-4 text-center border-b b-[#E4E4E4]">Zdecydowanie się nie zgadzam</div>
        {questions.map((q, i) => (
          <>
            <div
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(null)}
              class={`col-span-2 p-4 border-b b-[#E4E4E4] transition-all ${hovered === i ? "bg-[#F8F8F9]" : ""} ${errors.includes(i) ? "bg-[#FDF7E6]" : ""}`}
            >
              {q.text}
            </div>
            <div
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(null)}
              className={`flex items-center justify-center p-4 border-b b-[#E4E4E4] transition-all ${hovered === i ? "bg-[#F8F8F9]" : ""} hover:bg-[#DADDE1] ${errors.includes(i) ? "bg-[#FDF7E6]" : ""}`}
            >
              <span>*</span>
            </div>
            <div>*</div>
            <div>*</div>
            <div>*</div>
            <div>*</div>
          </>
        ))}
      </div>
    </div>
  );
};

export default AgreementPage;
