import React, { Component } from "react";
import axios from 'axios';

const SERVER_URL = "https://burning-airlines-bcdk.herokuapp.com/airplanes.json";

axios.get(SERVER_URL).then((results)=>{console.log(results.data)});
axios.get(SERVER_URL).then((results)=>{console.log(results.data[0].name)});

class Airplanes extends Component {
  constructor() {
    super();
    console.log('constructor()');
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
      this.saveAirplane = this.saveAirplane.bind(this);
    };

    fetchAirplanes();
  }

  saveAirplane(content) {
    axios.post(SERVER_URL, {content: content}).then((response)=>{
      this.setState({airplanes: [...this.state.airplanes, response.data]});
    });
  }

  render() {
    return (
      <div>
        <h1>Airplanes</h1>
      <AirplaneList airplane={ this.state.airplanes }/>
      </div>



    );
  }
}


//
const AirplaneList = (props) => {
  return (
    <div>
      {props.airplanes.map((s) => (
        <p key={s.id}>{s.data}</p>
      ))}
    </div>
  );
};

export default Airplanes;
