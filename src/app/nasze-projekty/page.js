import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import Project from "@/app/components/Project";
import Newsletter from "@/app/components/Newsletter";
import Image2 from "../../../public/tempImages/Pic02.png";
import Image3 from "../../../public/tempImages/Pic03.png";
import Image4 from "../../../public/tempImages/Pic04.png";
import Image5 from "../../../public/tempImages/Pic05.png";
import Image6 from "../../../public/tempImages/Pic06.png";

const projects = [
  {
    title: "Zmęczona wspólnota",
    date: "Październik 2023",
    description:
      "Raport „Zmęczona Wspólnota” oferuje świeże spojrzenie na polskie społeczeństwo wymykające się utartym binarnym podziałom. Zamiast nich prezentujemy w nim siedem segmentów. Z raportu wyłania się obraz społeczeństwa zmęczonego konfliktem politycznym, ale i takiego, które mimo różnić, wciąż wiele łączy.",
    img: Image2,
    url: "#",
    downloadUrl: "#",
  },
  {
    title: "Polska po zimie",
    date: "Marzec 2023",
    description:
      "Analizujemy, jak polskie społeczeństwo poradziło sobie z wyzwaniami ostatniej zimy: rosnącymi cenami energii i problemami z dostawami niektórych surowców oraz pytamy o przyszłość energetyki w Polsce.",
    img: Image3,
    url: "#",
    downloadUrl: "#",
  },
  {
    title: "Nawigowanie w czasach niepewności: Kryzys rosnących kosztów życia",
    date: "Sierpień 2022",
    description:
      'Na podstawie badań przeprowadzonych wśród 7000 osób we Francji, Niemczech, Polsce i Wielkiej Brytanii, raport "Nawigowanie w czasach niepewności" opisuje, w jaki sposób mieszkańcy tych krajów radzą sobie z kryzysem, inflacją i rosnącymi cenami',
    img: Image4,
    url: "#",
    downloadUrl: "#",
  },
  {
    title: "Nawigowanie w czasach niepewności: Jaka Polska po pandemii?",
    date: "Lipiec 2022",
    description:
      'Na podstawie badań przeprowadzonych wśród 7000 osób we Francji, Niemczech, Polsce i Wielkiej Brytanii, raport "Nawigowanie w czasach niepewności" opisuje, w jaki sposób mieszkańcy tych krajów radzą sobie z kryzysem, inflacją i rosnącymi cenami',
    img: Image5,
    url: "#",
    downloadUrl: "#",
  },
  {
    title: "Navigating Climate Change in Europe: The Choices Ahead",
    date: "Luty 2022",
    description:
      '"Nawigowanie w czasach niepewności" to projekt badający stan sześciu europejskich społeczeństw w okresie wychodzenia z pandemii COVID-19. Przeprowadzony w ostatnich tygodniach 2021 roku, opiera się na badaniach przeprowadzonych wśród 12 000 respondentów we Francji, Niemczech, Włoszech, Polsce, Hiszpanii i Wielkiej Brytanii. Wnioski w nim zawarte są rozwinięciem raportu "The New Normal?", który badał dynamikę w pierwszych sześciu miesiącach pandemii.',
    img: Image6,
    url: "#",
    downloadUrl: "#",
  },
];

export default async function Home() {
  const { data } = await fetchData();
  return (
    <>
      <svg
        className="absolute top-0 left-0 z-[-1]"
        xmlns="http://www.w3.org/2000/svg"
        width="1440"
        height="583"
        viewBox="0 0 1440 583"
        fill="none"
      >
        <path d="M0 0H1440V305.5L0 583V0Z" fill="#F8F8F9" />
      </svg>
      <div className="inline-block heading-underline">
        <h1 className="text-black text-h1 font-bold mt-2 pr-4 relative z-[1]">
          Nasze projekty
          {/* <StoryblokStory story={data.story} /> */}
        </h1>
      </div>
      <p className="text-black max-w-[950px] w-full mt-3 text-bodyRegular">
        Realizujemy projekty mające na celu wspieranie demokracji, przeciwdziałanie polaryzacji
        politycznej i wzmacnianie zdolności społeczeństwa do stawienia czoła najważniejszym
        wyzwaniom naszych czasów. Wcielamy w życie długofalowe inicjatywy oraz reagujemy na
        przełomowe wydarzenia. Współpracujemy z szerokim gronem partnerów, z którymi dzielimy misję
        budowy silnego, spójnego i demokratycznego społeczeństwa.
      </p>
      <div className="flex gap-10 flex-wrap mt-[72px] items-stretch">
        {projects.map((project) => (
          <Project
            classes="bg-white p-6 border-t-4 border-brand-darkBlue flex-[48%] w-1/2 flex flex-col max-w-1/2 hover:shadow-tile-shadow transition-shadow"
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </>
  );
}

export async function fetchData() {
  let sbParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}
