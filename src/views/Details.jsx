import React, { Component } from 'react';
import './Details.css';
import Person from '../components/Person/Person';
import Movie from '../components/Movie/Movie';
import axios from 'axios';

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      type: "null",
      details: {}
    };
  }

  async componentDidMount() {
    this.setState({
      type: this.props.match.params.type,
      details: await this.sortDetails(this.props.location.state.itemDetails)
    });
  }

  render() {
    return (
      Object.keys(this.state.details).length === 0
        ? <span className="loading">Loading...</span>
        :  <div className="details-container">
            {this.state.type === 'person' 
              ? <Person details={this.state.details} />
              : <Movie details={this.state.details} />
            }
          </div>
      
    )
  }

  // helper function for sorting details based on type (person or movie)
  async sortDetails(detailsObj) {
    const type = this.props.match.params.type;

    if (type === 'person') {
      const movies = await this.getDetailResults(detailsObj.films);

      return {
        name: detailsObj.name,
        birthYear: detailsObj.birth_year,
        gender: detailsObj.gender,
        eyeColor: detailsObj.eye_color,
        hairColor: detailsObj.hair_color,
        height: detailsObj.height,
        mass: detailsObj.mass,
        movies: movies
      }
    } else if (type === 'movie') {
      const characters = await this.getDetailResults(detailsObj.characters);

      return {
        title: detailsObj.title,
        openingCrawl: this.formatCrawlString(detailsObj.opening_crawl),
        characters: characters
      } 
    }
  }

  // API calls to fetch film/character detail
  async getDetailResults(urlArray) {
    let resultsArray = [];
      
    await axios.all(urlArray.map(link => axios.get(link)))
      .then(axios.spread((...response) => {
      response.forEach(r => {
        resultsArray.push(r.data.name || r.data.title);
      })
    }));

    return resultsArray;
  }

  // helper function to format opening crawl text
  formatCrawlString(string) {
    const newString = string.replace(/(?:\r\n|\r|\n)/g, '<br/>');
    return {__html: newString};
  }
}
