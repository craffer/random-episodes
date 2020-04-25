import React from "react";

export default class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.visible) {
      return (
        <div className="result rounded lighter-bg p-2 my-4 offset-md-2 col-md-8">
          <h5>You should watch...</h5>
          <div>
            {this.props.show.name}: Season {this.props.episode.season_number}
          </div>
          <h4>
            Episode {this.props.episode.episode_number}:{" "}
            {this.props.episode.name}
          </h4>
          <p>{this.props.episode.overview}</p>
        </div>
      );
    } else {
      return null;
    }
  }
}
