import React, { Component } from 'react';

class AirplaneForm extends Component {
    constructor() {
      super();
      this.state = { content: "" };
      this._handleChange = this._handleChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }
  
    _handleChange(event) {
      this.setState({ content: event.target.value });
    }
  
    _handleSubmit(event) {
      event.preventDefault();
      this.props.onSubmit(this.state.content);
      this.setState({ content: "" });
    }
  
    render() {
      return (
        <form onSubmit={this._handleSubmit}>
          <p><input type="text" placeholder="airplane name"/></p>
          <p><input type="text" placeholder="airplane rows"/></p>
          <p><input type="text" placeholder="airplane columns"/></p>
          <input type="submit" value="Save" />
          <input type="submit" value="Cancel" />
        </form>
      );
    }
  }

  export default AirplaneForm;