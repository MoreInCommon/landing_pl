"use client";
import { useState } from "react";
import Button from "@/app/components/Button";
import CenteredSection from "@/app/components/CenteredSection";
import CenterContainer from "@/app/components/CenterContainer";
import SegmentsSvg from "@/app/components/SegmentsSvg";
import AgreementPage from "@/app/components/AgreementPage";
import {
  calculateResult1,
  calculateResult2,
  calculateResult3,
  calculateResult4,
  calculateResult5,
  calculateResult6,
  calculateResult7,
  matchMaxIndex,
} from "@/app/quizUtils";

const p = [
  {
    type: "agreement",
    questions: [
      {
        text: "Młodzi ludzie dzisiaj nie mają wystarczającego szacunku dla tradycyjnych brytyjskich wartości.",
        value: null,
      },
      {
        text: "Osoby łamiące prawo powinny otrzymywać surowsze kary.",
        value: null,
      },
      {
        text: "Rząd powinien przeprowadzać redystrybucję dochodów od osób lepiej sytuowanych do tych, którzy mają gorzej.",
        value: null,
      },
    ],
  },
  {
    type: "agreement",
    questions: [
      {
        text: "Młodzi ludzie dzisiaj nie mają wystarczającego szacunku dla tradycyjnych brytyjskich wartości.",
        value: null,
      },
      {
        text: "Osoby łamiące prawo powinny otrzymywać surowsze kary.",
        value: null,
      },
      {
        text: "Rząd powinien przeprowadzać redystrybucję dochodów od osób lepiej sytuowanych do tych, którzy mają gorzej.",
        value: null,
      },
    ],
  },
];

export default function QuizStart() {
  const [currentPageIndex, setCurrentPageIndex] = useState(null);
  const [pages, setPages] = useState(p);
  const currentPage = pages[currentPageIndex || 0];
  const [errors, setErrors] = useState([]);

  // const res1 = calculateResult1([6, 1, 1, 1, 6, 1, 6, 6, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  // const res2 = calculateResult2([6, 1, 1, 1, 6, 1, 6, 6, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  // const res3 = calculateResult3([6, 1, 1, 1, 6, 1, 6, 6, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  // const res4 = calculateResult4([6, 1, 1, 1, 6, 1, 6, 6, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  // const res5 = calculateResult5([6, 1, 1, 1, 6, 1, 6, 6, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  // const res6 = calculateResult6([6, 1, 1, 1, 6, 1, 6, 6, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  // const res7 = calculateResult7([6, 1, 1, 1, 6, 1, 6, 6, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  const res1 = calculateResult1(Array(20).fill(1));
  const res2 = calculateResult2(Array(20).fill(1));
  const res3 = calculateResult3(Array(20).fill(1));
  const res4 = calculateResult4(Array(20).fill(1));
  const res5 = calculateResult5(Array(20).fill(1));
  const res6 = calculateResult6(Array(20).fill(1));
  const res7 = calculateResult7(Array(20).fill(1));
  console.log(matchMaxIndex([res1, res2, res3, res4, res5, res6, res7]));
  // console.log(calculateResult5([1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]));
  // console.log(calculateResult1(Array(20).fill(2)));
  // console.log(calculateResult6(Array(20).fill(1)));

  // pamietac zeby na koniec dodac + 1 do wszystkich odpowiedzi

  const allQuestionsAnswered = currentPage.questions.every((question) => question.value !== null);
  const totalQuestionsNumber = pages.reduce((acc, page) => acc + page.questions.length, 0);
  const totalAnsweredQuestionsNumber = pages.reduce((acc, page) => {
    return acc + page.questions.filter((question) => question.value !== null).length;
  }, 0);

  const isFinalPage = currentPageIndex === pages.length - 1;
  const isFirstPage = currentPageIndex === 0;

  const setAnswer = (index, qIndex) => {
    setErrors([]);
    const newPages = [...pages];
    newPages[currentPageIndex].questions[qIndex].value = index;
    setPages(newPages);
  };

  const setNextPage = () => {
    if (allQuestionsAnswered) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
    if (!allQuestionsAnswered) {
      // set errors and find all indexes
      setErrors([
        ...errors,
        ...currentPage.questions
          .map((q, index) => (q.value === null ? index : -1))
          .filter((index) => index !== -1),
      ]);
    }
  };

  if (currentPageIndex === null) {
    return (
      <CenteredSection>
        <SegmentsSvg className="absolute top-[-5.375rem] right-[8rem] z-0" />
        <CenterContainer className="my-32">
          <h1 className="mb-6 text-h1 font-bold text-brand-darkBlue">QUIZ 7 segmentów</h1>
          <p className="text-[18px] text-brand-darkBlue">
            Przycisk poniżej przeniesie Cię do anonimowej ankiety, gdzie możesz odpowiedzieć na
            serię pytań (3-5 minut) na temat twoich przekonań i wartości, a nasz algorytm wskaże, do
            której z siedmiu grup najlepiej pasujesz.
          </p>
          <Button
            onClick={() => setCurrentPageIndex(0)}
            classes="bg-brand-darkBlue hover:bg-hover-blue m-auto mt-12 mb-20"
          >
            <div className="relative top-[1px]">Rozpocznij</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 11H17.17L13.59 7.41L15 6L21 12L15 18L13.59 16.59L17.17 13H3V11Z"
                fill="white"
                stroke="transparent"
                strokeWidth="0.5"
              />
            </svg>
          </Button>
          <p>
            * Wyniki quizu są najlepszym przybliżeniem na podstawie skróconej wersji ankiety
            Britains Choice. W procesie wypełniania tego quizu nie są zbierane żadne dane
            umożliwiające identyfikację osobistą (PII). Dane użytkowników nie są sprzedawane przez
            More in Common czy YouGov, ani nie będą przekazywane żadnym stronom trzecim. Kliknij
            tutaj, aby zapoznać się z naszą Polityką Prywatności.
          </p>
        </CenterContainer>
      </CenteredSection>
    );
  }
  return (
    <>
      <CenterContainer>
        <div className="flex flex-col items-end">
          <div>
            {totalAnsweredQuestionsNumber} / {totalQuestionsNumber}
          </div>
          <div
            className="h-2 w-full rounded-lg bg-[#DADDE1] overflow-hidden progress-bar relative"
            style={{ "--progress": totalAnsweredQuestionsNumber / totalQuestionsNumber }}
          />
        </div>
      </CenterContainer>
      <div className="max-w-[1200px] m-auto w-full pt-20">
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
        <AgreementPage questions={currentPage.questions} setAnswer={setAnswer} errors={errors} />
        <div className="flex justify-between items-center mt-10">
          {!isFirstPage && (
            <Button
              onClick={() => setCurrentPageIndex(currentPageIndex - 1)}
              classes="bg-transparent hover:bg-transparent text-[#858D9C] pl-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="rotate-180"
              >
                <path
                  d="M3 11H17.17L13.59 7.41L15 6L21 12L15 18L13.59 16.59L17.17 13H3V11Z"
                  fill="#858D9C"
                  stroke="transparent"
                  strokeWidth="0.5"
                />
              </svg>
              <div className="relative top-[1px]">Poprzednie pytanie</div>
            </Button>
          )}
          {!isFinalPage && (
            <Button
              onClick={() => setNextPage()}
              classes="bg-brand-darkBlue hover:bg-hover-blue ml-auto"
            >
              <div className="relative top-[1px]">Następne pytanie</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 11H17.17L13.59 7.41L15 6L21 12L15 18L13.59 16.59L17.17 13H3V11Z"
                  fill="white"
                  stroke="transparent"
                  strokeWidth="0.5"
                />
              </svg>
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
