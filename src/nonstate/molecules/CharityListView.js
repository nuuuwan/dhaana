import CharityView from "./CharityView.js";

import "./CharityListView.css";

export default function CharityListView(props) {
  const { charityList } = props;

  return (
    <div className="div-charity-list-view">
      {charityList.map(function (charity, iCharity) {
        const key = `charity-${iCharity}`;
        return <CharityView key={key} charity={charity} iCharity={iCharity} />;
      })}
    </div>
  );
}
