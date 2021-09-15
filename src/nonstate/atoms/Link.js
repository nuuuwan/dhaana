import "./Link.css";
export default function Link(props) {
  const { href, label, linkType } = props;
  return (
    <a
      className={`a-link a-link-${linkType}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  );
}
