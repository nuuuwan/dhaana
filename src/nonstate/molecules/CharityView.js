import Link from "../atoms/Link.js";
import "./CharityView.css";

export default function CharityView(props) {
  const { charity } = props;
  const { name, url, can_donate_offline, can_donate_online } = charity;

  const renderDonateOffline =
    can_donate_offline !== "NO" ? (
      <Link href={can_donate_offline} label="Donate Offline" />
    ) : null;
  const renderDonateOnline =
    can_donate_online !== "NO" ? (
      <Link href={can_donate_online} label="Donate Online" />
    ) : null;

  return (
    <div className="div-charity-view">
      <div className="div-charity-name">{name}</div>
      <Link href={url} label="Website" />
      {renderDonateOnline}
      {renderDonateOffline}
    </div>
  );
}
