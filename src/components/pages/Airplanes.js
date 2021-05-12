import React, { Component } from "react";
import axios from 'axios';
import '../stylesheets/airplanes.css';

const SERVER_URL = "https://burning-airlines-bcdk.herokuapp.com/airplanes.json";

// axios.get(SERVER_URL).then((results)=>{console.log(results.data)});
// axios.get(SERVER_URL).then((results)=>{console.log(results.data[0].name)});

class Airplanes extends Component {
  constructor() {
    super();
    this.state = {
      airplanes: [],
    };
  }

  componentDidMount(){
    const fetchAirplanes=()=>{
      axios.get(SERVER_URL).then((results) => {
        this.setState({airplanes: results.data});
        setTimeout(fetchAirplanes, 4000);
      });
      // this.saveAirplane = this.saveAirplane.bind(this);
    };

    fetchAirplanes();

  }


  render() {

  const seats = [];
    this.state.airplanes.map((a) => {
    for (let i = 0; i < a.rows; i++){
      seats.push(<p>Seat</p>)
    }
  });

    return (
      <div>
        <h1>Airplanes</h1>
        {this.state.airplanes.map((a) => (
        <div class="plane">

          <p key={a.id}>Name {a.name}</p>

          {seats}

          <p key={a.id}>Rows {a.rows}</p>
          <p key={a.id}>Colums {a.columns}</p>
        </div>

      ))}
      </div>
    );
  }

  // render() {
  //   return (
  //     <div>
  //       <h1> Airplanes </h1>
  //
  //       {this.state.airplanes.map((a) => (
  //       <div class="plane">
  //
  //         <p key={a.id}>Name {a.name}</p>
  //
  //         {this.state.airplanes.rows.map((r) => (
  //           <div class="plane">
  //             <p>SEAT{r}</p>
  //           </div>
  //         ))}
  //
  //       </div>
  //       ))}
  //     </div>
  //   );
  // }


}


//


export default Airplanes;
