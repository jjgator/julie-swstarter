import React, { Component } from 'react';
import './Details.css';
import Person from '../components/Person/Person';
import Movie from '../components/Movie/Movie';

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      type: "null",
      details: {}
    };
  }

  componentDidMount() {
    this.setState({
      type: this.props.match.params.type,
      details: this.sortDetails(this.props.location.state.itemDetails)
    });
  }

  render() {
    return (
      <div className="details-container">
        {this.state.type === 'person' 
          ? <Person details={this.state.details} />
          : <Movie details={this.state.details} />
        }
      </div>
    )
  }

  // helper function for sorting details based on type (person or movie)
  sortDetails(detailsObj) {
    const type = this.props.match.params.type;

    if (type === 'person') {
      return {
        name: detailsObj.name,
        birthYear: detailsObj.birth_year,
        gender: detailsObj.gender,
        eyeColor: detailsObj.eye_color,
        hairColor: detailsObj.hair_color,
        height: detailsObj.height,
        mass: detailsObj.mass,
        movies: detailsObj.films
      }
    } else if (type === 'movie') {
      return {
        title: detailsObj.title,
        openingCrawl: this.formatCrawlString(detailsObj.opening_crawl),
        characters: detailsObj.characters
      }
    }
  }

  // TODO: helper function for API calls to fetch film/character detail

  // helper function to format opening crawl text
  formatCrawlString(string) {
    const newString = string.replace(/(?:\r\n|\r|\n)/g, '<br/>');
    return {__html: newString};
  }
}
