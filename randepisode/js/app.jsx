import React from "react";
import SearchBar from "./searchbar";
import RandomizeButton from "./button";
import SelectedShows from "./selectedshows";
import Result from "./result";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [
        {
          backdrop_path: "/vNpuAxGTl9HsUbHqam3E9CzqCvX.jpg",
          first_air_date: "2005-03-24",
          genre_ids: [35],
          id: 2316,
          name: "The Office",
          origin_country: ["US"],
          original_language: "en",
          original_name: "The Office",
          overview:
            "The everyday lives of office employees in the Scranton, Pennsylvania branch of the fictional Dunder Mifflin Paper Company.",
          popularity: 42.982,
          poster_path: "/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg",
          vote_average: 8.3,
          vote_count: 869,
        },
      ],
      generated: false,
    };
  }

  addShow(newShow) {
    this.setState = {
      shows: [...this.state.shows, newShow],
    };
  }

  render() {
    return (
      <div className="app">
        <SearchBar addShow={this.addShow} />
        <RandomizeButton />
        <SelectedShows shows={this.state.shows} />
        <Result />
      </div>
    );
  }
}
