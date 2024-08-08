/** Import your components */
import Page from "@/app/components/Page";
import MainHeader from "@/app/components/MainHeaderStoryblok";
import MediaProject from "@/app/components/MediaProject";
import ArticleHeader from "@/app/components/ArticleHeader";
import ClimateArticleHeader from "@/app/components/ClimateArticleHeader";
import StandardText from "@/app/components/StandardText";
import Media from "@/app/components/Media";
import MediaMentions from "@/app/components/MediaMentions";
import MediaMention from "@/app/components/MediaMention";
import Projects from "@/app/components/Projects";
import SimilarArticles from "@/app/components/SimilarArticles";
import Decoration from "@/app/components/Decoration";
import Project from "@/app/components/Project";
import Segment from "@/app/components/Segment";
import SegmentContent from "@/app/components/SegmentContent";
import ClimateContent from "@/app/components/ClimateContent";
import Trivia from "@/app/components/Trivia";
import LongText from "@/app/components/LongText";
import SegmentationContent from "@/app/components/SegmentationContent";
import MainInfo from "@/app/components/MainInfo";
import FooterItem from "@/app/components/FooterItem";
import SegmentationHeader from "@/app/components/SegmentationHeader";
import FooterNavLink from "@/app/components/FooterNavLink";
import Footer from "@/app/components/Footer";
import Slider from "@/app/components/SliderStoryblok";
import Statut from "@/app/components/Statut";
import NavItem from "@/app/components/NavItem";
import MobileNavItem from "@/app/components/MobileNavItem";
import Well from "@/app/components/WellStoryblok";
import Team from "@/app/components/TeamStoryblok";
import Quote from "@/app/components/Quote";
import SegmentsQuiz from "@/app/components/SegmentsQuiz";
import Newsletter from "@/app/components/Newsletter";
import Navigation from "@/app/components/Navigation";
import JobAds from "@/app/components/JobAds";
import JobAd from "@/app/components/JobAd";
import QuoteContainer from "@/app/components/QuoteContainer";
import ClimateQuiz from "@/app/components/ClimateQuiz";
import ClimateSlides from "@/app/components/ClimateSlides";
import Button from "@/app/components/ButtonStoryblok";
import { getStoryblokApi } from "@storyblok/react/rsc";

const Seo = () => {
  return null;
};

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
  "media container": Media,
  "Media Mention Container": MediaMentions,
  "Media Mention": MediaMention,
  media: MediaProject,
  project: Project,
  projects: Projects,
  "article header": ArticleHeader,
  "climate article header": ClimateArticleHeader,
  "global newsletter": Newsletter,
  "global navigation": Navigation,
  "global footer": Footer,
  "decoration urls": Decoration,
  "navigation item": NavItem,
  "mobile navigation item": MobileNavItem,
  "footer items": FooterItem,
  "footer navigation item": FooterNavLink,
  "segmentation header": SegmentationHeader,
  "segmentation content": SegmentationContent,
  "segments quiz": SegmentsQuiz,
  "segment content": SegmentContent,
  "climate content": ClimateContent,
  trivia: Trivia,
  segment: Segment,
  seo: Seo,
  "job ads": JobAds,
  "job adv": JobAd,
  "quote container": QuoteContainer,
  "climate quiz": ClimateQuiz,
  "climate slides": ClimateSlides,
  "similar articles": SimilarArticles,
  "automatic climate slides": ClimateSlides,
  button: Button,
};

export const fetchPageData = async (url, preview, resolve_relations = "") => {
  const tempPreview = true;
  const sbParams = {
    version: tempPreview ? "draft" : "published",
    resolve_relations,
  };
  const storyblokApi = await getStoryblokApi();
  try {
    const data = await storyblokApi.get(url, sbParams, {
      cache: tempPreview ? "no-cache" : undefined,
      next: {
        revalidate: tempPreview ? undefined : 3600,
      },
    });

    if (!data) {
      console.error("No data returned from the API.");
    }
    return data;
  } catch (error) {
    console.error("Error fetching data from Storyblok API:", error);
  }
};
export const fetchMetadata = async (url) => {
  const sbParams = {
    version: "published",
  };
  const storyblokApi = await getStoryblokApi();

  try {
    const data = await storyblokApi.get(url, sbParams, {
      cache: "no-cache",
    });

    const seoData =
      data?.data?.story?.content?.body?.find((blok) => blok?.component === "seo") || {};

    return {
      title: seoData?.title,
      description: seoData?.description,
      openGraph: {
        title: seoData?.title,
        description: seoData?.description,
        images: [
          {
            url: seoData?.image?.filename,
            alt: seoData?.title,
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error fetching metadata from Storyblok API:", error);
    return {};
  }
};

const colors = {
  blue: {
    bg: "bg-[#EDF0F7]",
    text: "text-brand-darkBlue",
    lineBg: "bg-brand-darkBlue",
  },
  light_maritime: {
    bg: "bg-[#ECF7F6]",
    text: "text-[#197D9A]",
    lineBg: "bg-[#197D9A]",
  },
  dark_maritime: {
    bg: "bg-[#2EA598]",
    text: "text-[#FFF]",
    lineBg: "bg-[#FFF]",
  },
  light_magenta: {
    bg: "bg-[#F0D8E7]",
    text: "text-[#B62C7C]",
    lineBg: "bg-[#B62C7C]",
  },
  dark_magenta: {
    bg: "bg-[#B62C7C]",
    text: "text-[#FFF]",
    lineBg: "bg-[#FFF]",
  },
  light_violet: {
    bg: "bg-[#EDE5F2]",
    text: "text-[#572F8B]",
    lineBg: "bg-[#572F8B]",
  },
  dark_violet: {
    bg: "bg-[#572F8B]",
    text: "text-[#FFF]",
    lineBg: "bg-[#FFF]",
  },
  light_lemon: {
    bg: "bg-[#F4F2C8]",
    text: "text-[#A9A623]",
    lineBg: "bg-[#A9A623]",
  },
  light_green: {
    bg: "bg-[#D0ECDB]",
    text: "text-[#1C6E3B]",
    lineBg: "bg-[#1C6E3B]",
  },
  dark_green: {
    bg: "bg-[#19A54F]",
    text: "text-#FFF",
    lineBg: "#FFF",
  },
  light_celadon: {
    bg: "bg-[#E3EFF2]",
    text: "text-[#197D9A]",
    lineBg: "bg-[#197D9A]",
  },
  dark_celadon: {
    bg: "bg-[#197D9A]",
    text: "text-[#1C6E3B]",
    lineBg: "bg-[#1C6E3B]",
  },
  light_orange: {
    bg: "bg-[#FEF3E3]",
    text: "text-[#CE6C09]",
    lineBg: "bg-[#CE6C09]",
  },
  dark_orange: {
    bg: "bg-[#DC7C0F]",
    text: "text-[#FFF]",
    lineBg: "bg-[#FFF]",
  },
  light_red: {
    bg: "bg-[#F7D1D2]",
    text: "text-[#C41737]",
    lineBg: "bg-[#C41737]",
  },
  dark_red: {
    bg: "bg-[#E7686C]",
    text: "text-[#FFF]",
    lineBg: "bg-[#FFF]",
  },
  light_pink: {
    bg: "bg-[#FCEBF4]",
    text: "text-[#E6536E]",
    lineBg: "bg-[#E6536E]",
  },
  dark_pink: {
    bg: "bg-[#EB5873]",
    text: "text-[#FFF]",
    lineBg: "bg-[#FFF]",
  },
  light_navy: {
    bg: "bg-[#DDE8F6]",
    text: "text-[#445170]",
    lineBg: "bg-[#445170]",
  },
  dark_navy: {
    bg: "bg-[#445170]",
    text: "text-[#FFF]",
    lineBg: "bg-[#FFF]",
  },
};
export const getColors = (color) => {
  if (!color)
    return {
      bg: "bg-[#EDF0F7]",
      text: "text-brand-darkBlue",
      lineBg: "bg-brand-darkBlue",
    };
  return colors[color];
};
