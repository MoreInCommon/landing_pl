import Button from "@/app/components/Button";

export default async function Home() {
  return (
    <>
      <div className="inline-block heading-underline">
        <h1 className="text-black text-h1 font-bold mt-2 pr-4 relative z-[1]">Pracuj z nami</h1>
      </div>
      <p className="text-black max-w-[950px] w-full mt-3 text-bodyRegular">
        Jesteśmy grupą ludzi z silnym poczuciem misji i entuzjazmem do pracy na rzecz dobra
        wspólnego. Jeśli ten opis pasuje także do Ciebie, może spotkamy się w More in Common Polska.
      </p>
      <div className="text-black mt-24 max-w-[820px] m-auto">
        <h4 className="text-h4 font-bold mb-8">Współpraca</h4>
        <p>
          Wierzymy, że aby skutecznie realizować naszą misję, nasz zespół musi być równie
          profesjonalny, co różnorodny. Dlatego dążymy do tego, aby budowały go osoby o różnych
          doświadczeniach zawodowych i życiowych, różnych przekonaniach i wrażliwościach oraz
          wywodzące z różnych środowisk społecznych.
        </p>
      </div>

      <div className="bg-[#F8F8F9] p-8 mt-12 text-black text-center">
        <h4 className="text-h4 font-bold mb-2">Zapraszamy do współpracy</h4>
        <p className="text-bodyRegular max-w-[820px] m-auto">
          Jeśli jesteś zainteresowany/a współpracą z nami, a akurat nie prowadzimy otwartej
          rekrutacji, zachęcamy do wysłania swojego CV i listu motywacyjnego. Stale szukamy
          utalentowanych osób i skontaktujemy się z Tobą, gdy pojawi się taka możliwość.
        </p>
        <Button
          type="submit"
          classes="py-[14px] px-8 bg-brand-darkBlue text-white text-[21px] leading-[16px] m-auto mt-6"
        >
          <div className="relative top-[1px]">Napisz do nas</div>
        </Button>
      </div>
    </>
  );
}
