/** Import your components */
import Page from "@/app/components/Page";
import MainHeader from "@/app/components/MainHeaderStoryblok";
import ArticleHeader from "@/app/components/ArticleHeader";
import StandardText from "@/app/components/StandardText";
import Media from "@/app/components/Media";
import Projects from "@/app/components/Projects";
import Segment from "@/app/components/Segment";
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
  projects: Projects,
  "article header": ArticleHeader,
  "global newsletter": Newsletter,
  "global navigation": Navigation,
  "global footer": Footer,
  "navigation item": NavItem,
  "mobile navigation item": MobileNavItem,
  "footer items": FooterItem,
  "footer navigation item": FooterNavLink,
  "segmentation header": SegmentationHeader,
  "segmentation content": SegmentationContent,
  "segments quiz": SegmentsQuiz,
  trivia: Trivia,
  segment: Segment,
  seo: Seo,
};

export const fetchPageData = async (url) => {
  const sbParams = {
    version: "draft",
  };
  const storyblokApi = await getStoryblokApi();

  try {
    const data = await storyblokApi.get(url, sbParams, { cache: "no-cache" });
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
    version: "draft",
  };
  const storyblokApi = await getStoryblokApi();
  const data = await storyblokApi?.get(url, sbParams, {
    cache: "no-cache",
  });

  const seoData = data?.data?.story?.content?.body?.find((blok) => blok?.component === "seo") || {};

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
};
