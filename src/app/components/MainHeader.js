export default async function MainHeader({ text, className = null }) {
  return (
    <div className="max-w-full m-auto px-full max-xl:px-tablet max-sm:px-mobile">
      <div className={`inline-block heading-underline mb-3 ${className || ""}`}>
        <h1 className="text-black text-h1 font-bold mt-2 pr-4 relative z-[1]">{text}</h1>
      </div>
    </div>
  );
}
