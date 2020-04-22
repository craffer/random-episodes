import React from "react";

export default class Deselect extends React.Component {
  constructor(props) {
    super(props);

    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(event) {
    // oldShow = null; // TODO
    // this.props.removeShow(oldShow);
    console.log("X clicked!");
    console.log(event);
    event.preventDefault();
  }

  render() {
    return (
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={this.buttonClick}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    );
  }
}
