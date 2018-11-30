import React from 'react'; 
import './Search.css';

const Search = () => (
  <div className="search-container">
    <p className="title">What are you searching for?</p>
    <form>
      <div className="radio-inputs-container">
        <label>People
          <input type="radio" checked={true} name="radio"/>
          <span className="btn-radio"></span>
        </label>
        <label>Movies
          <input type="radio" name="radio"/>
          <span className="btn-radio"></span>
        </label>
      </div>
      <input type="text" name="text" disabled={true}/>
      <button disabled={true}>SEARCH</button>
    </form>
  </div>
)

export default Search;