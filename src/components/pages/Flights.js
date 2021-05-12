import React, { Component } from "react";
import axios from "axios";
import '../stylesheets/flights.css';

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
      <div class="everythingflights">

        <h1>Flights</h1>

        <table class="flightstable">

          <tr class="flightstablehead">
            <th class="flightheadercell">Origin</th>
            <th class="flightheadercell">Destination</th>
            <th class="flightheadercell">Departure</th>
            <th class="flightheadercell">Arrival</th>
          </tr>
        <tbody>
          {this.state.flights.map((f) => (
            <tr class="flightsrow" scope="row">
              <td class="flightstablecell">{f.origin}</td>
              <td class="flightstablecell">{f.destination}</td>
              <td class="flightstablecell">{f.departure}</td>
              <td class="flightstablecell">{f.arrival}</td>
            </tr>
          ))}
        </tbody>

      </table>
      </div>
    );
  }
}

export default Flights;
