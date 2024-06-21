import Button from "@/app/components/Button";
import Image from "next/image";

const ClimateQuiz = ({ blok }) => {
  return (
    <div className="max-w-full m-auto px-[140px]">
      <div className="bg-green-light p-8 mt-12 text-black text-center mb-10 relative">
        <Image
          src={"/MIC_ikona.png"}
          width={117}
          height={114}
          alt=""
          className="absolute top-10 left-12"
        />
        <h4 className="text-h4 font-bold mb-2 text-brand-darkGreen flex items-center justify-center relative">
          {blok.title}
        </h4>
        <p className="text-bodyRegular m-auto max-w-[600px] px-10">{blok.desc}</p>
        <Button
          type="submit"
          classes="py-[14px] m-auto px-8 bg-brand-darkGreen text-white text-[21px] leading-[16px] mt-4 min-w-[133px]"
        >
          <div className="relative top-[1px]">{blok.button}</div>
        </Button>
      </div>
    </div>
  );
};

export default ClimateQuiz;
