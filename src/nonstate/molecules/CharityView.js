import Link from "../atoms/Link.js";
import "./CharityView.css";

export default function CharityView(props) {
  const { charity } = props;
  const {
    name,
    url,
    gazette_date,
    can_donate_offline,
    can_donate_online,
    description,
  } = charity;

  const renderedGazetteDate =
    gazette_date.length === 10 ? (
      <div className="div-gazette-date">Gazetted on {gazette_date}</div>
    ) : null;

  const renderedDonateOffline =
    can_donate_offline !== "NULL" ? (
      <Link
        href={can_donate_offline}
        label="Donate Offline"
        linkType="highlight"
      />
    ) : null;
  const renderedDonateOnline =
    can_donate_online !== "NULL" ? (
      <Link
        href={can_donate_online}
        label="Donate Online"
        linkType="highlight"
      />
    ) : null;

  const renderedDescription =
    description !== "NULL" ? (
      <div className="div-description">{`"${description}"`}</div>
    ) : null;

  return (
    <div className="div-charity-view">
      <div className="div-charity-name">{name}</div>
      {renderedDescription}
      {renderedDonateOnline}
      {renderedDonateOffline}
      <Link href={url} label="Website" />
      {renderedGazetteDate}
    </div>
  );
}
