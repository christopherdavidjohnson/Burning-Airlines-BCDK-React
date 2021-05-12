import React, { Component } from "react";
import axios from "axios";

const SERVER_URL = "https://burning-airlines-bcdk.herokuapp.com/flights.json";

// axios.get(SERVER_URL).then((results) => {
//   console.log(results.data);
// });

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
        {this.state.flights.map((f) => (
          <div key={f.id}>
            <p>{f.id}</p>
            <p>{f.origin}</p>
            <p>{f.destination}</p>
            <p>{f.departure}</p>
            <p>{f.arrival}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Flights;
