import Image from "next/image";

export default async function ImageComponent({ src, width, height }) {
  return (
    <div className="flex justify-center mb-10 mt-10">
      <Image src={src} alt="More in common" width={width} height={height} />
    </div>
  );
}
