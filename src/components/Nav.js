import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Nav extends Component {
  render () {
    return (

      // <img src="https://i.imgur.com/Aela5Rh.jpg">
      // <img src={'https://i.imgur.com/Aela5Rh.jpg'}>

      <nav>

        <div class="navlink">
          <Link to="/">Home</Link>
        </div>

        <div class="navlink">
          <Link to="/airplanes">Airplanes</Link>
        </div>

        <div class="navlink">
          <Link to="/flights">Flights</Link>
        </div>

        <div class="navlink">
          <Link to="/search">Search</Link>
        </div>

        <div class="navlink">
          <Link to="/admin">Admin</Link>
        </div>

      </nav>
    );
  }
}

export default Nav
