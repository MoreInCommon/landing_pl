"use client";
import React, { useState } from "react";
import Button from "@/app/components/Button";
import ButtonText from "@/app/components/ButtonText";
import { storyblokEditable } from "@storyblok/react";
import CenterContainer from "@/app/components/CenterContainer";
import Image from "next/image";
import Modal from "@/app/components/Modal";

const ClimateQuiz = ({ blok }) => {
  const totalQuestionsNumber = blok?.questions?.length || 0;
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const isFirstPage = currentPageIndex === 0;
  const [answers, setAnswers] = useState([]);
  const allAnswered = currentPageIndex === totalQuestionsNumber;
  const totalAnsweredQuestionsNumber = answers.length;
  const currentAnswerIndex = answers[currentPageIndex]?.index;
  const currentAnswerCorrect =
    currentAnswerIndex !== undefined && answers[currentPageIndex]?.correct;
  const handleAnswer = (index, a) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentPageIndex] = {
        correct: a.correct,
        index,
      };
      return newAnswers;
    });
  };

  const totalCorrectAnswers = answers.filter((a) => a.correct).length;

  const summaryColor = {
    good: {
      color: "#009E59",
      background: "#E9F6EE",
    },
    average: {
      color: "#FFC000",
      background: "#FFF2CC",
    },
    bad: {
      color: "#F20E0E",
      background: "#FDE6E6",
    },
  };

  const summaryColorType =
    totalCorrectAnswers / totalQuestionsNumber > 0.8
      ? "good"
      : totalCorrectAnswers / totalQuestionsNumber > 0.5
        ? "average"
        : "bad";
  const colors = summaryColor[summaryColorType];
  return (
    <div
      className="max-w-full m-auto px-[140px] max-lg:px-10 max-md:px-6 max-sm:px-4"
      {...storyblokEditable(blok)}
    >
      <div className="bg-green-light p-8 mt-12 text-black text-center mb-10 relative max-sm:p-5">
        <Image
          src={"/MIC_ikona.png"}
          width={117}
          height={114}
          alt=""
          className="absolute top-10 left-12 max-lg:hidden"
        />
        <h4 className="text-h4 font-bold mb-2 text-brand-darkGreen flex items-center justify-center relative">
          {blok.title}
        </h4>
        <p className="text-bodyRegular m-auto max-w-[600px] px-10 max-sm:px-0 relative">
          {blok.desc}
        </p>
        <Button
          type="submit"
          onClick={() => setShowModal(true)}
          classes="py-[14px] m-auto px-8 bg-brand-darkGreen text-white text-[21px] leading-[16px] mt-4 min-w-[133px]"
        >
          <div className="relative top-[1px]">{blok.button}</div>
        </Button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} style={{ maxWidth: 850 }}>
        <div className="bg-themeGreen">
          <div className="bg-white flex items-center justify-between border-solid border-b border-[#DADDE1] mx-[-20px] px-8 pb-4">
            <span className="text-black text-[20px]">Co Polki i Polacy myślą o klimacie?</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="cursor-pointer"
              onClick={() => setShowModal(null)}
            >
              <path
                d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                fill="black"
              />
            </svg>
          </div>
          {allAnswered ? (
            <div className="flex flex-col mt-8 mb-10 items-center mx-[-20px]">
              <svg
                width="136"
                height="136"
                viewBox="0 0 136 136"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="OK">
                  <g id="Ellipse 7" filter="url(#filter0_d_114_8667)">
                    <circle
                      cx="68"
                      cy="68"
                      r="50.375"
                      stroke="#009E59"
                      strokeWidth="3.25"
                      shapeRendering="crispEdges"
                    />
                  </g>
                  <circle id="Ellipse 8" cx="68" cy="68.002" r="45.5" fill="#009E59" />
                  <g id="thumb_up">
                    <mask
                      id="mask0_114_8667"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="42"
                      y="42"
                      width="52"
                      height="52"
                    >
                      <rect id="Bounding box" x="42" y="42" width="52" height="52" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_114_8667)">
                      <path
                        id="thumb_up_2"
                        d="M80.9987 87.5013H57.1654V59.3346L72.332 44.168L75.0404 46.8763C75.2931 47.1291 75.5008 47.4721 75.6633 47.9055C75.8258 48.3388 75.907 48.7541 75.907 49.1513V49.9096L73.5237 59.3346H87.4987C88.6543 59.3346 89.6654 59.768 90.532 60.6346C91.3987 61.5013 91.832 62.5124 91.832 63.668V68.0013C91.832 68.2541 91.7959 68.5249 91.7237 68.8138C91.6515 69.1027 91.5793 69.3735 91.507 69.6263L85.007 84.9013C84.682 85.6235 84.1404 86.2374 83.382 86.743C82.6237 87.2485 81.8293 87.5013 80.9987 87.5013ZM61.4987 83.168H80.9987L87.4987 68.0013V63.668H67.9987L70.9237 51.7513L61.4987 61.1763V83.168ZM57.1654 59.3346V63.668H50.6654V83.168H57.1654V87.5013H46.332V59.3346H57.1654Z"
                        fill="white"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_114_8667"
                    x="0"
                    y="0"
                    width="136"
                    height="136"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="8" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0.333536 0 0 0 0 0.187878 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_114_8667"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_114_8667"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              {totalCorrectAnswers / answers.length > 0.5 && (
                <h4 className="font-bold text-[32px]">Gratulacje!</h4>
              )}
              <p className="font-medium text-[24px] mb-1 ">Twój wynik testu to:</p>
              <div
                className={`mb-8 p-3 mt-1 text-center mx-[-64px] font-bold text-[44px] w-full bg-[${colors.background}]`}
              >
                {summaryColorType === "good" ? (
                  <span className={`relative top-[0.3rem] text-[#009E59]`}>
                    {totalCorrectAnswers} / {answers.length}
                  </span>
                ) : summaryColorType === "average" ? (
                  <span className={`relative top-[0.3rem] text-[#FFC000]`}>
                    {totalCorrectAnswers} / {answers.length}
                  </span>
                ) : (
                  <span className={`relative top-[0.3rem] text-[#F20E0E]`}>
                    {totalCorrectAnswers} / {answers.length}
                  </span>
                )}
              </div>
              <p className="px-8">
                Dziękujemy za Twój udział w teście. Mamy nadzieję, że mogłeś/mogłaś dowiedzieć się
                czegoś nowego. Jeśli masz jakieś uwagi lub pytania, napisz do nas:{" "}
                <a className="underline  text-brand-darkBlue" href="mailto:polska@moreincommon.com">
                  polska@moreincommon.com
                </a>
              </p>
            </div>
          ) : (
            <>
              <CenterContainer>
                <div className="flex flex-col items-end mt-8 mb-4">
                  <div
                    className="h-2 w-full rounded-lg bg-[#DADDE1] overflow-hidden progress-bar relative"
                    style={{ "--progress": totalAnsweredQuestionsNumber / totalQuestionsNumber }}
                  />
                  <div className="mt-1 text-[12px] text-[#6B6B6B]">
                    {totalAnsweredQuestionsNumber} / {totalQuestionsNumber}
                  </div>
                </div>
              </CenterContainer>
              {blok?.questions?.map((q, index) => {
                const answers = [
                  {
                    text: q.answer_1,
                    correct: q.correct_answer === "1",
                  },
                  {
                    text: q.answer_2,
                    correct: q.correct_answer === "2",
                  },
                  {
                    text: q.answer_3,
                    correct: q.correct_answer === "3",
                  },
                ];
                return (
                  <>
                    <div
                      key={index}
                      className="px-[65px] max-lg-px[25px] max-sm:px-0"
                      {...storyblokEditable(q)}
                      style={{ display: currentPageIndex === index ? "block" : "none" }}
                    >
                      <h4 className="text-[18px] font-bold mb-2">{q.question}</h4>
                      <div className={`px-4 flex flex-col max-sm:px-0`}>
                        {answers.map((a, index) => (
                          <div
                            key={index}
                            onClick={() => handleAnswer(index, a)}
                            className={`flex items-center cursor-pointer p-4 gap-4 ${currentAnswerIndex !== index ? "" : currentAnswerIndex === index && a.correct ? "bg-[#E9F6EE]" : "bg-[#FDE6E6]"}`}
                          >
                            <input
                              type="radio"
                              className="h-6 w-6 min-w-6 cursor-pointer"
                              style={{
                                accentColor: "currentColor",
                                color:
                                  currentAnswerIndex === index && a.correct ? "#03641b" : "#DF3326",
                              }}
                              checked={currentAnswerIndex === index}
                              onChange={() => handleAnswer(index, a)}
                            />
                            <span className="text-[16px] relative top-[0.1rem]">{a.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {answers?.[currentAnswerIndex] && (
                      <div
                        className={`flex px-3 my-4 p-4 ${currentAnswerCorrect ? "bg-[#E9F6EE]" : "bg-[#FDE6E6]"} gap-3 items-start`}
                        style={{ display: currentPageIndex === index ? "flex" : "none" }}
                      >
                        <div className="w-[24px] h-[24px]">
                          {currentAnswerCorrect ? (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="OK" clipPath="url(#clip0_114_7916)">
                                <circle id="Ellipse 7" cx="12" cy="12" r="12" fill="#009E59" />
                                <path
                                  id="Vector"
                                  d="M9.59844 14.9246L6.44844 11.7746L5.39844 12.8246L9.59844 17.0246L18.5984 8.02461L17.5484 6.97461L9.59844 14.9246Z"
                                  fill="white"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_114_7916">
                                  <rect width="24" height="24" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          ) : (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="WRONG" clipPath="url(#clip0_114_8313)">
                                <circle id="Ellipse 7" cx="12" cy="12" r="12" fill="#F20E0E" />
                                <path
                                  id="Vector"
                                  d="M17.25 7.8075L16.1925 6.75L12 10.9425L7.8075 6.75L6.75 7.8075L10.9425 12L6.75 16.1925L7.8075 17.25L12 13.0575L16.1925 17.25L17.25 16.1925L13.0575 12L17.25 7.8075Z"
                                  fill="white"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_114_8313">
                                  <rect width="24" height="24" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          )}
                        </div>
                        <div>
                          <p className="text-[16px]">
                            {currentAnswerCorrect ? (
                              <span className="font-medium">Dobra odpowiedź!</span>
                            ) : (
                              <span className="font-medium">Błędna odpowiedź.</span>
                            )}{" "}
                            {q.comment}
                          </p>
                        </div>
                      </div>
                    )}
                  </>
                );
              })}
            </>
          )}
          <div className="flex justify-between items-center border-t border-[#DADDE1] mx-[-20px] px-8 pt-4 mt-4 max-sm:px-4">
            {!isFirstPage && (
              <ButtonText
                onClick={() => {
                  setCurrentPageIndex(currentPageIndex - 1);
                }}
                classes="p-0 text-[16px] text-brand-darkGreen"
              >
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="rotate-180 max-sm:hidden"
                  >
                    <mask
                      id="mask0_188_1274"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" transform="matrix(-1 0 0 1 24 0)" fill="white" />
                    </mask>
                    <g mask="url(#mask0_188_1274)">
                      <path
                        d="M14.8462 17.6534L20.5 11.9995L14.8462 6.3457L13.7923 7.39953L17.6424 11.2496H3.50005V12.7495H17.6424L13.7923 16.5995L14.8462 17.6534Z"
                        fill="#03641B"
                      />
                    </g>
                  </svg>
                  <span className="relative top-[.083rem] ">Poprzednie pytanie</span>
                </div>
              </ButtonText>
            )}
            {allAnswered ? (
              <Button
                onClick={() => {
                  setShowModal(false);
                }}
                classes="py-[6px] px-8 bg-themeableColors-darkBlue text-white text-[16px] leading-[16px] min-w-[133px] cursor-pointer disabled:cursor-not-allowed disabled:bg-[#858D9C] disabled:text-[#FFFFFF] disabled:hover:bg-[#858D9C] disabled:hover:text-[#FFFFFF]"
              >
                <span className="relative top-[1px]">Zakończ</span>
              </Button>
            ) : (
              <ButtonText
                onClick={() => {
                  setCurrentPageIndex(currentPageIndex + 1);
                }}
                classes="p-0 text-[16px] text-brand-darkGreen ml-auto disabled:text-[#858D9C]"
                disabled={answers[currentPageIndex] === undefined}
              >
                <div className="relative  flex items-center gap-1">
                  <span className="relative top-[.083rem] ">Następne pytanie </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="max-sm:hidden"
                  >
                    <mask
                      id="mask0_188_1274"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" transform="matrix(-1 0 0 1 24 0)" fill="white" />
                    </mask>
                    <g mask="url(#mask0_188_1274)">
                      <path
                        d="M14.8462 17.6534L20.5 11.9995L14.8462 6.3457L13.7923 7.39953L17.6424 11.2496H3.50005V12.7495H17.6424L13.7923 16.5995L14.8462 17.6534Z"
                        fill={answers[currentPageIndex] === undefined ? "#858D9C" : "#03641B"}
                      />
                    </g>
                  </svg>
                </div>
              </ButtonText>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ClimateQuiz;
