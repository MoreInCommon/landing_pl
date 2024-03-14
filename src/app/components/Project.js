"use client";
import Image from "next/image";
import Link from "next/link";
import Image1 from "../../../public/tempImages/image22.png";
import Button from "@/app/components/Button";
import ButtonText from "@/app/components/ButtonText";

const Project = ({ project, classes }) => {
  return (
    <Link href={project.url} className={classes}>
      <div className="h-[350px] relative mb-6">
        <Image
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={project.img}
          alt=""
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </div>
      <p className="text-grey-medium text-captionRegular mb-1">{project.date}</p>
      <p className=" text-brand-darkBlue inline-block uppercase  font-bodySmall w-fit font-bold mb-3 rounded empty:hidden">
        {project.medium}
      </p>
      <h4 className="text-h4 text-mono-neutral11 mb-2 font-bold">{project.title}</h4>
      <p className="text-bodyRegular text-mono-neutral11 mb-[44px]">{project.description}</p>
      <div className="flex items-center justify-end gap-2 mt-auto">
        <ButtonText onClick={() => console.log(project.downloadUrl)}>
          <div className="relative top-[2px]">Raport</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_1828_1833"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1828_1833)">
              <path
                d="M12 15.7884L7.7308 11.5193L8.78462 10.4347L11.25 12.9V4.5H12.7499V12.9L15.2153 10.4347L16.2692 11.5193L12 15.7884ZM6.3077 19.5C5.80257 19.5 5.375 19.325 5.025 18.975C4.675 18.625 4.5 18.1974 4.5 17.6923V14.9808H5.99997V17.6923C5.99997 17.7692 6.03202 17.8397 6.09612 17.9038C6.16024 17.9679 6.23077 18 6.3077 18H17.6922C17.7692 18 17.8397 17.9679 17.9038 17.9038C17.9679 17.8397 18 17.7692 18 17.6923V14.9808H19.5V17.6923C19.5 18.1974 19.325 18.625 18.975 18.975C18.625 19.325 18.1974 19.5 17.6922 19.5H6.3077Z"
                className="fill-current"
              />
            </g>
          </svg>
        </ButtonText>
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
              stroke="transparent"
              strokeWidth="0.5"
            />
          </svg>
        </Button>
      </div>
    </Link>
  );
};

export default Project;
