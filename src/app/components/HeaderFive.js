export default async function HeaderFive({ text, className = {}, ...rest }) {
  return (
    <h5 className={`text-h5 font-bold ${className}`} {...rest}>
      {text}
    </h5>
  );
}
