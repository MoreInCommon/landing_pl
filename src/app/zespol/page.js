"use client";
import Image from "next/image";
import Adam from "../../../public/tempImages/adam.jpg";
import MainHeader from "@/app/components/MainHeader";
import StandardText from "@/app/components/StandardText";
import HeaderFour from "@/app/components/HeaderFour";
import Quote from "@/app/components/Quote";

const team = [
  {
    name: "Adam Traczyk",
    position: "Dyrektor",
    image: Adam,
    text: "Adam jest politologiem i socjologiem. W swojej pracy naukowej zajmuje się polaryzacją społeczną, demokracją i ruchami społecznymi. Jest autorem książki „Polaryzacja. Jak zrozumieć współczesne spory”.",
  },
  {
    name: "Adam Traczyk",
    position: "Dyrektor",
    image: Adam,
    text: "Adam jest politologiem i socjologiem. W swojej pracy naukowej zajmuje się polaryzacją społeczną, demokracją i ruchami społecznymi. Jest autorem książki „Polaryzacja. Jak zrozumieć współczesne spory”.",
  },
  {
    name: "Adam Traczyk",
    position: "Dyrektor",
    image: Adam,
    text: "Adam jest politologiem i socjologiem. W swojej pracy naukowej zajmuje się polaryzacją społeczną, demokracją i ruchami społecznymi. Jest autorem książki „Polaryzacja. Jak zrozumieć współczesne spory”.",
  },
  {
    name: "Adam Traczyk",
    position: "Dyrektor",
    image: Adam,
    text: "Adam jest politologiem i socjologiem. W swojej pracy naukowej zajmuje się polaryzacją społeczną, demokracją i ruchami społecznymi. Jest autorem książki „Polaryzacja. Jak zrozumieć współczesne spory”.",
  },
  {
    name: "Adam Traczyk",
    position: "Dyrektor",
    image: Adam,
    text: "Adam jest politologiem i socjologiem. W swojej pracy naukowej zajmuje się polaryzacją społeczną, demokracją i ruchami społecznymi. Jest autorem książki „Polaryzacja. Jak zrozumieć współczesne spory”.",
  },
];

export default function Home() {
  const handleMore = () => {};
  return (
    <>
      <MainHeader text="Zespół" />
      <StandardText text="Nasz zespół prowadzi badania na temat demokracji oraz najważniejszych wyzwań społecznych naszych czasów. Angażujemy się też w działania na rzecz zmniejszania polaryzacji społecznej w Polsce. W naszej pracy łączymy doświadczenia i ekspertyzę z zakresu politologii, socjologii, psychologii społecznej i komunikacji." />
      <div className="text-black mt-24 max-w-[820px] m-auto">
        <HeaderFour text="Poznaj nas" />
        <StandardText text="Poniżej znajdują się biogramy członków i członkiń naszego zespołu w Polsce. More in Common posiada także zespoły w czterech innych krajach – Stanach Zjednoczonych, Francji, Niemczech oraz Wielkiej Brytanii. Działanie biur krajowych wspiera zespół globalny. Dążymy do tego, aby nasze zespoły odzwierciedlały różnorodność naszych społeczeństw, a poszczególni ich członkowie i członkinie wnosili do naszej pracy perspektywy wynikające z różnych doświadczeń życiowych, zawodowych, zainteresowań i poglądów." />
      </div>
      <div className="flex gap-5 flex-wrap align-middle justify-start text-black mt-40">
        {team.map((person) => (
          <div
            key={person.name}
            className="flex justify-center mb-4 p-4 max-w-[400px] border-t-4 border-brand-blue"
          >
            <div className="flex gap-4 flex-col">
              <Image src={person.image} alt={person.name} width={365} height={365} />
              <div className="mt-4">
                <p className="text-sm">{person.position}</p>
                <h3 className="text-xl font-bold">{person.name}</h3>
                <p
                  className="text-black flex align-center justify-end cursor-pointer"
                  onClick={() => handleMore()}
                >
                  Więcej{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3 11H17.17L13.59 7.41L15 6L21 12L15 18L13.59 16.59L17.17 13H3V11Z"
                      fill="black"
                      stroke="transparent"
                      strokeWidth="0.5"
                    />
                  </svg>
                </p>
                {/* <p className="text-sm">{person.text}</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
