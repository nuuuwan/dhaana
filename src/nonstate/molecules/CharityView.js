import './CharityView.css';

export default function CharityView(props) {
  const { charity } = props;
  const {name, url, can_donate_offline, can_donate_online} = charity;

  const renderDonateOffline = (can_donate_offline === 'YES') ? (
      <div>
        Can donate offline
      </div>
    ): null;
    const renderDonateOnline = (can_donate_online === 'YES') ? (
        <div>
          Can donate online
        </div>
      ): null;

  return (
    <div className="div-charity-view">
      <div className="div-charity-name">
        {name}
      </div>
      <div className="div-charity-url">
        <a className="a-charity-url" href={url}>{url}</a>
      </div>
      {renderDonateOnline}
      {renderDonateOffline}      
    </div>
  );
}
