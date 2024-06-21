import { useEffect, useRef, useState } from "react";

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
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full"
      >
        →
      </button>
    );
  };

  const ScrollLeftButton = () => {
    if (!canScrollLeft) return null;
    return (
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full"
      >
        ←
      </button>
    );
  };

  useEffect(() => {
    handleScroll();
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
      return () => containerRef.current.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return { containerRef, ScrollRightButton, ScrollLeftButton };
};

export default useScroll;
