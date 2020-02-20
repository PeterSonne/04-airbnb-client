import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import GoogleMap from "google-map-react";
import "../styles/cards.css";
import "../styles/grid.css";
import "../styles/maps.css";
import "../styles/nav.css";
import Thumbnail from "./Thumbnail.js";

class Houses extends React.Component {
  state = {
    houses: [],
    allHouses: [],
    types: [],
    map: {
      key: {
        key: "AIzaSyBKMVj4gaJLU9GTV1zOaWQj7ggKVbXQep0"
      },
      center: {
        lat: -8.652,
        lng: 115.137
      },
      zoom: 14
    },
    searchTerm: ""
  };
  componentWillMount() {
    axios
      .get(`${process.env.REACT_APP_API}/houses`)
      .then(res => {
        this.setState({
          houses: res.data,
          allHouses: res.data
        });
      })
      .catch(err => {
        console.log({ err });
      });
  }
  doSearch = e => {
    this.setState({ searchTerm: e.target.value }, () => {
      if (!this.state.searchTerm || this.state.searchTerm == "") {
        this.setState({ houses: this.state.allHouses });
        return false;
      }
      // filter houses array
      const searchTerm = this.state.searchTerm.toLowerCase();
      let houses = this.state.allHouses.filter(
        e =>
          e.title.toLowerCase().includes(searchTerm) ||
          e.city.toLowerCase().includes(searchTerm) ||
          e.region.toLowerCase().includes(searchTerm)
      );
      this.setState({ houses });
    });
  };
  render() {
    return (
      <>
        <nav>
          <a href="/" className="logo"></a>
          <div className="profile">
            <a href="/plus" className="button">
              <span>Airbnb Plus</span>
            </a>
          </div>
        </nav>
        <div className="filters">
          <select>
            <option value="">Min Bedrooms: 1</option>
          </select>
          <select>
            <option value="">All Types</option>
          </select>
          <input type="number" placeholder="max price" />
          <select>
            <option value="price">Lowest Price</option>
            <option value="rating">Highest Rating</option>
          </select>
          <input
            type="text"
            className="search"
            placeholder="Search..."
            onChange={this.doSearch}
            value={this.state.searchTerm}
          />
        </div>
        <div className="grid map">
          <div className="grid four large">
            {// List of thumbnails
            this.state.houses.map((house, index) => (
              <Thumbnail key={house._id} house={house}></Thumbnail>
            ))}
          </div>
          <div className="map">
            <GoogleMap
              bootstrapURLKeys={this.state.map.key}
              center={this.state.map.center}
              zoom={this.state.map.zoom}
            ></GoogleMap>
          </div>
        </div>
      </>
    );
  }
}

export default Houses;
