import React, { Component } from "react";
import axios from "axios";

// const SERVER_URL = "https://burning-airlines-bcdk.herokuapp.com/flights.json";

const SERVER_URL = "http://localhost:3000/airplanes.json";

class AirplaneForm extends Component {
  constructor() {
    super();
    this.state = { name: "", rows: "", columns: "" };
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidMount() {
    const fetchAirplanes = () => {
      axios.get(SERVER_URL).then((results) => {
        this.setState({ airplanes: results.data });
        setTimeout(fetchAirplanes, 4000); // use recursion to call itself
      });
    };

    // this.saveAirPlane = this.saveAirPlane.bind(this);
    // this._cancelSubmit = this._cancelSubmit.bind(this);
    this._handleChangeName = this._handleChangeName.bind(this);
    this._handleChangeRows = this._handleChangeRows.bind(this);
    this._handleChangeColumns = this._handleChangeColumns.bind(this);

    fetchAirplanes();
  }

  _handleSubmit(event) {
    event.preventDefault();
    axios
      .post(SERVER_URL, {
        airplane:{name: this.state.name,
        rows: this.state.rows,
        columns: this.state.columns},
      })
      .then((response) => {
        // this.setState({secrets: [...this.state.secrets, response.data]});
        console.log(response);
      });
    this.setState({ name: "", rows: "", columns: "" });
  }

  _handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  _handleChangeRows(event) {
    this.setState({ rows: event.target.value - 0 });
  }

  _handleChangeColumns(event) {
    this.setState({ columns: event.target.value - 0 });
  }

  // saveAirPlane(airplane) {
  //   // convert content into a an airplane object
  //   axios.post(SERVER_URL, { name: this.state.name }).then((response) => {
  //     this.setState({ airplanes: [...this.state.airplanes, response.data] });
  //   });
  // }

  // _cancelSubmit() {
  //   this.setState({ airplane: {} });
  // }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <p>
          <input
            type="text"
            onChange={this._handleChangeName}
            value={this.state.name}
            placeholder="airplane name"
          />
        </p>
        <p>
          <input
            type="text"
            onChange={this._handleChangeRows}
            value={this.state.rows}
            placeholder="airplane rows"
          />
        </p>
        <p>
          <input
            type="text"
            onChange={this._handleChangeColumns}
            value={this.state.columns}
            placeholder="airplane columns"
          />
        </p>
        <input type="submit" value="Save" onSubmit={this._handleSubmit} />
        <input type="button" value="Cancel" onClick={this._cancelSubmit} />
      </form>
    );
  }
}

export default AirplaneForm;
