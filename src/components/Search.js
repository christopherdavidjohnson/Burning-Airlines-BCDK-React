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
      this.setState({ flights: searchResults })
    })
    this.setState({ origin: '', destination: '' });
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

const SearchList = (props) => {
  return (
    <div>
      {props.flights.map((f) => {
        console.log(f)
      })
      }
    </div>
  );
};

export default Search;

//
// class Search extends Component {
//   constructor() {
//     super();
//     this.state = {
//       searchs: [],
//     };
//   }
//
//   componentDidMount(){
//     const fetchSearchs=()=>{
//       axios.get(SERVER_URL).then((results) => {
//         this.setState({searchs: results.data});
//         setTimeout(fetchSearchs, 4000);
//       });
//       this.saveSearch = this.saveSearch.bind(this);
//     };
//
//     fetchSearchs();
//   }
//
//   saveSearch(content) {
//     axios.post(SERVER_URL, {content: content}).then((response)=>{
//       this.setState({searchs: [...this.state.searchs, response.data]});
//     }); ////don't think we should push searches to database - needs to redirect to reservation creation page
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>Virgin Airlines</h1>
//         <SearchForm onSubmit={this.saveSearch} />
//         <SearchsList searchs={this.state.searchs} />
//       </div>
//     );
//   }
// }
