import React from "react";

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.shows !== undefined && this.props.shows.length > 0) {
      const url = "/api/v1/generate";
      let shows = [];
      this.props.shows.forEach((show) => {
        shows.push(show.id);
      });
      console.log(JSON.stringify(shows));
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shows),
      })
        .then((response) => {
          if (!response.ok) throw Error(response.statusText);
          return response.json();
        })
        .then((data) => {
          this.props.updateEpisode(data.episode);
        })
        .catch((error) => console.log(error));
    }
  }

  render() {
    return (
      <button
        type="submit"
        className="btn btn-primary mt-2"
        onClick={this.handleClick}
      >
        Randomize
      </button>
    );
  }
}
