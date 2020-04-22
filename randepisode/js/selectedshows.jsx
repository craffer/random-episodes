import React from "react";

export default class SelectedShows extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let selectedShows = [];
    this.props.shows.forEach((show) => {
      selectedShows.push(
        <div className="show d-flex flex-column align-items-center">
          <img src={`https://image.tmdb.org/t/p/w185/${show.poster_path}`} />
          <h5 className="mt-1">{show.name}</h5>
        </div>
      );
    });
    return (
      <div>
        <h5>Selected Shows:</h5>
        <div className="selected-shows d-flex flex-row mt-2">
          {selectedShows}
        </div>
      </div>
    );
  }
}
