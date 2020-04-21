import React from "react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <input className="searchBar" type="text"></input>;
  }
}
