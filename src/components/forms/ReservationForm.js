import React, { Component } from "react";
import axios from "axios";

const SERVER_URL =
  "https://burning-airlines-bcdk.herokuapp.com/reservations.json";

const PLANES_URL = "https://burning-airlines-bcdk.herokuapp.com/airplanes.json";

class ReservationForm extends Component {
  constructor() {
    super();
    this.state = {
      row_id: "",
      column_id: "",
      user_id: "",
      flight_id: "",
      planes: "",
    };
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidMount() {
    const fetchReservations = () => {
      axios.get(SERVER_URL).then((results) => {
        this.setState({ reservations: results.data });
        // setTimeout(fetchReservations, 4000); // use recursion to call itself
      });
    };

    const fetchPlanes = () => {
      axios.get(PLANES_URL).then((results) => {
        this.setState({ planes: results.data });
        // setTimeout(fetchReservations, 4000); // use recursion to call itself
      });
    };

    // this.saveAirPlane = this.saveAirPlane.bind(this);
    // this._cancelSubmit = this._cancelSubmit.bind(this);
    this._handleChangeRowID = this._handleChangeRowID.bind(this);
    this._handleChangeColumnID = this._handleChangeColumnID.bind(this);
    this._handleChangeUserID = this._handleChangeUserID.bind(this);
    this._handleChangeFlightID = this._handleChangeFlightID.bind(this);
    this._cancelSubmit = this._cancelSubmit.bind(this);

    fetchReservations();
    fetchPlanes();
  }

  _handleSubmit(event) {
    event.preventDefault();
    axios
      .post(SERVER_URL, {
        reservation: {
          row_id: this.state.row_id,
          column_id: this.state.column_id,
          user_id: this.state.user_id,
          flight_id: this.state.flight_id,
        },
      })
      .then((response) => {
        console.log(response);
      });
    this.setState({
      row_id: "",
      column_id: "",
      user_id: "",
      flight_id: "",
    });
    alert("Reservation created!");
  }

  _handleChangeRowID(event) {
    this.setState({ row_id: event.target.value });
  }

  _handleChangeColumnID(event) {
    this.setState({ column_id: event.target.value });
  }

  _handleChangeUserID(event) {
    this.setState({ user_id: event.target.value });
  }

  _handleChangeFlightID(event) {
    this.setState({ flight_id: event.target.value });
  }

  // saveAirPlane(reservation) {
  //   // convert content into a an reservation object
  //   axios.post(SERVER_URL, { name: this.state.name }).then((response) => {
  //     this.setState({ reservations: [...this.state.reservations, response.data] });
  //   });
  // }

  _cancelSubmit() {
    this.setState({
      row_id: "",
      column_id: "",
      user_id: "",
      flight_id: "",
    });
  }

  render() {

    let airplanes = {};

    for (let i = 0; i < this.state.planes.length; i++) {
      airplanes[i] = [];
    }

    for (let i = 0; i < this.state.planes.length; i++) {
      for (let j = 0; j < this.state.planes[i].rows; j++) {
        for (let k = 0; k < this.state.planes[i].columns; k++) {
          const id=`${j}_${k}`
          airplanes[i].push(<button id={id}>{j}_{k}</button>)
        }
      }
    }
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <p>
            <input
              type="text"
              onChange={this._handleChangeRowID}
              value={this.state.row_id}
              placeholder="seat row number"
            />
          </p>
          <p>
            <input
              type="text"
              onChange={this._handleChangeColumnID}
              value={this.state.column_id}
              placeholder="seat column number"
            />
          </p>
          <p>
            <input
              type="text"
              onChange={this._handleChangeUserID}
              value={this.state.user_id}
              placeholder="passenger id"
            />
          </p>
          <p>
            <input
              type="text"
              onChange={this._handleChangeFlightID}
              value={this.state.flight_id}
              placeholder="flight id"
            />
          </p>
          <input type="submit" value="Save" onSubmit={this._handleSubmit} />
          <input type="button" value="Cancel" onClick={this._cancelSubmit} />
        </form>
        {airplanes[0]}
      </div>
    );
  }
}

export default ReservationForm;

// import "../stylesheets/airplanes.css";
// import nose from '../images/nose.png'
// import tail from '../images/tail.png'
// import wings from '../images/wings.png'

// const SERVER_URL = "https://burning-airlines-bcdk.herokuapp.com/airplanes.json";

// // axios.get(SERVER_URL).then((results)=>{console.log(results.data)});
// // axios.get(SERVER_URL).then((results)=>{console.log(results.data[0].name)});

// class Airplanes extends Component {
//   constructor() {
//     super();
//     this.state = {
//       airplanes: [],
//     };
//   }

//   componentDidMount() {
//     const fetchAirplanes = () => {
//       axios.get(SERVER_URL).then((results) => {
//         this.setState({ airplanes: results.data });
//         setTimeout(fetchAirplanes, 4000);
//       });
//       // this.saveAirplane = this.saveAirplane.bind(this);
//     };

//     fetchAirplanes();
//   }

//   render() {

//     let airplanes = {};

//     for (let i = 0; i < this.state.airplanes.length; i++) {
//       airplanes[i] = [];
//     }

//     for (let i = 0; i < this.state.airplanes.length; i++) {
//       for (let j = 0; j < this.state.airplanes[i].rows; j++) {
//         for (let k = 0; k < this.state.airplanes[i].columns; k++) {
//           const id=`${j}_${k}`
//           airplanes[i].push(<div class='seat' id={id}>{j}_{k}</div>)
//         }
//       }
//     }

//     return (
//       <div>
//         <h1>Airplanes</h1>

//         {this.state.airplanes.map((a,i) => (
//           <div class="plane">

//             <p key={a.id}>Name {a.name}</p>

//             <img class="noseimg" src={nose} alt="nose" />

//               <div class="cabin">

//                 <div class="seatinggrid" style={{"grid-template-columns": '1fr '.repeat( a.columns )}}>
//                   {airplanes[i]}
//                 </div>
//               </div>

//             <img class="tailimg" src={tail} alt="tail" />
//             <img class="wingsimg" src={wings} alt="wings" />

//           </div>
//         ))}
//       </div>
//     );
//   }

// }

// export default Airplanes;
