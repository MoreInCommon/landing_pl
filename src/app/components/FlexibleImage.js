import Image from "next/image";

const FlexibleImage = ({ blok }) => {
  const src = blok?.image?.filename || blok?.image || "/batory.png";
  const maxHeight = blok?.max_height ? Number(blok.max_height) : 40;
  const maxWidth = blok?.max_width ? blok.max_width : 220;

  return (
    <div className="flex justify-center">
      <div
        style={{
          width: "100%",
          maxWidth: `${maxWidth}px`,
          height: `${maxHeight}px`,
          position: "relative",
        }}
      >
        <Image src={src} alt={blok?.alt || "image"} fill style={{ objectFit: "contain" }} />
      </div>
    </div>
  );
};

export default FlexibleImage;
