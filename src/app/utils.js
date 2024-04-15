/** Import your components */
import Page from "@/app/components/Page";
import Config from "@/app/components/Config";
import HeaderMenu from "@/app/components/HeaderMenu";
import MenuLink from "@/app/components/MenuLink";
import Hero from "@/app/components/Hero";
import MainHeader from "@/app/components/MainHeaderStoryblok";
import StandardText from "@/app/components/StandardText";
import LongText from "@/app/components/LongText";
import MainInfo from "@/app/components/MainInfo";
import Slider from "@/app/components/SliderStoryblok";
import Statut from "@/app/components/Statut";
import Well from "@/app/components/WellStoryblok";
import Team from "@/app/components/TeamStoryblok";
import Quote from "@/app/components/Quote";
import Avatar1 from "../../public/tempImages/Avatar_1.png";
import Avatar2 from "../../public/tempImages/Avatar_2.png";
import Avatar3 from "../../public/tempImages/Avatar_3.png";
import Avatar4 from "../../public/tempImages/Avatar_4.png";
import Avatar5 from "../../public/tempImages/Avatar_5.png";
import Avatar6 from "../../public/tempImages/Avatar_6.png";
import Avatar7 from "../../public/tempImages/Avatar_7.png";

export const urls = {
  home: "/",
  whatWeDo: "/nasze-projekty",
  media: "/w-mediach",
  about: "/o-nas/zespol",
  contact: "/kontakt",
  seven: "/siedem-segmentow",
  climate: "/raport-klimatyczny",
  workWithUs: "/pracuj-z-nami",
  team: "/o-nas/zespol",
  mission: "/o-nas/misja",
  statut: "/o-nas/statut",
};

const greenUrls = [urls.climate];
const decorationUrls = [urls.whatWeDo];

export const getIfGreenUrl = (url) => (greenUrls.includes(url) ? "bg-themeGreen" : "");
export const getIfDecoration = (url) => !!decorationUrls.includes(url);

export const segments = [
  {
    title: "Postępowi zapaleńcy",
    description:
      "Postępowi zapaleńcy to zdecydowanie najbardziej liberalnyze wszystkich segmentów. Odrzucają konserwatywne kodymoralne, a religia nie jest dla nich nawet najmniejszym punktemodniesienia w ocenie tego, co jest dobre lub złe. Nad lojalnośćwobec własnej grupy przedkładają wierność uniwersalnymzasadom, w których imię gotowi są kwestionować zastaneautorytety i hierarchie. Cechuje ich myślenie antyautorytarne.",
    logo: Avatar1,
    url: "/siedem-segmentow/postepowi-zapalency",
    color: "#ED6C84",
  },
  {
    title: "Pasywni liberałowie",
    description:
      "Pasywni liberałowie są indywidualistami. Uważają, że w życiu można liczyć przede wszystkim na siebie. Jeśli mają jakieś oczekiwania wobec państwa, to takie, żeby się nie wtrącało. W ich ocenie najlepszym sposobem, aby podnieść poziom życia w Polsce jest usunięcie barier dla przedsiębiorczości i obniżenie podatków, które dziś przesadnie obciążają tych, którzy swoją zaradnością zapracowali na sukces. Dla większości z nich nierówności nie są czymś nagannym – niektórym życie po prostu rozdaje lepsze karty i nie ma powodu, aby się nad kimś z tego powodu litować.",
    logo: Avatar2,
    url: "/siedem-segmentow/pasywni-liberałowie",
    color: "#BD5B08",
  },
  {
    title: "Zawiedzeni samotnicy",
    description:
      "Pesymizm, poczucie zawodu i ogólnego niezadowolenia charakteryzują postawy Zawiedzionych samotników zarówno w kwestiach politycznych, jak i społecznych. Z obawą patrzą w przyszłość, są przekonani, że sprawy w Polsce idą w złym kierunku, a emocje, jakie im towarzyszą, gdy myślą o przyszłości, to przede wszystkim niepewność, lęk, bezsilność i frustracja.",
    logo: Avatar3,
    url: "/siedem-segmentow/zawiedzeni-samotnicy",
    color: "#3A7F8E",
  },
  {
    title: "Niezaangażowani normalsi",
    description:
      "Niezaangażowani normalsi skupiają się przede wszystkim na prywatnych aspektach życia, żyjąc w dużej mierze obokpolityki i pozostając obojętnymi na toczące się wokół nich spory lub wręcz ich nie dostrzegając. Sami w sprawach politycznych unikają zajmowania skrajnych stanowisk albo nie mają w ich kwestii wyrobionego zdania.",
    logo: Avatar4,
    url: "/siedem-segmentow/niezaangazowani-normalsi",
    color: "#445170",
  },
  {
    title: "Spełnieni lokaliści",
    description:
      "Zadowoleni z życia, lojalni w stosunku do najbliższych i związani ze swoim miejscem zamieszkania. Spełnieni lokaliści czują się dobrze sami ze sobą i otaczającym ich światem. Mieszkają częściej na wsi i w średnich oraz dużych miastach. Czują się szanowani przez swoje lokalne społeczności, często bywają ich liderami.",
    logo: Avatar5,
    url: "/siedem-segmentow/spelnieni-lokalisci",
    color: "#37821E",
  },
  {
    title: "Dumni patrioci",
    description:
      "Na pierwszy rzut oka Dumni patrioci wyróżniają się przede wszystkim konserwatywnymi poglądami i fundamentami moralnymi. Cenią sobie takie wartości jak lojalność, posłuszeństwo i szacunek do starszych. Jednak bardziej od osób z innych segmentów różnią się postawami niż poglądami. Charakteryzują ich tendencje autorytarne, przywiązanie do silnego przywództwa i poparcie dla dominacji silniejszych nad słabszymi. Są też bardzo lojalni w stosunku do własnej grupy, takiej jak rodzina czy naród.",
    logo: Avatar6,
    url: "/siedem-segmentow/dumni-patrioci",
    color: "#C11A37",
  },
  {
    title: "Oddani tradycjonaliści",
    description:
      "Oddani tradycjonaliści są przywiązani do tradycyjnych, konserwatywnych wartości i są gotowi ich aktywnie bronić. Charakteryzuje ich też troskliwość, rodzinność i patriotyzm. Są zżyci z Kościołem katolickim, a zasady wiary stanowią dla nich nieodzowną wskazówkę w życiu codziennym.",
    logo: Avatar7,
    url: "/siedem-segmentow/oddani-tradycjonalisci",
    color: "#77539E",
  },
];

export const components = {
  page: Page,
  "page title": MainHeader,
  "page lead": StandardText,
  "main page info": MainInfo,
  "long text": LongText,
  slider: Slider,
  quote: Quote,
  team: Team,
  well: Well,
  statut: Statut,
  // config: Config,
  // header_menu: HeaderMenu,
  // menu_link: MenuLink,
  // hero: Hero,
};
