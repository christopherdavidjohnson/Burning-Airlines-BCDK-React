import React, { Component } from "react";
import axios from "axios";

const SERVER_URL = "https://burning-airlines-bcdk.herokuapp.com/flights.json";

// axios.get(SERVER_URL).then((results)=>{console.log(results.data)});

class Flights extends Component {
  constructor() {
    super();
    this.state = {
      flights: [],
    };
  }

  componentDidMount() {
    const fetchFlights = () => {
      axios.get(SERVER_URL).then((results) => {
        this.setState({ flights: results.data });
        setTimeout(fetchFlights, 4000);
        // setTimeout(console.log(this.state.flights), 10000);
      });
    };

    fetchFlights();
  }

  render() {
    return (
      <div>
        <h1>Flights</h1>
        <table>
        <tr>
          <th>Origin</th>
          <th>Destination</th>
          <th>Departure</th>
          <th>Arrival</th>
        </tr>
          {this.state.flights.map((f) => (

          <tr>
            <td>{f.origin}</td>
            <td>{f.destination}</td>
            <td>{f.departure}</td>
            <td key={f.id}>{f.arrival}</td>
          </tr>


      ))}
      </table>
      </div>
    );
  }
}

export default Flights;
