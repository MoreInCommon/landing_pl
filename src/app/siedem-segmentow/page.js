"use client";
import Image from "next/image";
import Avatar1 from "../../../public/tempImages/Avatar_1.png";
import Avatar2 from "../../../public/tempImages/Avatar_2.png";
import Avatar3 from "../../../public/tempImages/Avatar_3.png";
import Avatar4 from "../../../public/tempImages/Avatar_4.png";
import Avatar5 from "../../../public/tempImages/Avatar_5.png";
import Avatar6 from "../../../public/tempImages/Avatar_6.png";
import Avatar7 from "../../../public/tempImages/Avatar_7.png";
import dynamic from "next/dynamic";
import { Link, Element } from "react-scroll";

const segments = [
  {
    title: "Postępowi zapaleńcy",
    description:
      "Postępowi zapaleńcy to zdecydowanie najbardziej liberalnyze wszystkich segmentów. Odrzucają konserwatywne kodymoralne, a religia nie jest dla nich nawet najmniejszym punktemodniesienia w ocenie tego, co jest dobre lub złe. Nad lojalnośćwobec własnej grupy przedkładają wierność uniwersalnymzasadom, w których imię gotowi są kwestionować zastaneautorytety i hierarchie. Cechuje ich myślenie antyautorytarne.",
    logo: Avatar1,
    url: "/siedem-segmentow/postepowi-zapalency",
    color: "#ED6C84",
  },
  {
    title: "Pasywni liberałowie",
    description:
      "Pasywni liberałowie są indywidualistami. Uważają, że w życiu można liczyć przede wszystkim na siebie. Jeśli mają jakieś oczekiwania wobec państwa, to takie, żeby się nie wtrącało. W ich ocenie najlepszym sposobem, aby podnieść poziom życia w Polsce jest usunięcie barier dla przedsiębiorczości i obniżenie podatków, które dziś przesadnie obciążają tych, którzy swoją zaradnością zapracowali na sukces. Dla większości z nich nierówności nie są czymś nagannym – niektórym życie po prostu rozdaje lepsze karty i nie ma powodu, aby się nad kimś z tego powodu litować.",
    logo: Avatar2,
    url: "/siedem-segmentow/pasywni-liberałowie",
    color: "#BD5B08",
  },
  {
    title: "Zawiedzeni samotnicy",
    description:
      "Pesymizm, poczucie zawodu i ogólnego niezadowolenia charakteryzują postawy Zawiedzionych samotników zarówno w kwestiach politycznych, jak i społecznych. Z obawą patrzą w przyszłość, są przekonani, że sprawy w Polsce idą w złym kierunku, a emocje, jakie im towarzyszą, gdy myślą o przyszłości, to przede wszystkim niepewność, lęk, bezsilność i frustracja.",
    logo: Avatar3,
    url: "/siedem-segmentow/zawiedzeni-samotnicy",
    color: "#3A7F8E",
  },
  {
    title: "Niezaangażowani normalsi",
    description:
      "Niezaangażowani normalsi skupiają się przede wszystkim na prywatnych aspektach życia, żyjąc w dużej mierze obokpolityki i pozostając obojętnymi na toczące się wokół nich spory lub wręcz ich nie dostrzegając. Sami w sprawach politycznych unikają zajmowania skrajnych stanowisk albo nie mają w ich kwestii wyrobionego zdania.",
    logo: Avatar4,
    url: "/siedem-segmentow/niezaangazowani-normalsi",
    color: "#445170",
  },
  {
    title: "Spełnieni lokaliści",
    description:
      "Zadowoleni z życia, lojalni w stosunku do najbliższych i związani ze swoim miejscem zamieszkania. Spełnieni lokaliści czują się dobrze sami ze sobą i otaczającym ich światem. Mieszkają częściej na wsi i w średnich oraz dużych miastach. Czują się szanowani przez swoje lokalne społeczności, często bywają ich liderami.",
    logo: Avatar5,
    url: "/siedem-segmentow/spelnieni-lokalisci",
    color: "#37821E",
  },
  {
    title: "Dumni patrioci",
    description:
      "Na pierwszy rzut oka Dumni patrioci wyróżniają się przede wszystkim konserwatywnymi poglądami i fundamentami moralnymi. Cenią sobie takie wartości jak lojalność, posłuszeństwo i szacunek do starszych. Jednak bardziej od osób z innych segmentów różnią się postawami niż poglądami. Charakteryzują ich tendencje autorytarne, przywiązanie do silnego przywództwa i poparcie dla dominacji silniejszych nad słabszymi. Są też bardzo lojalni w stosunku do własnej grupy, takiej jak rodzina czy naród.",
    logo: Avatar6,
    url: "/siedem-segmentow/dumni-patrioci",
    color: "#C11A37",
  },
  {
    title: "Oddani tradycjonaliści",
    description:
      "Oddani tradycjonaliści są przywiązani do tradycyjnych, konserwatywnych wartości i są gotowi ich aktywnie bronić. Charakteryzuje ich też troskliwość, rodzinność i patriotyzm. Są zżyci z Kościołem katolickim, a zasady wiary stanowią dla nich nieodzowną wskazówkę w życiu codziennym.",
    logo: Avatar7,
    url: "/siedem-segmentow/oddani-tradycjonalisci",
    color: "#77539E",
  },
];
const Sidebar = () => {
  return (
    <div className="fixed top-[25rem] left-[6.25rem]  w-64  text-black p-5">
      {segments.map((item, index) => (
        <Link
          key={index}
          to={item.title}
          spy={true}
          smooth={true}
          offset={-570}
          duration={500}
          className="block cursor-pointer p-2 hover:bg-gray-100"
          activeClass="bg-gray-200"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <>
      <div className="text-brand-darkBlue m-auto w-full bg-[#EDF0F7] px-[6.25rem] py-16 text-center relative overflow-hidden">
        <h1 className="text-h1 bold z-1">Siedem segmentów</h1>
        <p className="max-w-[46.875rem] w-full m-auto mt-6 text-bodyRegular z-1">
          Polska to społeczeństwo różnorodne, niepodzielone jedynie na skrajności. Możemy być
          klasyfikowani w różne segmenty w zależności od naszych kluczowych przekonań i psychologii.
          Nasz raport pokazuje, że różne segmenty mogą znaleźć wspólny grunt, często w nieoczekiwany
          sposób. Choć w obrębie segmentów mogą występować ogólne tendencje wyborcze, poszczególni
          członkowie grup mogą podejmować inne decyzje, kierując się specyficznymi dla siebie
          kwestiami.
        </p>
        <svg
          className="absolute top-[-9.375rem] right-[-5rem] z-0"
          height="396"
          viewBox="0 0 477 516"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M348.402 257.583C348.402 318.278 298.935 367.489 237.904 367.489C176.872 367.489 127.405 318.278 127.405 257.583C127.405 196.889 176.872 147.678 237.904 147.678C298.935 147.678 348.402 196.889 348.402 257.583Z"
            stroke="#445170"
            strokeWidth="2"
          />
          <path
            d="M348.402 110.906C348.402 171.6 298.935 220.811 237.904 220.811C176.872 220.811 127.405 171.6 127.405 110.906C127.405 50.2115 176.872 1 237.904 1C298.935 1 348.402 50.2115 348.402 110.906Z"
            stroke="#ED6C84"
            strokeWidth="2"
          />
          <path
            d="M348.402 404.261C348.402 464.955 298.935 514.167 237.904 514.167C176.872 514.167 127.405 464.955 127.405 404.261C127.405 343.567 176.872 294.355 237.904 294.355C298.935 294.355 348.402 343.567 348.402 404.261Z"
            stroke="#92C362"
            strokeWidth="2"
          />
          <path
            d="M476 331.518C476 392.212 426.533 441.424 365.501 441.424C304.469 441.424 255.002 392.212 255.002 331.518C255.002 270.824 304.469 221.612 365.501 221.612C426.533 221.612 476 270.824 476 331.518Z"
            stroke="#60A2B2"
            strokeWidth="2"
          />
          <path
            d="M221.997 184.84C221.997 245.534 172.531 294.746 111.499 294.746C50.4669 294.746 1 245.534 1 184.84C1 124.146 50.4669 74.9346 111.499 74.9346C172.531 74.9346 221.997 124.146 221.997 184.84Z"
            stroke="#9369AA"
            strokeWidth="2"
          />
          <path
            d="M221.997 329.133C221.997 389.827 172.531 439.039 111.499 439.039C50.4669 439.039 1 389.827 1 329.133C1 268.439 50.4669 219.228 111.499 219.228C172.531 219.228 221.997 268.439 221.997 329.133Z"
            stroke="#CC2D40"
            strokeWidth="2"
          />
          <path
            d="M474.808 182.455C474.808 243.15 425.341 292.361 364.309 292.361C303.277 292.361 253.81 243.15 253.81 182.455C253.81 121.761 303.277 72.5498 364.309 72.5498C425.341 72.5498 474.808 121.761 474.808 182.455Z"
            stroke="#F7A833"
            strokeWidth="2"
          />
        </svg>
      </div>
      <Sidebar />
      <div className="ml-64 p-5 text-mono-neutral11">
        {segments.map((item, index) => (
          <Element name={item.title} key={index} className="section">
            <h2 className="text-xl font-bold" style={{ color: item.color }}>
              {item.title}
            </h2>
            <p>{item.description}</p>
            <Image src={item.logo} alt={item.title} width={169} height={176} />
            <button>Czytaj dalej</button>
          </Element>
        ))}
      </div>
    </>
  );
}
