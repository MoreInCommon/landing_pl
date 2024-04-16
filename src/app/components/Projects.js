"use client";
import Project from "@/app/components/Project";

const Projects = ({ blok }) => {
  return (
    <>
      <div className="flex gap-10 flex-wrap mt-20 items-stretch max-w-full m-auto w-full px-full max-xl:px-tablet max-sm:px-mobile max-lg:justify-center">
        {blok.project.map((project) => (
          <Project
            classes="bg-white p-6 border-t-[6px] border-brand-darkBlue flex-[47%] max-md:flex-[75%] w-1/2 flex flex-col max-w-1/2 max-md:max-w-[100%] hover:shadow-tile-shadow transition-shadow"
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
