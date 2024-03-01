import Image from "next/image";
import Adam from "../../../public/tempImages/adam.jpg";

export default async function Home() {
  return (
    <>
      <div className="inline-block heading-underline">
        <h1 className="text-black text-h1 font-bold mt-2 pr-4 relative z-[1]">Misja</h1>
      </div>
      <p className="text-black max-w-[950px] w-full mt-3 text-bodyRegular">
        More in Common działa na rzecz wzmocnienia demokracji oraz zmniejszenia polaryzaji
        politycznej i światopoglądowej.
      </p>
      <section className="mt-24 flex text-black gap-6 mb-24">
        <h4 className="text-h4 font-bold max-w-72">Budowanie jedności przez wspólnotowość</h4>
        <div className="flex-1 space-y-4 max-w-[715px]">
          <p>
            W przestrzeni publicznej na całym świecie obserwujemy pojawianie się antagonizujących
            narracji, które dzielą społeczeństwa wzdłuż linii „my kontra oni”. W skrajnych
            przypadkach prowadzą one do przemocy i kwestionowania podstawowych demokratycznych
            wartości. W Polsce atmosfera nieustannej wojny polsko-polskiej nakręca spiralę wzajemnej
            nieufności, a nawet pogardy.
          </p>
          <p>
            W More in Common wierzymy, że w myśleniu wspólnotowym, trosce o dobro wspólne i
            zdolności do dochodzenia do kompromisów drzemie większa siła niż w destrukcyjnych
            narracjach napędzających polaryzację. Jesteśmy przekonani, że zmniejszenie polaryzacji
            przyczyni się nie tylko do tworzenia bardziej efektywnych polityk publicznych, ale także
            zwiększy wśród obywateli poczucie przynależności do wspólnoty i uczestnictwa w
            decydowaniu o swoich lokalnych społeczności jak i całego kraju.
          </p>
        </div>
      </section>
      <div className="text-brand-darkBlue  m-auto w-full bg-[#EDF0F7] px-[100px] bg-[url('/newsletter_bg.png')] py-16">
        <div className="text-h3 mb-2 max-w-[650px] ml-auto flex gap-6">
          <div className="flex flex-col items-center relative w-[30px]">
            <p className="text-[88px] leading-[0px] absolute top-[22px]">“</p>
            <span className="w-[2px] bg-brand-darkBlue h-[85%] m-auto" />
            <p className="text-[88px] leading-[0px] absolute bottom-[22px] rotate-180">“</p>
          </div>
          <h4 className="text-h3 flex-1">
            W myśleniu wspólnotowym, trosce o dobro wspólne i zdolności do dochodzenia do
            kompromisów drzemie większa siła niż w destrukcyjnych narracjach napędzających
            polaryzację.
          </h4>
        </div>
      </div>
      <section className="mt-24 flex text-black gap-6 mb-24">
        <h4 className="text-h4 font-bold max-w-72">Wzmacnianie wspólnoty</h4>
        <div className="flex-1 space-y-4 max-w-[715px]">
          <p>
            Podstawą naszej pracy są skrupulatne badania, które pozwalają nam wsłuchać się w głosy
            płynące ze społeczeństwa i możliwie dogłębnie zrozumieć otaczającą nas rzeczywistość.
            Realizujemy sondaże, grupy fokusowe, wywiady pogłębione i dialogi obywatelskie. Pytamy
            ludzi o ich doświadczenia, wartości, obawy i nadzieje. Regularnie publikujemy wyniki i
            wnioski z naszych badań, a także omawiamy je na łamach prasy i innych mediów, na
            konferencjach czy briefingach.
          </p>
          <p>
            Opracowujemy i testujemy strategie i narzędzia komunikacyjne, które odwołują się do
            tego, co nas łączy i przeciwdziałają polaryzacji, jednocześnie wzmacniając poczucie
            przynależności do wspólnoty. Współpracujemy z przedstawicielami społeczeństwa
            obywatelskiego, świata polityki, biznesu i mediów, aby budować mosty i łączyć ludzi
            pomimo różnic.
          </p>
          <p>
            Oprócz własnych inicjatyw angażujemy się na rzecz wzmacniania naszych partnerów i
            pomagamy im skuteczniej realizować ich misje. Chcemy być katalizatorem pozytywnej zmiany
            systemowej, która pozwoli wzmocnić więzy społeczne i poczucie obywatelskiej wspólnoty.
          </p>
        </div>
      </section>
      <div className="flex justify-center mb-4">
        <Image src={Adam} alt="More in common" width={900} height={460} />
      </div>
    </>
  );
}
