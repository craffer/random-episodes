import React from "react";

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let options = [];
    if (this.props.results) {
      this.props.results.forEach((result) => {
        options.push(
          <button
            type="button"
            className="list-group-item list-group-item-action ac-result"
          >
            <div>{`${result.name} (${result.origin_country[0]})`}</div>
          </button>
        );
      });
      return (
        <ul
          className="list-group text-dark position-absolute w-100 d-block ac-results"
          id="autocomplete"
        >
          {options}
        </ul>
      );
    }
  }
}
