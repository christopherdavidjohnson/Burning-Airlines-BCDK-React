import React, { Component } from "react";
import axios from 'axios';

const SERVER_URL = "http://localhost:3000/flights.json";

class Flights extends Component {
  constructor() {
    super();
    this.state = {
      flights: [],
    };
  }

  componentDidMount(){
    const fetchFlights=()=>{
      axios.get(SERVER_URL).then((results) => {
        this.setState({flights: results.data});
        setTimeout(fetchFlights, 4000); 
      });
      this.saveFlight = this.saveFlight.bind(this);
    };

    fetchFlights();
  }

  saveFlight(content) {
    axios.post(SERVER_URL, {content: content}).then((response)=>{
      this.setState({flights: [...this.state.flights, response.data]});
    });
  }

  render() {
    return (
      <div>
        <h1>Virgin Airlines</h1>
        <FlightForm onSubmit={this.saveFlight} />
        <FlightsList flights={this.state.flights} />
      </div>
    );
  }
}

class FlightForm extends Component {
  constructor() {
    super();
    this.state = { content: "" };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
    this.setState({ content: event.target.value });
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.content);
    this.setState({ content: "" });
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <p><input type="text" placeholder="flight number"/></p>
        <p><input type="text" placeholder="date"/></p>
        <p><input type="text" placeholder="origin"/></p>
        <p><input type="text" placeholder="destination"/></p>
        <p><input type="text" placeholder="plane"/></p>
        <input type="submit" value="Save" />
        <input type="submit" value="Cancel" />
      </form>
    );
  }
}

const FlightsList = (props) => {
  return (
    <div>
      {props.flights.map((s) => (
        <p key={s.id}>{s.content}</p>
      ))}
    </div>
  );
};

export default Flights;
