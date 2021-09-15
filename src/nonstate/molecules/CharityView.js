import "./CharityView.css";

export default function CharityView(props) {
  const { charity } = props;
  const { name, url, can_donate_offline, can_donate_online } = charity;

  const renderDonateOffline =
    can_donate_offline !== "NO" ? <div>{can_donate_offline}</div> : null;
  const renderDonateOnline =
    can_donate_online !== "NO" ? <div>{can_donate_online}</div> : null;

  return (
    <div className="div-charity-view">
      <div className="div-charity-name">{name}</div>
      <div className="div-charity-url">
        <a
          className="a-charity-url"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          {url}
        </a>
      </div>
      {renderDonateOnline}
      {renderDonateOffline}
    </div>
  );
}
