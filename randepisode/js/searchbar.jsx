import React from "react";
import Autocomplete from "./autocomplete";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="searchArea w-100">
        <input
          className="mt-5 rounded searchbar w-100"
          type="text"
          placeholder="Enter a TV show"
        />
        <Autocomplete />
      </div>
    );
  }
}
