import React from "react";
import Autocomplete from "./autocomplete";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      results: [],
    };

    this.onChange = this.onChange.bind(this);
    this.clearState = this.clearState.bind(this);
    this.keyPress = this.keyPress.bind(this);
    this.search = this.search.bind(this);
  }

  onChange(event) {
    this.setState({
      query: event.target.value,
    });
    if (event.target.value === "") {
      this.setState({
        results: [],
      });
    }
  }

  clearState() {
    this.setState({
      query: "",
      results: [],
    });
    this.input.focus();
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
          this.setState({
            results: data.results.slice(0, 10),
          });
        })
        .catch((error) => console.log(error));
    }
  }

  render() {
    return (
      <div className="searchArea w-100">
        <input
          className="rounded searchbar w-100"
          type="text"
          placeholder="Enter a TV show"
          ref={(input) => (this.input = input)}
          value={this.state.query}
          onChange={this.onChange}
          onKeyPress={this.keyPress}
        />
        <Autocomplete
          results={this.state.results}
          addShow={this.props.addShow}
          clearSearch={this.clearState}
        />
      </div>
    );
  }
}
