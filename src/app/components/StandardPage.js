import React from "react";

const StandardPage = ({ questions, setAnswer }) => {
  const handleAnswer = (index, qIndex) => {
    setAnswer(index, qIndex);
  };

  return (
    <>
      {questions.map((q, i) => (
        <React.Fragment key={i}>
          <h4 className="text-[18px] font-bold mb-2 text-center">{q.text}</h4>
          <div
            className={`w-full grid grid-cols-${q.answers.length} mt-2 mb-10`}
            style={{ gridTemplateColumns: `repeat(${q.answers.length}, minmax(0, 1fr))` }}
          >
            {q.answers.map((a, index) => (
              <div
                key={index}
                onClick={() => handleAnswer(index, i)}
                className={`flex flex-col items-center cursor-pointer justify-center p-4`}
              >
                <span className="text-[16px] text-center font-medium">{a}</span>
                <input
                  type="radio"
                  className="h-6 w-6 cursor-pointer text-center"
                  checked={q.value === index}
                  onChange={() => handleAnswer(index, i)}
                />
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default StandardPage;
