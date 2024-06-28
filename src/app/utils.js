/** Import your components */
import Page from "@/app/components/Page";
import MainHeader from "@/app/components/MainHeaderStoryblok";
import MediaProject from "@/app/components/MediaProject";
import ArticleHeader from "@/app/components/ArticleHeader";
import ClimateArticleHeader from "@/app/components/ClimateArticleHeader";
import StandardText from "@/app/components/StandardText";
import Media from "@/app/components/Media";
import Projects from "@/app/components/Projects";
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
