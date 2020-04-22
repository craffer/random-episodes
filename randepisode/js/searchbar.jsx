import React from "react";
import Autocomplete from "./autocomplete";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="searchArea">
        <input className="searchBar" type="text"></input>
        <Autocomplete />
      </div>
    );
  }
}
