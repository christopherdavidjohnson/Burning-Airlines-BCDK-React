import React, { Component } from "react";
import axios from "axios";

const SERVER_URL = "https://burning-airlines-bcdk.herokuapp.com/flights.json";

class FlightForm extends Component {
  constructor() {
    super();
    this.state = { origin: "", destination: "", departure: "", arrival:"", airplane_id:"" };
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidMount() {
    const fetchFlights = () => {
      axios.get(SERVER_URL).then((results) => {
        this.setState({ flights: results.data });
        setTimeout(fetchFlights, 4000); // use recursion to call itself
      });
    };

    // this.saveAirPlane = this.saveAirPlane.bind(this);
    // this._cancelSubmit = this._cancelSubmit.bind(this);
    this._handleChangeOrigin = this._handleChangeOrigin.bind(this);
    this._handleChangeDestination = this._handleChangeDestination.bind(this);
    this._handleChangeDeparture = this._handleChangeDeparture.bind(this);
    this._handleChangeArrival = this._handleChangeArrival.bind(this);
    this._handleChangePlaneID = this._handleChangePlaneID.bind(this);

    fetchFlights();
  }

  _handleSubmit(event) {
    event.preventDefault();
    axios
      .post(SERVER_URL, {
        flight:{origin: this.state.origin,
        destination: this.state.destination,
        departure: this.state.departure,
        arrival: this.state.arrival,
        airplane_id: this.state.airplane_id
      },
      })
      .then((response) => {
        console.log(response);
      });
      this.setState({ origin: "", destination: "", departure: "", arrival:"", airplane_id:"" });
  }

  _handleChangeOrigin(event) {
    this.setState({ origin: event.target.value });
  }

  _handleChangeDestination(event) {
    this.setState({ destination: event.target.value});
  }

  _handleChangeDeparture(event) {
    this.setState({ departure: event.target.value});
  }

  _handleChangeArrival(event) {
    this.setState({ arrival: event.target.value});
  }

  _handleChangePlaneID(event) {
    this.setState({ airplane_id: event.target.value - 0 });
  }

  // saveAirPlane(flight) {
  //   // convert content into a an flight object
  //   axios.post(SERVER_URL, { name: this.state.name }).then((response) => {
  //     this.setState({ flights: [...this.state.flights, response.data] });
  //   });
  // }

  // _cancelSubmit() {
  //   this.setState({ flight: {} });
  // }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <p>
          <input
            type="text"
            onChange={this._handleChangeOrigin}
            value={this.state.origin}
            placeholder="flight origin"
          />
        </p>
        <p>
          <input
            type="text"
            onChange={this._handleChangeDestination}
            value={this.state.destination}
            placeholder="flight destination"
          />
        </p>
        <p>
          <input
            type="text"
            onChange={this._handleChangeDeparture}
            value={this.state.departure}
            placeholder="flight departure"
          />
        </p>
        <p>
          <input
            type="text"
            onChange={this._handleChangeArrival}
            value={this.state.arrival}
            placeholder="flight arrival"
          />
        </p>
        <p>
          <input
            type="text"
            onChange={this._handleChangePlaneID}
            value={this.state.airplane_id}
            placeholder="flight plane_id"
          />
        </p>
        <input type="submit" value="Save" onSubmit={this._handleSubmit} />
        <input type="button" value="Cancel" onClick={this._cancelSubmit} />
      </form>
    );
  }
}

export default FlightForm;
