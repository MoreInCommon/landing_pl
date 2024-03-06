"use client";
import Image from "next/image";
import { Link, Element } from "react-scroll";
import { segments } from "@/app/utils";
import SegmentsSvg from "@/app/components/SegmentsSvg";

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
        <SegmentsSvg className="absolute top-[-9.375rem] right-[-5rem] z-0" />
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
