import React from "react";
import Deselect from "./deselect";

export default class SelectedShows extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.shows.length > 0) {
      let selectedShows = [];
      this.props.shows.forEach((show) => {
        selectedShows.push(
          <div className="show d-flex flex-column align-items-center mx-3">
            <div className="poster position-relative">
              <img
                src={`https://image.tmdb.org/t/p/w185/${show.poster_path}`}
              />
              <Deselect removeShow={this.props.removeShow} />
            </div>
            <h5 className="mt-1">{show.name}</h5>
          </div>
        );
      });
      return (
        <div>
          <h5>Selected Shows:</h5>
          <div className="selected-shows d-flex flex-row mt-2 flex-wrap w-100 align-items-around">
            {selectedShows}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
