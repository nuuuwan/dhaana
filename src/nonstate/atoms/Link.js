import './Link.css';
export default function Link(props) {
  const { href, label } = props;
  return (
    <a className="a-link" href={href} target="_blank" rel="noreferrer">
      {label}
    </a>
  );
}
