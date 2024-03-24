import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import Project from "@/app/components/Project";
import Newsletter from "@/app/components/Newsletter";
import Button from "@/app/components/Button";
import MainHeader from "@/app/components/MainHeader";
import Image3 from "../../../public/tempImages/s3.png";
import Well from "@/app/components/Well";
import StandardText from "../components/StandardText";
import SegmentsSvg from "@/app/components/SegmentsSvg";
import Image2 from "../../../public/tempImages/1.png";
import CustomSlider from "@/app/components/Slider";
import Link from "next/link";
import { segments } from "@/app/utils";

const contents = [
  {
    title: "Segmenty o zmianach klimatu",
    img: Image2,
  },
  {
    title: "Energetyka i polityka klimatyczna",
    img: Image2,
  },
  {
    title: "Polska przyszłości",
    img: Image2,
  },
  {
    title: "Wartości",
    img: Image2,
  },
  {
    title: "Segmenty o zmianach klimatu",
    img: Image2,
  },
];

const slides = [
  {
    title: "17%",
    description:
      "Polek i Polaków uważa przeciwdziałanie kryzysowi klimatycznemu i zanieczyszczeniu środowiska za jedno z najważniejszych wyzwań stojących przed Polską",
    img: Image3,
  },
  {
    title: "60%",
    description: "Polek i Polaków obawia się zmian klimatu",
    img: Image3,
  },
  {
    title: "17%",
    description:
      "Polek i Polaków uważa przeciwdziałanie kryzysowi klimatycznemu i zanieczyszczeniu środowiska za jedno z najważniejszych wyzwań stojących przed Polską",
    img: Image3,
  },
  {
    title: "60%",
    description: "Polek i Polaków obawia się zmian klimatu",
    img: Image3,
  },
];

export default async function Home() {
  return (
    <>
      <MainHeader text="W budowie" />
      <br />
      <CustomSlider slides={slides} />
      <div className="text-center">
        <MainHeader className="green-heading-underline" text="Segmentacja" />
        <StandardText
          text="Badanie z 2023 roku na temat stosunku Polaków do klimatu, oparte na ankietach wśród 4090
          osób i ponad 100 wywiadach, różni się od innych badań tym, że koncentruje się na
          wartościach moralnych, poczuciu sprawczości, tożsamościach oraz postawach wobec zmian i
          innych osób, zamiast na demografii."
        />
        <div className="flex gap-4 my-8">
          {contents.map((content, index) => (
            <Link
              className="flex p-6 flex-col align-center gap-2 border-[1px] border-mono-neutral22 min-w-[325px]"
              href="/raport-klimatyczny/segmenty-o-zmianach-klimatu"
              key={index}
            >
              <h4 className="text-h4 text-black text-center min-h-[60px]">{content.title}</h4>
              <img src={content.img.src} alt="img" />
              <p className="text-black flex align-center self-auto">
                Czytaj dalej{" "}
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
            </Link>
          ))}
        </div>
        <div className="bg-green-light p-8 mt-12 text-black text-center">
          <h4 className="text-h4 font-bold mb-2 text-brand-darkGreen flex align-center justify-center relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              className="top-[-2px] relative"
            >
              <mask
                id="mask0_1700_6382"
                // style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="33"
                height="32"
              >
                <rect x="0.5" width="32" height="32" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1700_6382)">
                <path
                  className="fill-current"
                  d="M16.5 27.9236C15.9649 27.9236 15.4918 27.7826 15.0807 27.5005C14.6696 27.2185 14.382 26.8484 14.2179 26.3902H13.8333C13.288 26.3902 12.8184 26.1933 12.4244 25.7993C12.0303 25.4053 11.8333 24.9356 11.8333 24.3903V20.016C10.488 19.2006 9.4295 18.1074 8.6577 16.7365C7.8859 15.3656 7.5 13.898 7.5 12.334C7.5 9.82457 8.37264 7.69723 10.1179 5.95192C11.8632 4.20663 13.9906 3.33398 16.5 3.33398C19.0093 3.33398 21.1367 4.20663 22.882 5.95192C24.6273 7.69723 25.4999 9.82457 25.4999 12.334C25.4999 13.9254 25.114 15.3998 24.3422 16.757C23.5704 18.1143 22.5119 19.2006 21.1666 20.016V24.3903C21.1666 24.9356 20.9696 25.4053 20.5756 25.7993C20.1816 26.1933 19.7119 26.3902 19.1666 26.3902H18.782C18.6179 26.8484 18.3303 27.2185 17.9192 27.5005C17.5081 27.7826 17.035 27.9236 16.5 27.9236ZM13.8333 24.3903H19.1666V23.139H13.8333V24.3903ZM13.8333 21.9596H19.1666V20.6673H13.8333V21.9596ZM13.5666 18.6673H15.7051V14.7852L12.8487 11.9288L13.9666 10.8109L16.5 13.3442L19.0333 10.8109L20.1512 11.9288L17.2948 14.7852V18.6673H19.4333C20.6333 18.0895 21.6111 17.2395 22.3666 16.1173C23.1222 14.9951 23.5 13.734 23.5 12.334C23.5 10.3784 22.8222 8.72284 21.4666 7.36728C20.1111 6.01173 18.4555 5.33395 16.5 5.33395C14.5444 5.33395 12.8889 6.01173 11.5333 7.36728C10.1777 8.72284 9.49997 10.3784 9.49997 12.334C9.49997 13.734 9.87774 14.9951 10.6333 16.1173C11.3889 17.2395 12.3666 18.0895 13.5666 18.6673Z"
                />
              </g>
            </svg>
            Test klimatyczny
          </h4>
          <p className="text-bodyRegular max-w-[820px] m-auto">
            Sprawdź co już wiesz o klimiacie i dowiedz się czegoś nowego
          </p>
          <Button
            type="submit"
            classes="py-[14px] m-auto px-8 bg-brand-darkGreen text-white text-[21px] leading-[16px] mt-4 min-w-[133px]"
          >
            <div className="relative top-[1px]">Przejdz do testu</div>
          </Button>
        </div>
        <MainHeader className="green-heading-underline" text="7 segmentów" />
        <StandardText
          text="  Polska to społeczeństwo różnorodne, niepodzielone jedynie na skrajności. Możemy być
          klasyfikowani w różne segmenty w zależności od naszych kluczowych przekonań i psychologii.
          W obrębie segmentów mogą występować ogólne tendencje wyborcze, poszczególni członkowie
          grup mogą podejmować inne decyzje."
        />
        <div className="flex gap-4 my-8">
          {segments.map((content, index) => (
            <div
              className="flex p-6 flex-col align-center gap-2 min-w-[235px] h-[200px]"
              key={index}
            >
              <img src={content.logo.src} alt="img" className="h-3/4 object-contain	" />
              <p className="text-black flex align-center self-auto">{content.title}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#F8F8F9] p-8 mt-12 text-black text-left relative overflow-hidden">
          <SegmentsSvg className="absolute top-[-6.375rem] left-[5rem] z-0" />
          <div className="max-w-[530px] ml-auto">
            <div className="inline-block heading-underline green-heading-underline">
              <h4 className="text-black text-h1 font-bold mt-2 pr-4 relative z-[1]">
                Quiz 7 segementów
              </h4>
            </div>
            <h3 className="text-h3 mt-2">Sprawdź do której grupy przynależysz</h3>
            <p className="text-bodyRegular mb-6">
              Możesz odpowiedzieć na serię pytań (3-5 minut) dotyczących twoich przekonań i
              wartości, a nasz algorytm wskaże, do której z siedmiu grup najlepiej pasujesz.
            </p>
            <Button
              type="submit"
              classes="py-[14px] px-8 bg-brand-darkGreen text-white text-[21px] leading-[16px] mt-4 min-w-[133px]"
            >
              <div className="relative top-[1px]">Rozwiąż Quiz</div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
