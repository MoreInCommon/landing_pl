export default async function HeaderFour({ text, className = {}, ...rest }) {
  return (
    <h4 className={`text-h4 font-bold ${className}`} {...rest}>
      {text}
    </h4>
  );
}
