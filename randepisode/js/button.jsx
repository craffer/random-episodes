import React from "react";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button type="submit" className="btn btn-primary mt-2">
        Randomize
      </button>
    );
  }
}
