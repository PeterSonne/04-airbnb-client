import React from "react";
import axios from "axios";
import Thumbnail from "./Thumbnail.js";
import Nav from "./Nav.js";
import Loader from "./Loader";

class Favorites extends React.Component {
  state = {
    houses: [],
    loading: true
  };
  componentWillMount() {
    axios
      .get(`${process.env.REACT_APP_API}/houses?plus=true`)
      .then(res => {
        this.setState({ houses: res.data, loading: false });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <>
        <Nav></Nav>
        <Loader loading={this.state.loading}></Loader>
        <div
          className="narrow"
          style={{ display: this.state.loading ? "none" : "" }}
        >
          <div className="grid four large">
            {// List of thumbnails
            this.state.houses.map((house, idx) => (
              <Thumbnail
                house={house}
                key={idx}
                onHouseOver={() => {}}
                onHouseLeave={() => {}}
              ></Thumbnail>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Favorites;
