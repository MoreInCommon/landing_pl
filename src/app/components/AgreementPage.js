import React, { useState } from "react";

const AgreementPage = ({ questions, setAnswer, errors, answersOrder, alternateLabel }) => {
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
  const addedCols = alternateLabel ? 0 : 2;
  return (
    <div className="mt-4">
      <h4 className="text-[18px] font-bold mb-10">
        {alternateLabel ||
          "W jakim stopniu zgadza się Pan/i lub nie zgadza z poniższymi stwierdzeniami?"}
      </h4>
      <div className="w-full overflow-x-auto">
        <div
          className={`grid grid-cols-${answersOrder.length + addedCols} min-w-[800px]`}
          style={{
            gridTemplateColumns: `repeat(${answersOrder.length + addedCols}, minmax(0, 1fr))`,
          }}
        >
          {/* Header Row */}
          {!alternateLabel && (
            <div className="sticky left-0 col-span-2 bg-white border-b border-[#E4E4E4] z-20">
              {/* Empty div for alignment */}
            </div>
          )}
          {answersOrder.map((a, i) => (
            <div
              key={i}
              className="p-4 text-center border-b border-[#E4E4E4] max-sm:p-2 bg-white sticky top-0 z-10"
            >
              {a}
            </div>
          ))}

          {/* Questions and Answers Rows */}
          {questions.map((q, i) => (
            <React.Fragment key={i}>
              {/* Sticky Question Column */}
              {!alternateLabel && (
                <div
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={() => handleMouseLeave(null)}
                  className={`col-span-2 p-4 border-b border-[#E4E4E4] transition-all sticky left-0 bg-white z-10 ${hovered === i ? "bg-[#F8F8F9]" : ""} ${errors.includes(i) ? "bg-[#FDF7E6]" : ""}`}
                >
                  {q.text}
                </div>
              )}
              {answersOrder.map((a, index) => (
                <div
                  key={index}
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={() => handleMouseLeave(null)}
                  onClick={() => handleAnswer(index, i)}
                  className={`flex items-center cursor-pointer justify-center p-4 border-b border-[#E4E4E4] transition-all ${hovered === i ? "bg-[#F8F8F9]" : ""} hover:bg-[#DADDE1] ${errors.includes(i) ? "bg-[#FDF7E6]" : ""}`}
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
    </div>
  );
};

export default AgreementPage;
