"use client";
import { useState } from "react";
import Pagination from "@/app/components/Pagination";
import { StoryblokComponent } from "@storyblok/react";
import { storyblokEditable } from "@storyblok/react";

const MediaMentions = ({ blok }) => {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(0);
  const copiedMedia = [...blok.media];
  const sortedMedia = copiedMedia.sort((a, b) => new Date(b.date) - new Date(a.date));
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = sortedMedia.slice(startIndex, endIndex);
  const totalPages = Math.ceil(sortedMedia.length / itemsPerPage);

  const changePage = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div
        className="flex gap-10 flex-wrap mt-[72px] items-stretch max-w-full m-auto px-full max-xl:px-tablet max-sm:px-mobile max-lg:justify-center"
        {...storyblokEditable(blok)}
      >
        {currentItems.map((item) => (
          <StoryblokComponent key={item._uid} blok={item} />
        ))}
      </div>
      <div className="flex justify-center mt-[64px]">
        <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={changePage} />
      </div>
    </>
  );
};

export default MediaMentions;
