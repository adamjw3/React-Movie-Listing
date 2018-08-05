import React, { Component } from 'react';
import LatestMovies from "./containers/LatestMovies.js"
import LikedMovies from "./containers/LikedMovies.js"
import Movie from "./containers/Movie.js"
import Navigation from "./components/Navigation.js"
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navigation></Navigation>
            <Route exact path="/" component={LatestMovies} />
            <Route path="/movie/:id" component={Movie} />
            <Route path="/liked" component={LikedMovies} />
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
