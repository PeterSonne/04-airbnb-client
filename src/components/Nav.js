import React from "react";
import "../styles/nav.css";

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <a href="/" className="logo"></a>
        <div className="profile">
          <a href="/plus" className="button">
            <span>Airbnb Plus</span>
          </a>
        </div>
      </nav>
    );
  }
}
