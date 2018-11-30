import React from 'react'; 
import './Search.css';

const Search = () => (
  <div className="search-container">
    <p className="title">What are you searching for?</p>
    <div className="inputs-container">
      <label>People
        <input type="radio" checked={true} name="radio"/>
        <span className="btn-radio"></span>
      </label>
      <label>Movies
        <input type="radio" name="radio"/>
        <span className="btn-radio"></span>
      </label>
    </div>
  </div>
)

export default Search;