import React from "react";

export default class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.visible) {
      return (
        <div className="result">
          <h3>Random Episode:</h3>
          <h4>
            {this.props.show.name}: Season {this.props.episode.season_number},
            Episode {this.props.episode.episode_number}
          </h4>
          <h3>{this.props.episode.name}</h3>
        </div>
      );
    } else {
      return null;
    }
  }
}
