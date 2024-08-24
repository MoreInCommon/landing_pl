"use client";
import { useState, useEffect } from "react";

const ChartEmbed = ({ src }) => {
  // Extract visualization ID from the URL
  const extractVisualizationId = (url) => {
    const regex = /visualisation\/(\d+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };
  const extractStoryId = (url) => {
    const regex = /story\/(\d+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const visualizationId = extractVisualizationId(src || "");
  const storyId = extractStoryId(src || "");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const addScript = () => {
        setTimeout(() => {
          let existingScript = document.getElementById("flourish-embed-script");
          if (!existingScript) {
            const script = document.createElement("script");
            script.id = "flourish-embed-script";
            script.src = "https://public.flourish.studio/resources/embed.js";
            script.async = true;
            document.body.appendChild(script);
          }
        }, 1000);
      };

      addScript();
    }
  }, [src]);

  return (
    <div className="mt-10 mb-4 w-[90%] max-w-[950px] m-auto">
      <div
        className="flourish-embed flourish-chart"
        data-src={visualizationId ? `visualisation/${visualizationId}` : `story/${storyId}`}
      />
    </div>
  );
};

export default ChartEmbed;
