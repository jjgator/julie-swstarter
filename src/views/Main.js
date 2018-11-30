import React, { Component } from 'react';
import Search from '../components/Search/Search';
import Results from '../components/Results/Results';
import './Main.css';
import axios from 'axios';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: 'people',
      results: [],
      inputText: "",
      isLoading: false
    };
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  async handleSearchSubmit(e) {
    e.preventDefault();
    const resource = this.state.selectedOption;
    const query = this.state.inputText;
    let results = [];

    this.setState({isLoading: true});

    await this.getSearchResults(resource, query)
    .then(response => {
      results = response.data.results;
    });

    this.setState({
      results: results,
      inputText: "",
      isLoading: false
    });
  }

  // controls text search input
  handleInputChange(e) {
    e.preventDefault();

    this.setState({
      inputText: e.target.value
    });
  }

  // controls option/select input
  handleOptionChange(e) {
    this.setState({selectedOption: e.target.value});
  }

  render() {
    return (
      <div className="main-container">
        <Search 
          onSubmit={this.handleSearchSubmit} 
          inputText={this.state.inputText}
          handleInputChange={this.handleInputChange}
          handleOptionChange={this.handleOptionChange}
          isLoading={this.state.isLoading}
          option={this.state.selectedOption}
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

    return axios.get(url, {
      params: {
        search: query
      }
    });
  }
}
