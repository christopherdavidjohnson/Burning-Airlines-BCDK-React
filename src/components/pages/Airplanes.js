import React, { Component } from "react";
import axios from "axios";
import "../stylesheets/airplanes.css";
import nose from '../images/nose.png'
import tail from '../images/tail.png'

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

  componentDidMount() {
    const fetchAirplanes = () => {
      axios.get(SERVER_URL).then((results) => {
        this.setState({ airplanes: results.data });
        setTimeout(fetchAirplanes, 4000);
      });
      // this.saveAirplane = this.saveAirplane.bind(this);
    };

    fetchAirplanes();
  }

  render() {

    let airplanes = {};

    for (let i = 0; i < this.state.airplanes.length; i++) {
      airplanes[i] = [];
    }

    for (let i = 0; i < this.state.airplanes.length; i++) {
      for (let j = 0; j < this.state.airplanes[i].rows; j++) {
        for (let k = 0; k < this.state.airplanes[i].columns; k++) {
          const id=`${j}_${k}`
          airplanes[i].push(<div class='seat' id={id}></div>)
        }
      }
    }

    return (
      <div>
        <h1>Airplanes</h1>
        {this.state.airplanes.map((a,i) => (
          <div class="plane">

            <p key={a.id}>Name {a.name}</p>

            <img class="noseimg" src={nose} alt="nose" />
            <div class="cabin">
              <div class="seatinggrid">
                {airplanes[i]}
              </div>
            </div>

            <img class="tailimg" src={tail} alt="tail" />

            <p key={a.id}>{a.rows} Rows</p>
            <p key={a.id}>{a.columns} Columns</p>
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
