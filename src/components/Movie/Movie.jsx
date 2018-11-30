import React from 'react';
import './Movie.css';

const Movie = (props) => (
  <div className="movie-container">
    <p className="title">{props.details.title}</p>
    <div className="crawl-chars-container">
      <div className="crawl-button-container">
        <div className="crawl-detail-container">
          <p className="subtitle">Opening Crawl</p>
          <div className="divider"></div>
          <div className="crawl-text" dangerouslySetInnerHTML={props.details.openingCrawl} />
        </div>
        <a href="/">
          <button className="search-link">BACK TO SEARCH</button>
        </a>
      </div>
      <div className="movie-char-container">
        <p className="subtitle">Characters</p>
        <div className="divider"></div>
      </div>
    </div>
  </div>
)

export default Movie;