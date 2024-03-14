export default async function HeaderFour({ text, className = {}, ...rest }) {
  return (
    <h4 className={`text-h4 text-black mb-3 font-bold ${className}`} {...rest}>
      {text}
    </h4>
  );
}
