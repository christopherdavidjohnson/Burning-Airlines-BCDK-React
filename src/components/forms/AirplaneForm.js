import React, { Component } from 'react';
import axios from 'axios'

const SERVER_URL = "https://burning-airlines-bcdk.herokuapp.com/flights.json";

class AirplaneForm extends Component {
    constructor() {
      super();
      this.state = { airplane: {} };
      this._handleSubmit = this._handleSubmit.bind(this);
    }

    componentDidMount(){
      const fetchAirplanes=()=>{
        axios.get(SERVER_URL).then((results) => {
          this.setState({airplanes: results.data});
          setTimeout(fetchAirplanes, 4000); // use recursion to call itself
        });
        this.saveAirPlane = this.saveAirPlane.bind(this);
        this._cancelSubmit = this._cancelSubmit.bind(this);
      };
  
      fetchAirplanes();
    }
  
    _handleSubmit(event) {
      event.preventDefault();
      this.props.onSubmit(this.state.content);
      this.setState({ content: "" });
    }

    saveAirPlane(airplane) {
      // convert content into a an airplane object
      axios.post(SERVER_URL, {airplane: airplane}).then((response)=>{
        this.setState({secrets: [...this.state.secrets, response.data]});
      });
    }

    _cancelSubmit() {
      this.setState({airplane: {}});
    }
  
    render() {
      return (
        <form onSubmit={this._handleSubmit}>
          <p><input type="text" placeholder="airplane name" value={this.state.airplane.name}/></p>
          <p><input type="text" placeholder="airplane rows" value={this.state.airplane.rows}/></p>
          <p><input type="text" placeholder="airplane columns" value={this.state.airplane.columns}/></p>
          <input type="submit" value="Save" onSubmit={this._handleSubmit}/>
          <input type="button" value="Cancel" onClick={this._cancelSubmit} />
        </form>
      );
    }
  }

  export default AirplaneForm;