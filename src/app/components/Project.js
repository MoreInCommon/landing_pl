"use client";
import Button from "@/app/components/Button";
import ButtonText from "@/app/components/ButtonText";
import { storyblokEditable } from "@storyblok/react";
import { useRouter } from "next/navigation";

const Project = ({ blok }) => {
  const formatter = new Intl.DateTimeFormat("pl", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const download = (url) => {
    window.open(url, "_blank");
  };

  const { push } = useRouter();
  const changePage = (e, url) => {
    e.preventDefault();
    const currentUrl = window.location.href;
    push(`${url}`);
    window.location.href = url;
    window.history.replaceState(null, "", currentUrl);
  };

  return (
    <div
      rel="noopener noreferrer"
      className="bg-white p-6 border-t-[6px] border-brand-darkBlue flex-[47%] max-md:flex-[75%] w-1/2 flex flex-col max-w-1/2 max-md:max-w-[100%] hover:shadow-tile-shadow transition-shadow"
      {...storyblokEditable(blok)}
    >
      <a href={blok.url.url || blok.url.cached_url} target="_blank">
        <div className="relative mb-6 flex">
          <img
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={blok.img.filename}
            alt=""
            style={{
              objectFit: "contain",
              maxHeight: 300,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </div>
        <p className="text-grey-medium text-captionRegular mb-1">
          {formatter?.format(blok?.date ? new Date(blok?.date) : new Date())}
        </p>
        <p className=" text-brand-darkBlue inline-block uppercase  font-bodySmall w-fit font-bold mb-3 rounded empty:hidden">
          {blok?.medium}
        </p>
        <h4 className="text-h4 text-mono-neutral11 mb-2 font-bold">{blok?.title}</h4>
        <p className="text-bodyRegular text-mono-neutral11 mb-[44px]">{blok?.description}</p>
      </a>
      <div className="flex items-center justify-end gap-2 mt-auto">
        {blok?.downloadUrl?.filename && (
          <ButtonText onClick={() => download(blok?.downloadUrl?.filename)}>
            <div className="relative top-[2px]">Raport</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_1700_7164"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1700_7164)">
                <path
                  d="M12 16.5462L6.87697 11.4231L8.14157 10.1216L11.1 13.0801V3H12.9V13.0801L15.8584 10.1216L17.123 11.4231L12 16.5462ZM5.16925 21C4.56309 21 4.05 20.79 3.63 20.37C3.21 19.95 3 19.4369 3 18.8308V15.5769H4.79998V18.8308C4.79998 18.9231 4.83844 19.0077 4.91536 19.0846C4.9923 19.1616 5.07693 19.2 5.16925 19.2H18.8307C18.9231 19.2 19.0077 19.1616 19.0846 19.0846C19.1616 19.0077 19.2 18.9231 19.2 18.8308V15.5769H21V18.8308C21 19.4369 20.79 19.95 20.37 20.37C19.95 20.79 19.4369 21 18.8307 21H5.16925Z"
                  fill="#224099"
                />
              </g>
            </svg>
          </ButtonText>
        )}
        <Button
          onClick={(e) => changePage(e, `/${blok.url.url || blok.url.cached_url}`)}
          classes="bg-themeableColors-darkBlue"
        >
          <div className="relative top-[1px]">Czytaj dalej</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 11H17.17L13.59 7.41L15 6L21 12L15 18L13.59 16.59L17.17 13H3V11Z"
              fill="white"
              stroke="transparent"
              strokeWidth="0.5"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default Project;
