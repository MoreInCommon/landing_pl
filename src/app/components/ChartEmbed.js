const ChartEmbed = ({ src }) => {
  function extractVisualizationId(url) {
    const regex = /visualisation\/(\d+)/;
    const match = url.match(regex);
    return match ? match[0] : null;
  }
  const visualizationId = extractVisualizationId(src || "");
  console.log(visualizationId);
  return (
    <div className="mt-10 mb-4 w-[90%] max-w-[950px] m-auto">
      {""}
      <div class="flourish-embed flourish-chart" data-src={visualizationId} />
      {""}
    </div>
  );
};

export default ChartEmbed;
