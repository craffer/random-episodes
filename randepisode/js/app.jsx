import React from "react";
import SearchBar from "./searchbar";
import RandomizeButton from "./button";
import SelectedShows from "./selectedshows";
import Result from "./result";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      generated: false,
    };

    this.addShow = this.addShow.bind(this);
    this.removeShow = this.removeShow.bind(this);
  }

  addShow(newShow) {
    this.setState((prevState) => ({
      shows: [...prevState.shows, newShow],
    }));
  }

  removeShow(oldShow) {
    this.setState((prevState) => ({
      shows: prevState.shows.filter((show) => show !== oldShow),
    }));
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="offset-md-4 col-md-4 d-flex flex-column align-items-center">
            <SearchBar addShow={this.addShow} />
            <RandomizeButton />
          </div>
        </div>
        <div className="row">
          <div className="offset-md-2 col-md-8">
            <SelectedShows
              shows={this.state.shows}
              removeShow={this.removeShow}
            />
            <Result />
          </div>
        </div>
      </div>
    );
  }
}
