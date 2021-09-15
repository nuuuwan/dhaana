export default function CharityView(props) {
  const { charity } = props;

  return <div className="div-charity-view">{JSON.stringify(charity)}</div>;
}
