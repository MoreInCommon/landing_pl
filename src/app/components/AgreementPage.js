import React, { useState } from "react";

const AgreementPage = ({ questions, setAnswer, errors, answersOrder }) => {
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
  console.log(answersOrder.length + 2);
  return (
    <div className="mt-4">
      <h4 className="text-[18px] font-bold mb-10">
        W jakim stopniu zgadza się Pan/i lub nie zgadza z poniższymi stwierdzeniami?
      </h4>
      <div className={`w-full grid grid-cols-${answersOrder.length + 2} mt-2`}>
        <div className="col-span-2 border-b b-[#E4E4E4]"></div>
        {answersOrder.map((a, i) => (
          <div key={i} className="p-4 text-center border-b b-[#E4E4E4]">
            {a}
          </div>
        ))}
        {questions.map((q, i) => (
          <React.Fragment key={i}>
            <div
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(null)}
              className={`col-span-2 p-4 border-b b-[#E4E4E4] transition-all ${hovered === i ? "bg-[#F8F8F9]" : ""} ${errors.includes(i) ? "bg-[#FDF7E6]" : ""}`}
            >
              {q.text}
            </div>
            {answersOrder.map((a, index) => (
              <div
                key={index}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={() => handleMouseLeave(null)}
                onClick={() => handleAnswer(index, i)}
                className={`flex items-center cursor-pointer justify-center p-4 border-b b-[#E4E4E4] transition-all ${hovered === i ? "bg-[#F8F8F9]" : ""} hover:bg-[#DADDE1] ${errors.includes(i) ? "bg-[#FDF7E6]" : ""}`}
              >
                <input
                  checked={q.value === index}
                  onChange={() => handleAnswer(index, i)}
                  type="radio"
                  className="h-6 w-6 cursor-pointer"
                />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AgreementPage;
