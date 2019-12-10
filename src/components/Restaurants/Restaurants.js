import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./index.css";
import $ from "jquery";
import logo0 from "./regular_0@2x.png";
import logo1 from "./regular_1@2x.png";
import logo15 from "./regular_1_half@2x.png";
import logo2 from "./regular_2@2x.png";
import logo25 from "./regular_2_half@2x.png";
import logo3 from "./regular_3@2x.png";
import logo35 from "./regular_3_half@2x.png";
import logo4 from "./regular_4@2x.png";
import logo45 from "./regular_4_half@2x.png";
import logo5 from "./regular_5@2x.png";
window.$ = $;

var stars = {
  "0": logo0,
  "1": logo1,
  "1.5": logo15,
  "2": logo2,
  "2.5": logo25,
  "3": logo3,
  "3.5": logo35,
  "4": logo4,
  "4.5": logo45,
  "5": logo5
};

var restaurants = [
  {
    
  }
];

// Yelp API

class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      modalIsOpen: false,
      restaurants: [],
      loaded: false,
      location: this.props.location
    };
  }

  componentDidMount() {
    var token =
      "Bearer qxCQ24BE6NeiEBX4u57ZO_emYGhO7xIBlKJvt3D7p7gk3iCB1j9Sg8PvtEAA_ETD-uFCsxd5b-_KkSEMCB77nS5vKYPXLWMzA48oTotqfYQXtP4ZDWXN_4AAcOvlXXYx";
    var cors_anywhere = "https://cors-anywhere.herokuapp.com";
    var yelp_search = "https://api.yelp.com/v3/businesses/search";

    var requestObj = {
      url: cors_anywhere + "/" + yelp_search,
      data: { term: "restaurants", location: this.state.location, limit: 50 },
      headers: { Authorization: token },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(
          "Ajax error: ",
          jqXHR,
          ", text: ",
          textStatus,
          ", error: ",
          errorThrown
        );
      }
    };

    $.ajax(requestObj).done(response => {
      console.log(response.businesses); // debug
      console.log(response.businesses.length);

      let tmpArray = [];
      for (let i = 0; i < response.businesses.length; i++) {
        tmpArray.push(response.businesses[i]);
      }

      restaurants = tmpArray;

      this.setState({
        loaded: true,
        restaurants: tmpArray
      });
    });
  }

  toggleModal = () => {
    this.setState({
      modalIsOpen: this.state.modalIsOpen ? false : true
    });
  };

  getNext = () => {
    // console.log(this.state.restaurants[this.state.index])
    console.log(this.state.restaurants[this.state.index].image_url);
    console.log(this.state.restaurants[this.state.index].name);
    console.log(this.state.restaurants.length);
    this.setState({
      index: (this.state.index + 1) % this.state.restaurants.length
    });
    console.log(this.state.index);
  };

  getStyle = () => {
    return {
      backgroundImage: "url(" + restaurants[this.state.index].image_url + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center"
    };
  };

  render() {
    const loc = restaurants[this.state.index];
    return (
      <div className="restaurant" style={this.getStyle()}>
        <div className="btn2-loc">
          <button className="next-btn" onClick={this.getNext}></button>
        </div>
        <div className="location-details" key={loc.id}>
          <h2>{restaurants[this.state.index].name}</h2>
          <img src={stars[restaurants[this.state.index].rating]}></img>
          <p>{restaurants[this.state.index].price}</p>
          <p>{restaurants[this.state.index].display_phone}</p>
        </div>
        <div className="btn1-loc">
          <button className="take-me-btn" onClick={this.toggleModal}></button>
        </div>
        <div className="modal-dialog">
          <Modal size="lg" isOpen={this.state.modalIsOpen}>
            <ModalHeader toggle={this.toggleModal}>{loc.name}</ModalHeader>
            <ModalBody className="modal-body"></ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Restaurants;
