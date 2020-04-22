import React from "react";

export default class SelectedShows extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let selectedShows = [];
    this.props.shows.forEach((show) => {
      selectedShows.push(
        <div className="show">
          <img src={`https://image.tmdb.org/t/p/w154/${show.poster_path}`} />
          <div>{show.name}</div>
          <div>{show.overview}</div>
        </div>
      );
    });
    return <div className="selected-shows">{selectedShows}</div>;
  }
}
