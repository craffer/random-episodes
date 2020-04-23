import React from "react";

export default class SelectedShows extends React.Component {
  constructor(props) {
    super(props);

    this.onRemove = this.onRemove.bind(this);
  }

  onRemove(show) {
    this.props.removeShow(show);
  }

  render() {
    if (this.props.shows.length > 0) {
      let selectedShows = [];
      this.props.shows.forEach((show) => {
        selectedShows.push(<Show show={show} onRemove={this.onRemove} />);
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

class Show extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onRemove(this.props.show);
  }

  render() {
    return (
      <div className="show d-flex flex-column align-items-center mx-3">
        <div className="poster position-relative">
          <img
            className="rounded shadow-lg"
            src={`https://image.tmdb.org/t/p/w185/${this.props.show.poster_path}`}
          />
          <button
            type="button"
            className="close position-absolute deselect"
            aria-label="Close"
            onClick={this.handleClick}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="mt-1">{this.props.show.name}</div>
      </div>
    );
  }
}
