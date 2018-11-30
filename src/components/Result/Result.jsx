import React from 'react'; 
import { Link } from 'react-router-dom';
import './Result.css';


// finds type of detail to "link" to based on selected option
const determineType = (option) => (
  option === 'people' ? 'person' : 'movie'
)

const Result = (props) => (
  <div className="result-item">
    <div className="item-content">
      <p>{props.title}</p>
      <Link 
        className="details-link" 
        to={{
          pathname: `/details/${determineType(props.option)}`, 
          state: { itemDetails: props.detail}
        }}
      >
        <button>SEE DETAILS</button>
      </Link>
    </div>
    <div className="divider"></div>
  </div>
)

export default Result;