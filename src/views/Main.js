import React, { Component } from 'react';
import Search from '../components/Search/Search';
import Results from '../components/Results/Results';
import './Main.css';
import axios from 'axios';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchSubmit(e) {
    e.preventDefault();
    const resource = e.target.radio.value;
    const searchTerm = e.target.text.value;

    this.getSearchResults(resource, searchTerm)
    .then(response => {
      this.setState({results: response.data.results});
    });
  }

  render() {
    return (
      <div className="main-container">
        <Search onSubmit={this.handleSearchSubmit} />
        <Results searchResults={this.state.results}/>
      </div>
    )
  }

  getSearchResults(resource, query) {
    const url = 'https://swapi.co/api/' + resource + '/';

    console.log(url);
    return axios.get(url, {
      params: {
        search: query
      }
    });
  }
}
