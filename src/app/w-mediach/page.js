import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import Project from "@/app/components/Project";
import Newsletter from "@/app/components/Newsletter";
import Button from "@/app/components/Button";
import MainHeader from "@/app/components/MainHeader";
import Well from "@/app/components/Well";
import Pagination from "@/app/components/Pagination";
import StandardText from "../components/StandardText";
import Image2 from "../../../public/tempImages/Pic02.png";
import Image3 from "../../../public/tempImages/Pic03.png";
import Image4 from "../../../public/tempImages/Pic04.png";
import Image5 from "../../../public/tempImages/Pic05.png";
import Image6 from "../../../public/tempImages/Pic06.png";

const projects = [
  {
    title: "Zmęczona wspólnota",
    date: "Październik 2023",
    medium: "Newsweek",
    description:
      "Raport „Zmęczona Wspólnota” oferuje świeże spojrzenie na polskie społeczeństwo wymykające się utartym binarnym podziałom. Zamiast nich prezentujemy w nim siedem segmentów. Z raportu wyłania się obraz społeczeństwa zmęczonego konfliktem politycznym, ale i takiego, które mimo różnić, wciąż wiele łączy.",
    img: Image2,
    url: "#",
    downloadUrl: "#",
  },
  {
    title: "Polska po zimie",
    date: "Marzec 2023",
    medium: "Gazeta wyborcza",
    description:
      "Analizujemy, jak polskie społeczeństwo poradziło sobie z wyzwaniami ostatniej zimy: rosnącymi cenami energii i problemami z dostawami niektórych surowców oraz pytamy o przyszłość energetyki w Polsce.",
    img: Image3,
    url: "#",
    downloadUrl: "#",
  },
  {
    title: "Nawigowanie w czasach niepewności: Kryzys rosnących kosztów życia",
    date: "Sierpień 2022",
    medium: "Newsweek",
    description:
      'Na podstawie badań przeprowadzonych wśród 7000 osób we Francji, Niemczech, Polsce i Wielkiej Brytanii, raport "Nawigowanie w czasach niepewności" opisuje, w jaki sposób mieszkańcy tych krajów radzą sobie z kryzysem, inflacją i rosnącymi cenami',
    img: Image4,
    url: "#",
    downloadUrl: "#",
  },
  {
    title: "Nawigowanie w czasach niepewności: Jaka Polska po pandemii?",
    date: "Lipiec 2022",
    medium: "Newsweek",
    description:
      'Na podstawie badań przeprowadzonych wśród 7000 osób we Francji, Niemczech, Polsce i Wielkiej Brytanii, raport "Nawigowanie w czasach niepewności" opisuje, w jaki sposób mieszkańcy tych krajów radzą sobie z kryzysem, inflacją i rosnącymi cenami',
    img: Image5,
    url: "#",
    downloadUrl: "#",
  },
  {
    title: "Navigating Climate Change in Europe: The Choices Ahead",
    date: "Luty 2022",
    medium: "Newsweek",
    description:
      '"Nawigowanie w czasach niepewności" to projekt badający stan sześciu europejskich społeczeństw w okresie wychodzenia z pandemii COVID-19. Przeprowadzony w ostatnich tygodniach 2021 roku, opiera się na badaniach przeprowadzonych wśród 12 000 respondentów we Francji, Niemczech, Włoszech, Polsce, Hiszpanii i Wielkiej Brytanii. Wnioski w nim zawarte są rozwinięciem raportu "The New Normal?", który badał dynamikę w pierwszych sześciu miesiącach pandemii.',
    img: Image6,
    url: "#",
    downloadUrl: "#",
  },
];

export default async function Home() {
  return (
    <>
      <MainHeader text="W mediach" />
      <StandardText
        text="Wnioskami z naszych badań regularnie dzielimy za pośrednictwem mediów. Poniżej znajduje się
        lista wybranych publikacji i audycji, w których braliśmy udział."
      />
      <Well
        title="Zapraszamy do kontaktu"
        text="Jesteś przedstawicielem mediów zainteresowanym naszą pracą?"
        button="Napisz do nas"
      />
      <div className="flex gap-4 flex-wrap mt-[72px] items-stretch max-w-[1440px] m-auto px-[100px]">
        {projects.map((project) => (
          <Project
            classes="bg-white p-6 border-t-4 border-brand-darkBlue flex-[31%] w-1/3 flex flex-col max-w-1/3 hover:shadow-tile-shadow transition-shadow"
            key={project.title}
            project={project}
          />
        ))}
      </div>
      <div className="flex justify-center mt-20">
        <Pagination currentPage={3} totalPages={8} />
      </div>
    </>
  );
}
