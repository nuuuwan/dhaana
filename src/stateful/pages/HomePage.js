import { Component } from "react";

import Data from "../../core/Data.js";

import CharityListView from "../../nonstate/molecules/CharityListView.js";

import './HomePage.css';

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
        <div className="div-header">Charities in Sri Lanka</div>
        <div className="div-body">
          <CharityListView charityList={charityList} />
        </div>
      </div>
    );
  }
}
