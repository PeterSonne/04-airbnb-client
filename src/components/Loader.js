import React, { Component } from "react";
import "../styles/loader.css";

export class Loader extends Component {
  render() {
    return (
      <div style={{ display: this.props.loading ? "block" : "none" }}>
        <div className="loader"></div>
      </div>
    );
  }
}

export default Loader;
