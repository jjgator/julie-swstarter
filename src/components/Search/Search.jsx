import React from 'react'; 
import './Search.css';

const Search = (props) => (
  <div className="search-container">
    <p className="title">What are you searching for?</p>
    <form onSubmit={props.onSubmit}>
      <div className="radio-inputs-container">
        <label>People
          <input type="radio" defaultChecked={true} name="radio" value="people"/>
          <span className="btn-radio"></span>
        </label>
        <label>Movies
          <input type="radio" name="radio" value="films"/>
          <span className="btn-radio"></span>
        </label>
      </div>
      <input 
        type="text" 
        name="text" 
        autoComplete="off"
        value={props.inputText}
        onChange={props.handleInputChange}
      />
      <button 
        disabled={props.inputText.length > 0 ? false : true}
      >
        {props.isLoading === true ? 'SEARCHING...' : 'SEARCH'}
      </button>
    </form>
  </div>
)

export default Search;