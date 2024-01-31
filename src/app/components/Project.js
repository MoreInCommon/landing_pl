"use client";
import Image from "next/image";
import Link from "next/link";
import Image1 from "../../../public/tempImages/image22.png";
import Button from "@/app/components/Button";

const Project = ({ project }) => {
  return (
    <Link
      href={project.url}
      className="bg-white p-6 border-t-4 border-brand-darkBlue flex-[48%] w-1/2 flex flex-col max-w-1/2 hover:shadow transition-shadow"
    >
      <div className="h-[350px] relative mb-6">
        <Image
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={project.img}
          alt=""
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </div>
      <p className="text-grey-medium text-captionRegular mb-4">{project.date}</p>
      <h4 className="text-h4 text-mono-neutral11 mb-6 font-bold">{project.title}</h4>
      <p className="text-bodyRegular text-mono-neutral11 mb-10">{project.description}</p>
      <div className="flex items-center justify-end gap-2 mt-auto">
        <Button onClick={() => console.log(project.downloadUrl)}>
          <div className="relative top-[1px]">Raport</div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="file_download">
              <path
                id="Vector"
                d="M18.75 15.375V18.75H5.25V15.375H3V18.75C3 19.9875 4.0125 21 5.25 21H18.75C19.9875 21 21 19.9875 21 18.75V15.375H18.75ZM17.625 10.875L16.0387 9.28875L13.125 12.1912V3H10.875V12.1912L7.96125 9.28875L6.375 10.875L12 16.5L17.625 10.875Z"
                fill="white"
                stroke="#10BEE8"
                strokeWidth="0.75"
              />
            </g>
          </svg>
        </Button>
        <Button
          onClick={() => console.log(project.url)}
          classes="bg-brand-green hover:bg-hover-green"
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
              stroke="#009E59"
              strokeWidth="0.5"
            />
          </svg>
        </Button>
      </div>
    </Link>
  );
};

export default Project;
