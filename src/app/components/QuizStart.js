"use client";
import { useState } from "react";
import Button from "@/app/components/Button";
import CenteredSection from "@/app/components/CenteredSection";
import CenterContainer from "@/app/components/CenterContainer";
import SegmentsSvg from "@/app/components/SegmentsSvg";
import AgreementPage from "@/app/components/AgreementPage";

const pages = [
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
  const currentPage = pages[currentPageIndex || 0];
  const allQuestionsAnswered = currentPage.questions.every((question) => question.value !== null);
  const totalQuestionsNumber = pages.reduce((acc, page) => acc + page.questions.length, 0);
  const totalAnsweredQuestionsNumber = pages.reduce((acc, page) => {
    return acc + page.questions.filter((question) => question.value !== null).length;
  }, 0);

  const isFinalPage = currentPageIndex === pages.length - 1;
  const isFirstPage = currentPageIndex === 0;

  const setAnswer = (index, value) => {
    console.log(index);
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
            Britain's Choice. W procesie wypełniania tego quizu nie są zbierane żadne dane
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
      <div className="max-w-[1200px] m-auto w-full">
        <AgreementPage questions={currentPage.questions} setAnswer={setAnswer} />
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
              onClick={() => setCurrentPageIndex(currentPageIndex + 1)}
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
