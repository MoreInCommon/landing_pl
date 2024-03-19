import Adam from "../../../public/tempImages/adam.jpg";
import MainHeader from "@/app/components/MainHeader";
import StandardText from "@/app/components/StandardText";
import Team from "@/app/components/Team";
import Well from "@/app/components/Well";
import HeaderFour from "@/app/components/HeaderFour";

const team = [
  {
    name: "Adam Traczyk",
    position: "Dyrektor",
    image: Adam,
    text: "Adam dołączył do More in Common w listopadzie 2020 roku, a od lipca 2022 kieruje naszym warszawskim biurem. Wcześniej pracował m.in. w German Council on Foreign Relations (DGAP). Był także współzałożycielem i przez kilka lat prezesem warszawskiego think-tanku Global.Lab zajmującego się sprawami międzynarodowymi. Adam studiował stosunki międzynarodowe i nauki polityczne w Warszawie, Bonn i Berlinie. Jego komentarze i analizy ukazały się m.in. na łamach Polityki, Rzeczpospolitej, Gazety Wyborczej, Polski The Times, Super Expressu, Krytyki Politycznej, Klubu Jagiellońskiego, Le Monde, Die Welt, Süddeutsche Zeitung, Wall Street Journal i innych. W kadencji 2019-2023 był członkiem zespołu ekspertów Komisji Spraw Zagranicznych i Unii Europejskiej Senatu RP.",
  },
  {
    name: "Traczyk Adam",
    position: "Dyrektor",
    image: Adam,
    text: "Adam dołączył do More in Common w listopadzie 2020 roku, a od lipca 2022 kieruje naszym warszawskim biurem. Wcześniej pracował m.in. w German Council on Foreign Relations (DGAP). Był także współzałożycielem i przez kilka lat prezesem warszawskiego think-tanku Global.Lab zajmującego się sprawami międzynarodowymi. Adam studiował stosunki międzynarodowe i nauki polityczne w Warszawie, Bonn i Berlinie. Jego komentarze i analizy ukazały się m.in. na łamach Polityki, Rzeczpospolitej, Gazety Wyborczej, Polski The Times, Super Expressu, Krytyki Politycznej, Klubu Jagiellońskiego, Le Monde, Die Welt, Süddeutsche Zeitung, Wall Street Journal i innych. W kadencji 2019-2023 był członkiem zespołu ekspertów Komisji Spraw Zagranicznych i Unii Europejskiej Senatu RP.",
  },
  {
    name: "Ada Tracz",
    position: "Dyrektor",
    image: Adam,
    text: "Adam jest politologiem i socjologiem. W swojej pracy naukowej zajmuje się polaryzacją społeczną, demokracją i ruchami społecznymi. Jest autorem książki „Polaryzacja. Jak zrozumieć współczesne spory”.",
  },
  {
    name: "Tracz Ada",
    position: "Dyrektor",
    image: Adam,
    text: "Adam jest politologiem i socjologiem. W swojej pracy naukowej zajmuje się polaryzacją społeczną, demokracją i ruchami społecznymi. Jest autorem książki „Polaryzacja. Jak zrozumieć współczesne spory”.",
  },
  {
    name: "Damian Traczyk",
    position: "Dyrektor",
    image: Adam,
    text: "Adam jest politologiem i socjologiem. W swojej pracy naukowej zajmuje się polaryzacją społeczną, demokracją i ruchami społecznymi. Jest autorem książki „Polaryzacja. Jak zrozumieć współczesne spory”.",
  },
];

export default async function Home() {
  return (
    <>
      <MainHeader text="W budowie" />
      <br />
      <MainHeader text="Zespół" />
      <StandardText text="Nasz zespół prowadzi badania na temat demokracji oraz najważniejszych wyzwań społecznych naszych czasów. Angażujemy się też w działania na rzecz zmniejszania polaryzacji społecznej w Polsce. W naszej pracy łączymy doświadczenia i ekspertyzę z zakresu politologii, socjologii, psychologii społecznej i komunikacji." />
      <div className="text-black mt-24 max-w-[820px] m-auto">
        <HeaderFour text="Poznaj nas" />
        <StandardText text="Poniżej znajdują się biogramy członków i członkiń naszego zespołu w Polsce. More in Common posiada także zespoły w czterech innych krajach – Stanach Zjednoczonych, Francji, Niemczech oraz Wielkiej Brytanii. Działanie biur krajowych wspiera zespół globalny. Dążymy do tego, aby nasze zespoły odzwierciedlały różnorodność naszych społeczeństw, a poszczególni ich członkowie i członkinie wnosili do naszej pracy perspektywy wynikające z różnych doświadczeń życiowych, zawodowych, zainteresowań i poglądów." />
      </div>
      <Team team={team} />
      <Well
        title="Zapraszamy do współpracy"
        text="Jeśli jesteś zainteresowany/a współpracą z nami, a akurat nie prowadzimy otwartej
          rekrutacji, zachęcamy do wysłania swojego CV i listu motywacyjnego. Stale szukamy
          utalentowanych osób i skontaktujemy się z Tobą, gdy pojawi się taka możliwość."
        button="Napisz do nas"
      />
    </>
  );
}
