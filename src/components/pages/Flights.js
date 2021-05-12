import React, { Component } from "react";
import axios from 'axios';

const SERVER_URL = "https://burning-airlines-bcdk.herokuapp.com/flights.json";

axios.get(SERVER_URL).then((results)=>{console.log(results.data)});

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
        <div>
          <p key={f.id}>{f.id}</p>
          <p key={f.id}>{f.origin}</p>
          <p key={f.id}>{f.destination}</p>
          <p key={f.id}>{f.departure}</p>
          <p key={f.id}>{f.arrival}</p>
        </div>
        
      ))}
      </div>
    );
  }
}

export default Flights;
