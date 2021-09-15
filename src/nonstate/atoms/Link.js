export default function Link(props) {
  const { href, label } = props;
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {label}
    </a>
  );
}
