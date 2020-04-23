import React from "react";

export default class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.visible) {
      console.log(this.props.episode);
      console.log(this.props.show);
      return (
        <div className="result rounded lighter-bg p-2 my-4 offset-md-2 col-md-8">
          <h3>Random Episode:</h3>
          <h4>
            {this.props.show.name}: Season {this.props.episode.season_number},
            Episode {this.props.episode.episode_number}
          </h4>
          <h5>{this.props.episode.name}</h5>
          <p>{this.props.episode.overview}</p>
        </div>
      );
    } else {
      return null;
    }
  }
}
