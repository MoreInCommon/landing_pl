export default async function MainHeader({ text, className = {} }) {
  return (
    <div className={`inline-block heading-underline mb-3 ${className}`}>
      <h1 className="text-black text-h1 font-bold mt-2 pr-4 relative z-[1]">{text}</h1>
    </div>
  );
}
