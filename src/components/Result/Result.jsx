import React from 'react'; 
import './Result.css';

const Result = (props) => (
  <div className="result-item">
    <div className="item-content">
      <p>{props.title}</p>
      <button>SEE DETAILS</button>
    </div>
    <div className="divider"></div>
  </div>
)

export default Result;