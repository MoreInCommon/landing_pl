export const urls = {
  home: "/",
  whatWeDo: "/nasze-projekty",
  media: "/w-mediach",
  about: "/o-nas",
  contact: "/kontakt",
  seven: "/siedem-segmentow",
  climate: "/raport-klimatyczny",
};

const greenUrls = [urls.climate];

export const getIfGreenUrl = (url) => (greenUrls.includes(url) ? "bg-themeGreen" : "");
