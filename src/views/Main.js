import React, { Component } from 'react';
import Search from '../components/Search/Search';
import Results from '../components/Results/Results';
import './Main.css';

export default class Home extends Component {
  render() {
    return (
      <div className="main-container">
        <Search />
        <Results />
      </div>
    )
  }
}
