import React from "react";
import Autocomplete from "./autocomplete";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
    };

    this.onChange = this.onChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
    this.search = this.search.bind(this);
  }

  onChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  keyPress(event) {
    if (event.key === "Enter") {
      this.search();
    }
  }

  search() {
    if (this.state.query) {
      const url = `/api/v1/search?q=${encodeURI(this.state.query)}`;
      fetch(url, { credentials: "same-origin" })
        .then((response) => {
          if (!response.ok) throw Error(response.statusText);
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.log(error));
    }
  }

  render() {
    return (
      <div className="searchArea w-100">
        <input
          className="mt-5 rounded searchbar w-100"
          type="text"
          placeholder="Enter a TV show"
          value={this.state.query}
          onChange={this.onChange}
          onKeyPress={this.keyPress}
        />
        <Autocomplete />
      </div>
    );
  }
}
