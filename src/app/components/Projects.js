"use client";
import { StoryblokComponent } from "@storyblok/react";

const Projects = ({ blok }) => {
  const copiedProjects = [...blok.project];
  const sortedProjects = copiedProjects.sort((a, b) => {
    return (
      (a.created_at ? new Date(a.created_at) : new Date()) -
      (b.created_at ? new Date(b.created_at) : new Date())
    );
  });
  sortedProjects.reverse();
  return (
    <>
      <div className="flex gap-10 flex-wrap mt-20 items-stretch max-w-full m-auto w-full px-full max-xl:px-tablet max-sm:px-mobile max-lg:justify-center">
        {sortedProjects.map((item) => (
          <StoryblokComponent key={item._uid} blok={item} />
        ))}
      </div>
    </>
  );
};

export default Projects;
