import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
  render () {
    return (
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/airplanes">Airplanes</Link>
            </li>
            <li>
              <Link to="/flights">Flights</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/flight/:flightID">Flight Details</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>
    );
  }
}

export default Nav
