import React from "react";

const ScalePage = ({ questions, setAnswer, pageText }) => {
  const handleAnswer = (index, qIndex) => {
    setAnswer(index, qIndex);
  };

  return (
    <>
      {pageText && <h4 className="text-[18px] font-bold mb-10">{pageText}</h4>}
      {questions.map((q, i) => (
        <React.Fragment key={i}>
          {q.text && <h4 className="text-[18px] font-bold mb-6">{q.text}</h4>}
          <div className="w-full grid grid-cols-10 mt-2 mb-10 max-sm:grid-cols-1 max-sm:gap-4 max-sm:mb-16">
            <div className="col-span-2 flex justify-center items-center max-sm:col-span-1 max-sm:text-[18px] max-sm:justify-start">
              {q.answers[0]}
            </div>
            {[1, 2, 3, 4, 5, 6].map((a, index) => (
              <div
                key={index}
                onClick={() => handleAnswer(index, i)}
                className={`flex flex-col items-center cursor-pointer justify-center p-4 max-sm:flex-row max-sm:justify-start`}
              >
                <span className="text-[22px] font-medium">{a}</span>
                <input
                  type="radio"
                  className="h-6 w-6 cursor-pointer ml-2 max-sm:ml-4"
                  checked={q.value === index}
                  onChange={() => handleAnswer(index, i)}
                />
              </div>
            ))}
            <div className="col-span-2 flex justify-center items-center max-sm:col-span-1 max-sm:text-[18px] max-sm:justify-start">
              {q.answers[1]}
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default ScalePage;
