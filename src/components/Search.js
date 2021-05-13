import React, { Component } from "react";
import axios from 'axios';

const SERVER_URL = "https://burning-airlines-bcdk.herokuapp.com/flights.json";



class Search extends Component {
  constructor() {
    super();
    this.state = {
      origin: '',
      destination: '',
      flights: []
    };
    this._handleOriginChange = this._handleOriginChange.bind(this);
    this._handleDestinationChange = this._handleDestinationChange.bind(this);
    this._fetchFlights = this._fetchFlights.bind(this);

  }

  _handleOriginChange(event) {
    this.setState({ origin: event.target.value });
  }

  _handleDestinationChange(event) {
    this.setState({ destination: event.target.value });
  }


  _fetchFlights(event) {
    event.preventDefault();
    axios.get(SERVER_URL).then((results) => {
      let searchResults = [];
      results.data.forEach( (e) => {
        if(e.origin === this.state.origin && e.destination === this.state.destination) {
          searchResults.push(e);
        } else {
          console.log('There are no flights available within your search terms');
        }
      });
      this.setState({ flights: searchResults });
    })
    // this.setState({ origin: '', destination: '' });
  }


  render() {
    return (
      <div>
      <form onSubmit={this._handleSubmit}>
        <p><input onChange={ this._handleOriginChange } type="text" placeholder="origin"/></p>
        <p><input onChange={ this._handleDestinationChange } type="text" placeholder="destination"/></p>
        <input onClick={ this._fetchFlights } type="submit" value="Search" />
      </form>
      <SearchList flights={this.state.flights}/>
      </div>
    );
  }
}

class SearchList extends Component {
  render(){
    const _createReservation = (event) => {
      console.log(event.target.value);
    }
    return(
      <div class="searchedFlights" >
        <h1>Flight Results</h1>
        <table class="flightstable">
          <tr class="flightstablehead">
            <th class="flightheadercell">Origin</th>
            <th class="flightheadercell">Destination</th>
            <th class="flightheadercell">Departure</th>
            <th class="flightheadercell">Arrival</th>
          </tr>
          { this.props.flights.map((f) => (
            <tr class="flightsrow" scope="row">
              <td class="flightstablecell">{f.id}</td>
              <td class="flightstablecell">{f.origin}</td>
              <td class="flightstablecell">{f.destination}</td>
              <td class="flightstablecell">{f.departure}</td>
              <td class="flightstablecell">{f.arrival}</td>
            </tr>
          ))}
      </table>
      <form onSubmit={ _createReservation }>
      <input placeholder="flight id e.g. 1"/>
      </form>
      </div>
    )
  }
}
export default Search;
