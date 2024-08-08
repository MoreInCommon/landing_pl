"use client";
import { useState } from "react";
import { redirect } from "next/navigation";
import Button from "@/app/components/Button";
import CenteredSection from "@/app/components/CenteredSection";
import CenterContainer from "@/app/components/CenterContainer";
import SegmentsSvg from "@/app/components/SegmentsSvg";
import AgreementPage from "@/app/components/AgreementPage";
import StandardPage from "@/app/components/StandardPage";
import ScalePage from "@/app/components/ScalePage";
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
import Link from "next/link";

const p = [
  {
    type: "scale",
    pageText: null,
    questions: [
      {
        text: "Na skali 1 do 6 proszę ocenić, na ile następujące stwierdzenie pasuje do Pana/Pani: Na bieżąco śledzę wiadomości ze świata polityki.",
        answers: ["Wcale", "Bardzo"],
        value: null,
        realNumber: 10,
      },
      {
        text: "Proszę na skali od 1 do 6 ocenić w jakim stopniu zgadza się Pan/Pani z następującym stwierdzeniem: Wiele razy miałem/miałam poczucie, że ludzie, którzy podzielają te samo przekonania polityczne, co ja, są lepszymi ludźmi od innych. ",
        answers: ["Nie zgadzam się w ogóle", "Zgadzam się w pełni"],
        value: null,
        realNumber: 1,
      },
      {
        text: "Czy określił(a)by Pan(i) siebie jako osobę wierzącą?",
        answers: ["Zdecydowanie nie", "Zdecydowanie tak"],
        value: null,
        realNumber: 7,
      },
    ],
  },
  {
    type: "agreement",
    answersOrder: [
      "Zdecydowanie się nie zgadzam",
      "Nie zgadzam się",
      "Raczej się nie zgadzam",
      "Raczej się zgadzam",
      "Zgadzam się",
      "Zdecydowanie się zgadzam",
    ],
    questions: [
      {
        text: "Aby uporządkować sytuację w Polsce, potrzebujemy silnego przywódcy, który jest gotowy łamać istniejące zasady.",
        value: null,
        realNumber: 2,
      },
      {
        text: "Grupy lepsze powinny dominować nad grupami gorszymi. ",
        value: null,
        realNumber: 20,
      },
    ],
  },
  {
    type: "scale",
    pageText:
      "Na skali od 1 do 6 proszę zaznaczyć, która z poniższych wypowiedzi jest Panu(i) bliższa. ",
    questions: [
      {
        text: null,
        answers: [
          "Wśród istniejących partii politycznych jest taka, która dobrze reprezentuje moje poglądy i interesy.",
          "Wśród istniejących partii politycznych nie ma takiej, która dobrze reprezentuje moje poglądy i interesy.",
        ],
        value: null,
        realNumber: 3,
      },
      {
        text: null,
        answers: [
          "Patrzę z obawą na zachodzące na świecie zmiany.",
          "Patrzę z nadzieją na zachodzące na świecie zmiany.",
        ],
        value: null,
        realNumber: 4,
      },
      {
        text: null,
        answers: [
          "Nie mam żadnej kontroli nad tym jak przebiega moje życie.",
          "Mam pełną kontrolę nad tym jak przebiega moje życie.",
        ],
        value: null,
        realNumber: 5,
      },
      {
        text: null,
        answers: [
          "Ogólnie rzecz biorąc, czuję się nieszanowany/a i niedoceniany/a za to, co osiągnąłem/osiągnęłam w życiu.",
          "Ogólnie rzecz biorąc, czuję się szanowany/a i odpowiednio doceniany/a za to, co osiągnąłem/osiągnęłam w życiu.",
        ],
        value: null,
        realNumber: 8,
      },
    ],
  },
  {
    type: "scale",
    pageText: null,
    questions: [
      {
        text: "Ludzie różnią się swoimi poglądami na gospodarkę. Który z poniższych modeli jest Panu/Pani bliższy? ",
        answers: [
          "Model indywidualny. Model indywidualny zakłada, że obywatel płaci niższe podatki i we własnym zakresie opłaca opiekę lekarską, edukację i inne świadczenia (np. emerytalne).",
          "Model wspólnotowy. Model wspólnotowy zakłada zaś, że obywatel płaci państwu wyższe podatki i w zamian ma bezpłatną edukację, opiekę lekarską i inne świadczenia (np. emerytalne).",
        ],
        value: null,
        realNumber: 16,
      },
    ],
  },
  {
    type: "agreement",
    answersOrder: [
      "Zdecydowanie się zgadzam",
      "Zgadzam się",
      "Raczej się zgadzam",
      "Raczej się nie zgadzam",
      "Nie zgadzam się",
      "Zdecydowanie się nie zgadzam",
    ],
    questions: [
      {
        text: "Należy być lojalnym w stosunku do członków rodziny, nawet gdy zrobili coś złego.",
        value: null,
        realNumber: 17,
      },
      {
        text: "Uważam, że jest to moralnie złe, że dzieci bogatych ludzi mają znacząco lepszy start w życiu niż dzieci biednych ludzi.",
        value: null,
        realNumber: 18,
      },
      {
        text: "Czystość seksualna to ważna i cenna cnota człowieka.",
        value: null,
        realNumber: 6,
      },
    ],
  },
  {
    type: "agreement",
    answersOrder: [
      "Zdecydowanie się nie zgadzam",
      "Raczej się nie zgadzam",
      "Ani się zgadzam, ani się nie zgadzam",
      "Raczej się zgadzam",
      "Zdecydowanie się zgadzam",
    ],
    questions: [
      {
        text: "Nie spocznę, dopóki Polacy nie spotkają się z uznaniem, na jakie zasługują.",
        value: null,
        realNumber: 19,
      },
      {
        text: "Sądzę, że istnieją tajne układy, mające ogromny wpływ na decyzje polityczne.",
        value: null,
        realNumber: 9,
      },
    ],
  },
  {
    type: "agreement",
    answersOrder: [
      "Zdecydowanie tak",
      "Raczej tak",
      "Ani tak, ani nie",
      "Raczej nie",
      "Zdecydowanie nie",
    ],
    questions: [
      {
        text: "Różne cechy określają to kim się czujemy i jak o sobie myślimy. Czy czuje się Pan/Pani dumny/dumna z swojej europejskości?",
        value: null,
        realNumber: 11,
      },
    ],
  },
  {
    type: "standard",
    pageText: null,
    questions: [
      {
        text: "Wiek",
        answers: ["18-24", "25-30", "31-39", "40-49", "50-60", "61-70", "71-85"],
        value: null,
        realNumber: 12,
      },
      {
        text: "Miejsce zamieszkania",
        answers: [
          "Wieś",
          "Miasto do 19 999 m.",
          "Miasto między 20 000 a 99 999 m.",
          "Miasto między 100 000 a 499 999 m.",
          "Miasto powyżej 500 000 m.",
        ],
        value: null,
        realNumber: 13,
      },
      {
        text: "Liczba osób w gospodarstwie",
        answers: ["1 osoba.", "2 osoby.", "3 osoby.", "4 osoby.", "5 osób i więcej."],
        value: null,
        realNumber: 14,
      },
      {
        text: "Wykształcenie",
        answers: ["Podstawowe", "Zawodowe", "Średnie", "Wyższe"],
        value: null,
        realNumber: 15,
      },
    ],
  },
];

export default function QuizStart() {
  const [currentPageIndex, setCurrentPageIndex] = useState(null);
  const [pages, setPages] = useState(p);
  const currentPage = pages[currentPageIndex || 0];
  const [errors, setErrors] = useState([]);

  const answersOrderedByRealNumber = pages
    .map((pg) => {
      return pg.questions;
    })
    .flat()
    .sort((a, b) => a.realNumber - b.realNumber)
    .map((p) => p.value + 1);

  const res1 = calculateResult1(answersOrderedByRealNumber); // postepowi zapalency
  const res2 = calculateResult2(answersOrderedByRealNumber); // pasywni liberałowie
  const res3 = calculateResult3(answersOrderedByRealNumber); // zawiedzeni samotnicy
  const res4 = calculateResult4(answersOrderedByRealNumber); // niezaangażowani normalsi
  const res5 = calculateResult5(answersOrderedByRealNumber); // spełnieni lokalisci
  const res6 = calculateResult6(answersOrderedByRealNumber); // dumni patrioci
  const res7 = calculateResult7(answersOrderedByRealNumber); // oddani tradycjonaliści

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
      setErrors([
        ...errors,
        ...currentPage.questions
          .map((q, index) => (q.value === null ? index : -1))
          .filter((index) => index !== -1),
      ]);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (totalAnsweredQuestionsNumber === totalQuestionsNumber) {
    const urls = {
      1: "/siedem-segmentow/niezaangazowani-normalsi?result",
      2: "/siedem-segmentow/spelnieni-lokalisci?result",
      3: "/siedem-segmentow/zawiedzeni-samotnicy?result",
      4: "/siedem-segmentow/pasywni-liberalowie?result",
      5: "/siedem-segmentow/dumni-patrioci?result",
      6: "/siedem-segmentow/postepowi-zapalency?result",
      7: "/siedem-segmentow/oddani-tradycjonalisci?result",
    };
    const result = matchMaxIndex([res1, res2, res3, res4, res5, res6, res7]);
    redirect(urls[result]);
  }
  if (currentPageIndex === null) {
    return (
      <CenteredSection>
        <SegmentsSvg className="absolute top-[-86px] right-[128px] z-0" />
        <CenterContainer className="my-32">
          <h1 className="mb-6 text-h1 font-bold text-brand-darkBlue">QUIZ 7 segmentów</h1>
          <p className="text-[1.125rem] text-brand-darkBlue">
            Przycisk poniżej przeniesie Cię do anonimowej ankiety, gdzie możesz odpowiedzieć na
            serię pytań (3-5 minut) na temat twoich przekonań i wartości, a nasz algorytm wskaże, do
            której z siedmiu grup najlepiej pasujesz.
          </p>
          <Button
            onClick={() => setCurrentPageIndex(0)}
            classes="bg-brand-darkBlue m-auto mt-12 mb-20"
          >
            <div className="relative top-[.063rem]">Rozpocznij</div>
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
            * Wyniki quizu pokazują najbardziej prawdopodobne dopasowanie do segmentu na podstawie
            skróconej wersji modelu segmentacji More in Common. Od użytkowników quizu nie są
            zbieramy żadnych danych umożliwiających identyfikację osobistą (PII). Dane użytkowników
            nie są sprzedawane przez More in Common, ani nie będą przekazywane żadnym stronom
            trzecim. Kliknij tutaj, aby zapoznać się z naszą{" "}
            <Link className="underline" href="/polityka-prywatnosci">
              Polityką Prywatności.
            </Link>
          </p>
        </CenterContainer>
      </CenteredSection>
    );
  }

  const questionType = {
    agreement: (
      <AgreementPage
        questions={currentPage.questions}
        setAnswer={setAnswer}
        errors={errors}
        answersOrder={currentPage.answersOrder}
      />
    ),
    scale: (
      <ScalePage
        questions={currentPage.questions}
        setAnswer={setAnswer}
        pageText={currentPage.pageText}
      />
    ),
    standard: <StandardPage questions={currentPage.questions} setAnswer={setAnswer} />,
  };

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
      <div className="max-w-[70rem] m-auto w-full pt-20 px-10">
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

        {questionType[currentPage.type]}
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
              <div className="relative top-[.063rem]">Poprzednie pytanie</div>
            </Button>
          )}
          {!isFinalPage && (
            <Button onClick={() => setNextPage()} classes="bg-brand-darkBlue ml-auto">
              <div className="relative top-[.063rem]">Następne pytanie</div>
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
