import { useState } from "react";

const AgreementPage = ({ questions, setAnswer, errors }) => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };
  const handleMouseLeave = () => {
    setHovered(null);
  };

  const handleAnswer = (index, qIndex) => {
    setAnswer(index, qIndex);
  };

  return (
    <div className="mt-4">
      <h4 className="text-[18px] font-bold mb-10">
        W jakim stopniu zgadzasz się lub nie zgadzasz z następującymi stwierdzeniami?
      </h4>
      <div className="w-full grid grid-cols-7 mt-2">
        <div className="col-span-2 border-b b-[#E4E4E4]"></div>
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
              className={`col-span-2 p-4 border-b b-[#E4E4E4] transition-all ${hovered === i ? "bg-[#F8F8F9]" : ""} ${errors.includes(i) ? "bg-[#FDF7E6]" : ""}`}
            >
              {q.text}
            </div>
            <div
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(null)}
              className={`flex items-center justify-center p-4 border-b b-[#E4E4E4] transition-all ${hovered === i ? "bg-[#F8F8F9]" : ""} hover:bg-[#DADDE1] ${errors.includes(i) ? "bg-[#FDF7E6]" : ""}`}
            >
              <input
                checked={q.value === 0}
                onChange={() => handleAnswer(0, i)}
                type="radio"
                className="h-6 w-6"
              />
            </div>
            <div
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(null)}
              className={`flex items-center justify-center p-4 border-b b-[#E4E4E4] transition-all ${hovered === i ? "bg-[#F8F8F9]" : ""} hover:bg-[#DADDE1] ${errors.includes(i) ? "bg-[#FDF7E6]" : ""}`}
            >
              <input
                checked={q.value === 1}
                onChange={() => handleAnswer(1, i)}
                type="radio"
                className="h-6 w-6"
              />
            </div>
            <div
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(null)}
              className={`flex items-center justify-center p-4 border-b b-[#E4E4E4] transition-all ${hovered === i ? "bg-[#F8F8F9]" : ""} hover:bg-[#DADDE1] ${errors.includes(i) ? "bg-[#FDF7E6]" : ""}`}
            >
              <input
                checked={q.value === 2}
                onChange={() => handleAnswer(2, i)}
                type="radio"
                className="h-6 w-6"
              />
            </div>
            <div
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(null)}
              className={`flex items-center justify-center p-4 border-b b-[#E4E4E4] transition-all ${hovered === i ? "bg-[#F8F8F9]" : ""} hover:bg-[#DADDE1] ${errors.includes(i) ? "bg-[#FDF7E6]" : ""}`}
            >
              <input
                checked={q.value === 3}
                onChange={() => handleAnswer(3, i)}
                type="radio"
                className="h-6 w-6"
              />
            </div>
            <div
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(null)}
              className={`flex items-center justify-center p-4 border-b b-[#E4E4E4] transition-all ${hovered === i ? "bg-[#F8F8F9]" : ""} hover:bg-[#DADDE1] ${errors.includes(i) ? "bg-[#FDF7E6]" : ""}`}
            >
              <input
                checked={q.value === 4}
                onChange={() => handleAnswer(4, i)}
                type="radio"
                className="h-6 w-6"
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default AgreementPage;
