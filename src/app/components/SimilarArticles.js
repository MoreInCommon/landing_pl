"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CenterContainer from "@/app/components/CenterContainer";

const SimilarArticles = ({ blok }) => {
  const articles = blok.urls;
  const { push } = useRouter();
  const changePage = (e, url) => {
    e.preventDefault();
    const currentUrl = window.location.href;
    push(`${url}`);
    window.location.href = url;
    window.history.replaceState(null, "", currentUrl);
  };
  return (
    <CenterContainer>
      <h2 className="text-[32px] mt-10 font-bold">Powiązane artykuły</h2>
      <div className="flex gap-4 my-8 mt-10 mb-10 overflow-x-scroll justify-center">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/${article.full_slug}`}
            onClick={(e) => changePage(e, `/${article.full_slug}`)}
            className="flex p-6 flex-col items-center gap-2 border-[1px] border-mono-neutral22 min-w-[225px]"
          >
            <h4 className="text-h4 text-black text-center min-h-[60px]">{article.name}</h4>
            <img
              className="min-h-[180px] object-contain"
              src={
                article?.content?.body?.find((c) => c.component === "article header")?.image
                  ?.filename ||
                article?.content?.body?.find((c) => c.component === "seo")?.image?.filename
              }
              alt="img"
            />
            <p className="text-black flex items-center self-end mt-2">
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
    </CenterContainer>
  );
};

export default SimilarArticles;
