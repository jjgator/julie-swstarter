import React from 'react'; 
import { Link } from 'react-router-dom';
import './Result.css';


// finds type of detail to "link" to based on selected option
const determineType = (option) => {
  return option === 'people' ? 'person' : 'movie';
}

const Result = (props) => (
  <div className="result-item">
    <div className="item-content">
      <p>{props.title}</p>
      <button>
        <Link 
          className="details-link" 
          to={'/details/' + determineType(props.option)}
        >
          SEE DETAILS
        </Link>
      </button>
    </div>
    <div className="divider"></div>
  </div>
)

export default Result;