import React, { Component } from 'react';
import Search from '../components/Search/Search';
import Results from '../components/Results/Results';
import './Main.css';
import axios from 'axios';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      inputText: "",
      isLoading: false
    };
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async handleSearchSubmit(e) {
    e.preventDefault();
    const resource = e.target.radio.value;
    const searchTerm = this.state.inputText;
    let results = [];

    this.setState({isLoading: true});

    await this.getSearchResults(resource, searchTerm)
    .then(response => {
      results = response.data.results;
    });

    this.setState({
      results: results,
      inputText: "",
      isLoading: false
    });
  }

  handleInputChange (e) {
    e.preventDefault();

    this.setState({
      inputText: e.target.value
    });
  }

  render() {
    return (
      <div className="main-container">
        <Search 
          onSubmit={this.handleSearchSubmit} 
          inputText={this.state.inputText}
          handleInputChange={this.handleInputChange}
          isLoading={this.state.isLoading}
        />
        <Results 
          searchResults={this.state.results}
          isLoading={this.state.isLoading}
        />
      </div>
    )
  }

  // external api request
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
