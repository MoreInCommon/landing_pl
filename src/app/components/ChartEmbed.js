import Script from "next/script";
const ChartEmbed = ({ src }) => {
  // Extract visualization ID from the URL
  function extractVisualizationId(url) {
    const regex = /visualisation\/(\d+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

  const visualizationId = extractVisualizationId(src || "");

  return (
    <div className="mt-10 mb-4 w-[90%] max-w-[950px] m-auto">
      <div className="flourish-embed flourish-chart" data-src={`story/${visualizationId}`}>
        <Script src="https://public.flourish.studio/resources/embed.js"></Script>
      </div>
    </div>
  );
};

export default ChartEmbed;
