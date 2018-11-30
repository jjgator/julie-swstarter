import React from 'react';
import './Person.css';

const Person = (props) => (
  <div className="person-container">
    <p className="title">{props.details.name}</p>
    <div className="details-movies-container">
      <div className="details-button-container">
        <div className="person-detail-container">
          <p className="subtitle">Details</p>
          <div className="divider"></div>
          <ul>
            <li>{'Birth Year: ' + props.details.birthYear}</li>
            <li>{'Gender: ' + props.details.gender}</li>
            <li>{'Eye Color: ' + props.details.eyeColor}</li>
            <li>{'Hair Color: ' + props.details.hairColor}</li>
            <li>{'Height: ' + props.details.height}</li>
            <li>{'Mass: ' + props.details.mass}</li>
          </ul>
        </div>
        <a href="/">
          <button className="search-link">BACK TO SEARCH</button>
        </a>
      </div>
      <div className="person-movies-container">
        <p className="subtitle">Movies</p>
        <div className="divider"></div>
      </div>
    </div>
  </div>
)

export default Person;