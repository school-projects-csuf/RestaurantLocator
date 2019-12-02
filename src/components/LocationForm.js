import React, { Component } from "react";

class LocationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ""
    };
  }

  handlelocationChange = event => {
    this.setState({
      location: event.target.value
    });
  };

  handleSubmit = event => {
    alert(`${this.state.location}`);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group input-group-lg mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <b>Near:</b>
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            value={this.state.location}
            onChange={this.handlelocationChange}
            placeholder="City, Zip code"
          />
          <button type="submit" className="btn btn-info">
            Go!
          </button>
        </div>
      </form>
    );
  }
}

export default LocationForm;
