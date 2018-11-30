import React from 'react'; 
import './Search.css';

const Search = (props) => (
  <div className="search-container">
    <p className="title">What are you searching for?</p>
    <form onSubmit={props.onSubmit}>
      <div className="radio-inputs-container">
        <label>People
          <input 
            type="radio" 
            value="people" 
            checked={props.option === 'people' ? true : false}
            onChange={props.handleOptionChange}
          />
          <span className="btn-radio"></span>
        </label>
        <label>Movies
          <input 
            type="radio" 
            value="films"
            checked={props.option === 'films' ? true : false}
            onChange={props.handleOptionChange}
          />
          <span className="btn-radio"></span>
        </label>
      </div>
      <input 
        type="text" 
        name="text" 
        placeholder={props.option === 'people'
          ? 'e.g. Chewbacca, Yoda, Boba Fett'
          : 'e.g. Return of the Jedi'
        }
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