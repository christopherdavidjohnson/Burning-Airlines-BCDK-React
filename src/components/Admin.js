import React, { Component } from "react";
import AirplaneForm from './AirplaneForm'
import FlightForm from './FlightForm'

class Admin extends Component {
  render() {
    return (
      <div>
        <h1>Create new airplane</h1>
        <AirplaneForm/>
        <h1>Create new flight</h1>
        <FlightForm/>
      </div>
      
    );
  }
}

export default Admin;
