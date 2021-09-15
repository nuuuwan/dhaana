import { Component } from "react";

import Data from "../../core/Data.js";

import CharityListView from "../../nonstate/molecules/CharityListView.js";

import "./HomePage.css";

const URL_SOURCE =
  "http://www.ird.gov.lk" +
  "/en/publications/SitePages/Approved%20Charity.aspx" +
  "?menuid=1408";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { charityList: null };
  }

  async componentDidMount() {
    const charityList = await Data.getCharityList();
    this.setState({ charityList });
  }

  render() {
    const { charityList } = this.state;
    if (!charityList) {
      return "Loading...";
    }
    return (
      <div className="div-home-page">
        <div className="div-header">
          <div className="div-title">Charities in Sri Lanka</div>
          <div className="div-source">
            {"Source: "}
            <a
              className="a-source"
              href={URL_SOURCE}
              target="_blank"
              rel="noreferrer"
            >
              ird.gov.lk
            </a>
          </div>
        </div>
        <div className="div-body">
          <div className="div-preamble">
            <p>
              I’ve been searching the web and elsewhere for a list of Sri Lankan
              charities. The best I could found was this list of 81 approved
              charities on the{" "}
              <a href={URL_SOURCE} target="_blank" rel="noreferrer">
                Inland Revenue Department
              </a>{" "}
              Website. It was last updated in December 2019 — so there might be
              some charities not on the list.
            </p>
          </div>
          <CharityListView charityList={charityList} />
        </div>
      </div>
    );
  }
}
