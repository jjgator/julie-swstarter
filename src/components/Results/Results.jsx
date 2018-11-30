import React from 'react'; 
import './Results.css';
import Result from '../Result/Result';

const Results = (props) => (
  <div className="results-container">
    <p className="title">Results</p>
    <div className="divider"></div>
    {props.searchResults.length > 0 
      ? <div className="results-items-container">
          {props.searchResults.map((result, i) => {
            return <Result 
              title={result.title || result.name}
              key={i}
              option={props.option}
              detail={result}
            />
          })}
        </div>
      : <div className="text-container">
          {props.isLoading === true
            ? <p>Searching...</p>
            :  <p>There are zero matches.<br/>
                Use the form to search for People or Movies.
              </p>
          }
        </div>
    }
  </div>
)

export default Results;