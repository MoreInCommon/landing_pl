"use client";
import { storyblokEditable } from "@storyblok/react";
import SegmentsSvg from "@/app/components/SegmentsSvg";
import MainHeader from "@/app/components/MainHeader";
import CenteredSection from "@/app/components/CenteredSection";
import Trivia from "@/app/components/Trivia";
import CenterContainer from "@/app/components/CenterContainer";
import CenterText from "@/app/components/CenterText";
import Button from "@/app/components/Button";
import HeaderFour from "@/app/components/HeaderFour";

const SegmentationHeader = ({ blok }) => {
  return (
    <>
      <div
        className="text-brand-darkBlue m-auto w-full bg-[#EDF0F7] px-[6.25rem] py-16 text-center relative overflow-hidden"
        {...storyblokEditable}
      >
        <h1 className="text-h1 bold z-1">Siedem segmentów</h1>
        <p className="max-w-[46.875rem] w-full m-auto mt-6 text-bodyRegular z-1">
          Polska to społeczeństwo różnorodne, niepodzielone jedynie na skrajności. Możemy być
          klasyfikowani w różne segmenty w zależności od naszych kluczowych przekonań i psychologii.
          Nasz raport pokazuje, że różne segmenty mogą znaleźć wspólny grunt, często w nieoczekiwany
          sposób. Choć w obrębie segmentów mogą występować ogólne tendencje wyborcze, poszczególni
          członkowie grup mogą podejmować inne decyzje, kierując się specyficznymi dla siebie
          kwestiami.
        </p>
        <SegmentsSvg className="absolute top-[-9.375rem] right-[-5rem] z-0" />
      </div>
      <CenteredSection>
        <MainHeader text={"Segmentacja polskiego społeczeństwa"} className="mt-[72px] mb-10" />
      </CenteredSection>
      <CenterContainer className="text-center">
        <CenterText
          text={
            "Badania przeprowadzone przez More in Common zawierające elementy socjologii, psychologii i politologii. Analizie poddane zostały wyznawane wartości, fundamenty moralne i stosunek do świata zewnętrznego."
          }
        />
        <div className="grid grid-cols-3 gap-6 mb-12">
          {[1, 2, 3, 4, 5, 6].map((trivia) => {
            return <Trivia key={trivia} />;
          })}
        </div>
        <Button
          onClick={() => console.log()}
          classes="bg-brand-darkBlue hover:bg-hover-blue m-auto"
        >
          <div className="relative top-[1px]">Raport Zmęczona wspólnota</div>
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
      </CenterContainer>
      <div className="bg-[#EDF0F7] p-8">
        <CenterContainer>
          <HeaderFour text={"Zrozumieć podziały"} />
          <CenterText
            text={
              "W przestrzeni publicznej można natrafić na przeróżne osie obrazujące podział polskiego społeczeństwa: istnieć ma obok siebie Polska A i Polska B albo Polska „liberalna” i Polska „solidarna”. Dzielić się mamy na zwycięzców transformacji i jej przegranych. Niektóre linie podziałów możemy traktować jako historyczną ciekawostkę, jak choćby tłumaczenie różnic politycznych między Polakami faktem, że ciągle „widać zabory”. Inne przybierają bardziej drastyczną formę, a ich autorzy uciekają się nawet do wykluczania osób o odmiennych opiniach z grona narodowej wspólnoty. Jako badacze, szukaliśmy odpowiedzi na pytania, czy polaryzacja polityczna w Polsce jest rzeczywiście na tyle głęboko zakorzeniona, że nie ma od niej ucieczki. Czy może „wojna polsko-polska” jest tylko konstruktem napędzanym przez ostrą retorykę, w którym każdy – nawet najmniejszy – spór polityczny stylizowany jest na starcie dobra ze złem? W tym celu przeprowadziliśmy badanie ankietowe na reprezentatywnej grupie 4090 osób. Dodatkowo, w ramach grup fokusowych i wywiadów indywidualnych porozmawialiśmy z przeszło 100 Polkami i Polakami o wartościach, którymi kierują się w życiu, o tym jak odnajdują się w otaczającym ich świecie oraz, jakie mają zdanie na najważniejsze tematy społeczno-polityczne."
            }
          />
        </CenterContainer>
      </div>
    </>
  );
};

export default SegmentationHeader;
