import React, { Component } from "react";
import axios from "axios";
import '../stylesheets/admin.css';
import AirplaneForm from '../forms/AirplaneForm'
import FlightForm from '../forms/FlightForm'


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
