export default async function StandardText({ text }) {
  return (
    <div className="max-w-[1440px] m-auto w-full px-[100px]">
      <p className="text-black max-w-[765px] w-full mb-3 text-bodyRegular">{text}</p>
    </div>
  );
}
