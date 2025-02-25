const FullSizeEmbed = ({ blok }) => {
  return (
    <div className="relative w-[95%] max-w-[1500px] mx-auto pt-[56.25%] mt-8 mb-10 overflow-hidden rounded-2xl">
      <iframe
        loading="lazy"
        src={blok?.iframe?.url || blok?.iframe?.cached_url}
        allowFullScreen
        allow="fullscreen"
        className="absolute top-0 left-0 w-full h-full"
        style={{
          border: "none",
          padding: 0,
          margin: 0,
        }}
      />
    </div>
  );
};

export default FullSizeEmbed;
