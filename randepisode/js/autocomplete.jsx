import React from "react";

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.onResultClick = this.onResultClick.bind(this);
  }

  onResultClick(newShow) {
    this.props.clearSearch();
    this.props.addShow(newShow);
  }

  render() {
    let options = [];
    if (this.props.results) {
      this.props.results.forEach((result) => {
        options.push(
          <ACResult
            key={result.id}
            value={result}
            onResultClick={this.onResultClick}
          />
        );
      });
      return (
        <ul
          className="list-group text-dark w-100 ac-results position-relative overflow-auto"
          id="autocomplete"
          role="menu"
          ref={(ul) => (this.ul = ul)}
        >
          {options}
        </ul>
      );
    }
  }
}

class ACResult extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onResultClick(this.props.value);
  }

  render() {
    return (
      <button
        type="button"
        className="list-group-item list-group-item-action ac-result"
        onClick={this.handleClick}
      >
        <div>{`${this.props.value.name} (${this.props.value.origin_country[0]})`}</div>
      </button>
    );
  }
}
