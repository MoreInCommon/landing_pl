"use client";
import { useState, useEffect } from "react";

const ChartEmbed = ({ src }) => {
  // Extract visualization ID from the URL
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const extractVisualizationId = (url) => {
    const regex = /visualisation\/(\d+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const visualizationId = extractVisualizationId(src || "");

  useEffect(() => {
    const scriptId = "flourish-embed-script";
    const embedScriptUrl = "https://public.flourish.studio/resources/embed.js";

    const addScript = () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = embedScriptUrl;
      script.async = true;
      document.body.appendChild(script);
      setScriptLoaded(true);
    };

    addScript();

    return () => {
      const script = document.getElementById(scriptId);
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [visualizationId]);

  if (!scriptLoaded) return null;

  return (
    <div className="mt-10 mb-4 w-[90%] max-w-[950px] m-auto">
      <div
        className="flourish-embed flourish-chart"
        data-src={`visualisation/${visualizationId}`}
      />
    </div>
  );
};

export default ChartEmbed;
