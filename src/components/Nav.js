import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
  render () {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/airplanes">Airplanes</Link>
        <Link to="/flights">Flights</Link>
        <Link to="/search">Search</Link>
        <Link to="/admin">Admin</Link>
      </nav>
    );
  }
}

export default Nav
