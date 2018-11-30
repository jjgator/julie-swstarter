import React from 'react'; 
import './Results.css';

const Results = () => (
  <div className="results-container">
    <p className="title">Results</p>
    <div className="divider"></div>
    <div className="contents">
      <p className="zero-matches">There are zero matches.<br/>
        Use the form to search for People or Movies.
      </p>
    </div>
  </div>
)

export default Results;