import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Main from "./views/Main";
import Details from "./views/Details";
import Header from "./components/Header/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/details/:type" component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
