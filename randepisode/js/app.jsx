import React from "react";
import SearchBar from "./searchbar";
import RandomizeButton from "./randomize";
import SelectedShows from "./selectedshows";
import Result from "./result";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      generated: false,
      randomEpisode: {},
      randomShow: {},
    };

    this.addShow = this.addShow.bind(this);
    this.removeShow = this.removeShow.bind(this);
    this.updateEpisode = this.updateEpisode.bind(this);
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

  updateEpisode(newEpisode, newShow) {
    this.setState({
      generated: true,
      randomEpisode: newEpisode,
      randomShow: newShow,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="offset-md-2 col-md-8 rounded lighter-bg text-dark d-flex flex-column align-items-center p-3 my-4">
            <SearchBar addShow={this.addShow} />
            <RandomizeButton
              shows={this.state.shows}
              updateEpisode={this.updateEpisode}
            />
          </div>
        </div>
        <div className="row">
          <Result
            visible={this.state.generated}
            episode={this.state.randomEpisode}
            show={this.state.randomShow}
          />
        </div>
        <div className="row">
          <SelectedShows
            shows={this.state.shows}
            removeShow={this.removeShow}
          />
        </div>
      </div>
    );
  }
}
