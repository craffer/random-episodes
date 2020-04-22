import React from "react";

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let options = [];
    if (this.props.results) {
      console.log(this.props.results);
      this.props.results.forEach((result) => {
        options.push(
          <option value={`${result.name} (${result.origin_country[0]})`}>
            {result.overview}
          </option>
        );
      });
      return <datalist id="autocomplete">{options}</datalist>;
    }
  }
}
