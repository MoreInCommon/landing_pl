import Adam from "../../../public/tempImages/adam.jpg";
import MainHeader from "@/app/components/MainHeader";
import ImageComponent from "@/app/components/ImageComponent";
import StandardText from "@/app/components/StandardText";
import CenterText from "@/app/components/CenterText";
import CenterContainer from "@/app/components/CenterContainer";
import HeaderFour from "@/app/components/HeaderFour";
import Quote from "@/app/components/Quote";

export default async function Home() {
  return (
    <>
      <MainHeader text="Misja" />
      <StandardText text="More in Common działa na rzecz wzmocnienia demokracji oraz zmniejszenia polaryzaji politycznej i światopoglądowej." />
      <section className="mt-28 max-xl:mt-12">
        <CenterContainer>
          <HeaderFour text="Budowanie jedności przez wspólnotowość" />
        </CenterContainer>
        <CenterContainer>
          <CenterText text="W przestrzeni publicznej na całym świecie obserwujemy pojawianie się antagonizujących narracji, które dzielą społeczeństwa wzdłuż linii „my kontra oni”. W skrajnych przypadkach prowadzą one do przemocy i kwestionowania podstawowych demokratycznych wartości. W Polsce atmosfera nieustannej wojny polsko-polskiej nakręca spiralę wzajemnej nieufności, a nawet pogardy." />
        </CenterContainer>
        <CenterContainer>
          <CenterText
            text="W More in Common wierzymy, że w myśleniu wspólnotowym, trosce o dobro wspólne i
            zdolności do dochodzenia do kompromisów drzemie większa siła niż w destrukcyjnych
            narracjach napędzających polaryzację. Jesteśmy przekonani, że zmniejszenie polaryzacji
            przyczyni się nie tylko do tworzenia bardziej efektywnych polityk publicznych, ale także
            zwiększy wśród obywateli poczucie przynależności do wspólnoty i uczestnictwa w
            decydowaniu o swoich lokalnych społeczności jak i całego kraju."
          />
        </CenterContainer>
        <Quote
          text="W myśleniu wspólnotowym, trosce o dobro wspólne i zdolności do dochodzenia do
            kompromisów drzemie większa siła niż w destrukcyjnych narracjach napędzających
            polaryzację."
        />
        <CenterContainer>
          <HeaderFour text="Wzmacnianie wspólnoty" />
        </CenterContainer>
        <CenterContainer>
          <CenterText
            text="Podstawą naszej pracy są skrupulatne badania, które pozwalają nam wsłuchać się w głosy
            płynące ze społeczeństwa i możliwie dogłębnie zrozumieć otaczającą nas rzeczywistość.
            Realizujemy sondaże, grupy fokusowe, wywiady pogłębione i dialogi obywatelskie. Pytamy
            ludzi o ich doświadczenia, wartości, obawy i nadzieje. Regularnie publikujemy wyniki i
            wnioski z naszych badań, a także omawiamy je na łamach prasy i innych mediów, na
            konferencjach czy briefingach."
          />
        </CenterContainer>
        <CenterContainer>
          <CenterText
            text="Opracowujemy i testujemy strategie i narzędzia komunikacyjne, które odwołują się do
            tego, co nas łączy i przeciwdziałają polaryzacji, jednocześnie wzmacniając poczucie
            przynależności do wspólnoty. Współpracujemy z przedstawicielami społeczeństwa
            obywatelskiego, świata polityki, biznesu i mediów, aby budować mosty i łączyć ludzi
            pomimo różnic."
          />
        </CenterContainer>
        <CenterContainer>
          <CenterText
            text="Oprócz własnych inicjatyw angażujemy się na rzecz wzmacniania naszych partnerów i
            pomagamy im skuteczniej realizować ich misje. Chcemy być katalizatorem pozytywnej zmiany
            systemowej, która pozwoli wzmocnić więzy społeczne i poczucie obywatelskiej wspólnoty."
          />
        </CenterContainer>
        <ImageComponent src={Adam} alt="Adam" width={900} height={460} />
      </section>
    </>
  );
}
