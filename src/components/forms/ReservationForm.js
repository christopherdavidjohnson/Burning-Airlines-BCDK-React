import React, { Component } from "react";
import axios from "axios";

const SERVER_URL =
  "https://burning-airlines-bcdk.herokuapp.com/reservations.json";

class ReservationForm extends Component {
  constructor() {
    super();
    this.state = {
      row_id: "",
      column_id: "",
      user_id: "",
      flight_id: "",
    };
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidMount() {
    const fetchReservations = () => {
      axios.get(SERVER_URL).then((results) => {
        this.setState({ reservations: results.data });
        setTimeout(fetchReservations, 4000); // use recursion to call itself
      });
    };

    // this.saveAirPlane = this.saveAirPlane.bind(this);
    // this._cancelSubmit = this._cancelSubmit.bind(this);
    this._handleChangeRowID = this._handleChangeRowID.bind(this);
    this._handleChangeColumnID = this._handleChangeColumnID.bind(this);
    this._handleChangeUserID = this._handleChangeUserID.bind(this);
    this._handleChangeFlightID = this._handleChangeFlightID.bind(this);
    this._cancelSubmit = this._cancelSubmit.bind(this);

    fetchReservations();
  }

  _handleSubmit(event) {
    event.preventDefault();
    axios
      .post(SERVER_URL, {
        reservation: {
          row_id: this.state.row_id,
          column_id: this.state.column_id,
          user_id: this.state.user_id,
          flight_id: this.state.flight_id,
        },
      })
      .then((response) => {
        console.log(response);
      });
    this.setState({
      row_id: "",
      column_id: "",
      user_id: "",
      flight_id: "",
    });
    alert("Reservation created!");
  }

  _handleChangeRowID(event) {
    this.setState({ row_id: event.target.value });
  }

  _handleChangeColumnID(event) {
    this.setState({ column_id: event.target.value });
  }

  _handleChangeUserID(event) {
    this.setState({ user_id: event.target.value });
  }

  _handleChangeFlightID(event) {
    this.setState({ flight_id: event.target.value });
  }

  // saveAirPlane(reservation) {
  //   // convert content into a an reservation object
  //   axios.post(SERVER_URL, { name: this.state.name }).then((response) => {
  //     this.setState({ reservations: [...this.state.reservations, response.data] });
  //   });
  // }

  _cancelSubmit() {
    this.setState({
      row_id: "",
      column_id: "",
      user_id: "",
      flight_id: "",
    });
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <p>
          <input
            type="text"
            onChange={this._handleChangeRowID}
            value={this.state.row_id}
            placeholder="seat row number"
          />
        </p>
        <p>
          <input
            type="text"
            onChange={this._handleChangeColumnID}
            value={this.state.column_id}
            placeholder="seat column number"
          />
        </p>
        <p>
          <input
            type="text"
            onChange={this._handleChangeUserID}
            value={this.state.user_id}
            placeholder="passenger id"
          />
        </p>
        <p>
          <input
            type="text"
            onChange={this._handleChangeFlightID}
            value={this.state.flight_id}
            placeholder="flight id"
          />
        </p>
        <input type="submit" value="Save" onSubmit={this._handleSubmit} />
        <input type="button" value="Cancel" onClick={this._cancelSubmit} />
      </form>
    );
  }
}

export default ReservationForm;
