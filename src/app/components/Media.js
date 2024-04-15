"use client";
import Pagination from "@/app/components/Pagination";
import Project from "@/app/components/Project";

const Media = ({ blok }) => {
  return (
    <>
      <div className="flex gap-4 flex-wrap mt-[72px] items-stretch max-w-full m-auto px-full max-xl:px-tablet max-sm:px-mobile max-lg:justify-center ">
        {blok.media.map((project) => (
          <Project
            classes="bg-white p-6 border-t-4 border-brand-darkBlue flex-[31%] max-lg:max-w-[46%] max-sm:max-w-[95%] flex flex-col max-w-[31%] hover:shadow-tile-shadow transition-shadow"
            key={project.title}
            project={project}
          />
        ))}
      </div>
      <div className="flex justify-center mt-20">
        <Pagination currentPage={3} totalPages={8} />
      </div>
    </>
  );
};

export default Media;
