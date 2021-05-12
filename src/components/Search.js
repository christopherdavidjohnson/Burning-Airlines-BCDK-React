import React, { Component } from "react";
import axios from 'axios';

const SERVER_URL = "http://localhost:3000/searchs.json";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchs: [],
    };
  }

  componentDidMount(){
    const fetchSearchs=()=>{
      axios.get(SERVER_URL).then((results) => {
        this.setState({searchs: results.data});
        setTimeout(fetchSearchs, 4000); 
      });
      this.saveSearch = this.saveSearch.bind(this);
    };

    fetchSearchs();
  }

  saveSearch(content) {
    axios.post(SERVER_URL, {content: content}).then((response)=>{
      this.setState({searchs: [...this.state.searchs, response.data]});
    });
  }

  render() {
    return (
      <div>
        <h1>Virgin Airlines</h1>
        <SearchForm onSubmit={this.saveSearch} />
        <SearchsList searchs={this.state.searchs} />
      </div>
    );
  }
}

class SearchForm extends Component {
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
        <p><input type="text" placeholder="origin"/></p>
        <p><input type="text" placeholder="destination"/></p>
        <input type="submit" value="Save" />
        <input type="submit" value="Cancel" />
      </form>
    );
  }
}

const SearchsList = (props) => {
  return (
    <div>
      {props.searchs.map((s) => (
        <p key={s.id}>{s.content}</p>
      ))}
    </div>
  );
};

export default Search;
