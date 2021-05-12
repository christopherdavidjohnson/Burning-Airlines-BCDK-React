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
        {/* <FlightForm onSubmit={this.saveFlight} /> */}
        <FlightsList flights={this.state.flights} />
      </div>
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
