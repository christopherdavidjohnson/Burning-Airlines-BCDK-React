import React, { Component } from "react";
import axios from "axios";


const SERVER_URL = "https://burning-airlines-bcdk.herokuapp.com";

// axios.get(SERVER_URL).then((results)=>{console.log(results.data)});

class FlightShow extends Component {
  constructor() {
    super();
    this.state = {
      airplane_id: 1,
      flight_id: 1,
      name: 'Test',
      rows: 7,
      columns: 3,
      reserved_seats: {
        name: '',
        row_id: 1,
        column_id: 1
      },
      available_seats: [],
      total_seats: 27
    };
  }

  componentDidMount() {
    const fetchAirplane = () => {
      axios.get(SERVER_URL + "/airplanes.json").then((results) => {

        results.data.forEach((element) => {

          if(this.state.airplane_id === element.id){
            console.log("Airplane details:", element);
            this.setState({ name: element.name, rows: element.rows, columns: element.columns});
            let totalSeats  = element.rows * element.columns;
            this.setState({total_seats: totalSeats});
          }
        })
      });
      axios.get(SERVER_URL + "/reservations.json").then((results) => {
        console.log(results);
        results.data.forEach((element) => {
          if(this.state.flight_id === element.flight_id){

          }
        })
      });
    }
    fetchAirplane();
  }

  render() {

    return (
      <div>
        <h1> This is {this.state.name}'s airplane</h1>
        <h2> This airplane has { this.state.total_seats} seats available </h2>

      </div>

      // <div class="everythingflights">
      //
      // //   <h1>Flights</h1>
      // //
      // //   <table class="flightstable">
      // //
      // //     <tr class="flightstablehead">
      // //       <th class="flightheadercell">Origin</th>
      // //       <th class="flightheadercell">Destination</th>
      // //       <th class="flightheadercell">Departure</th>
      // //       <th class="flightheadercell">Arrival</th>
      // //     </tr>
      // //   <tbody>
      // //     {this.state.flights.map((f) => (
      // //       <tr class="flightsrow" scope="row">
      // //         <td class="flightstablecell">{f.origin}</td>
      // //         <td class="flightstablecell">{f.destination}</td>
      // //         <td class="flightstablecell">{f.departure}</td>
      // //         <td class="flightstablecell">{f.arrival}</td>
      // //       </tr>
      // //     ))}
      // //   </tbody>
      // //
      // // </table>
      // </div>
    );
  }
}

export default FlightShow;
