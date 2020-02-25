import React from "react";
import { Link } from "react-router-dom";

class Pin extends React.Component {
  state = {
    house: this.props.house,
    lat: this.props.lat,
    lng: this.props.lng
  };
  componentWillMount() {
    this.setState({
      house: this.props.house,
      lat: this.props.lat,
      lng: this.props.lng
    });
  }
  componentWillReceiveProps(props) {
    this.setState({
      house: this.props.house,
      lat: this.props.lat,
      lng: this.props.lng
    });
  }
  mouseEnter = () => {
    if (this.props.mouseEnter) {
      this.props.mouseEnter(this.state.house._id);
    }
  };
  mouseLeave = () => {
    if (this.props.mouseEnter) {
      this.props.mouseLeave(this.state.house._id);
    }
  };
  render() {
    return (
      <div
        className={this.state.house.selected ? "pin selected" : "pin"}
        lat={this.state.lat}
        lng={this.state.lng}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        <label>
          <Link to={`/houses/${this.state.house._id}`}>
            ${this.state.house.price}
          </Link>
        </label>
      </div>
    );
  }
}

export default Pin;
