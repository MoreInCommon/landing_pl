import Button from "@/app/components/Button";
import MainHeader from "@/app/components/MainHeader";
import Well from "@/app/components/Well";
import StandardText from "../components/StandardText";
import HeaderFour from "../components/HeaderFour";

export default async function Home() {
  return (
    <>
      <MainHeader text="Pracuj z nami" />
      <StandardText text="Jesteśmy grupą ludzi z silnym poczuciem misji i entuzjazmem do pracy na rzecz dobra wspólnego. Jeśli ten opis pasuje także do Ciebie, może spotkamy się w More in Common Polska." />
      <div className="text-black mt-24 max-w-[820px] m-auto">
        <HeaderFour text="Współpraca" />
        <StandardText
          text=" Wierzymy, że aby skutecznie realizować naszą misję, nasz zespół musi być równie
          profesjonalny, co różnorodny. Dlatego dążymy do tego, aby budowały go osoby o różnych
          doświadczeniach zawodowych i życiowych, różnych przekonaniach i wrażliwościach oraz
          wywodzące z różnych środowisk społecznych."
        />
      </div>
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
