import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const useScroll = () => {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const ScrollRightButton = () => {
    if (!canScrollRight) return null;
    return (
      <button
        onClick={scrollRight}
        className="absolute top-1/2 transform -translate-y-1/2 p-1 right-[180px] bg-black rounded-full"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="arrow_back">
            <path
              id="Vector"
              d="M4 11H16.17L10.58 5.41L12 4L20 12L12 20L10.59 18.59L16.17 13H4V11Z"
              fill="white"
            />
          </g>
        </svg>
      </button>
    );
  };

  const ScrollLeftButton = () => {
    if (!canScrollLeft) return null;
    return (
      <button
        onClick={scrollLeft}
        className="absolute top-1/2 transform -translate-y-1/2 p-1 left-[180px] rotate-180 bg-black rounded-full"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="arrow_back">
            <path
              id="Vector"
              d="M4 11H16.17L10.58 5.41L12 4L20 12L12 20L10.59 18.59L16.17 13H4V11Z"
              fill="white"
            />
          </g>
        </svg>
      </button>
    );
  };

  useEffect(() => {
    const currentContainer = containerRef.current;
    handleScroll();
    if (currentContainer) {
      currentContainer.addEventListener("scroll", handleScroll);
      return () => currentContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return { containerRef, ScrollRightButton, ScrollLeftButton };
};

export default useScroll;
