import React, { Component } from 'react';
import ListofMovies from '../components/ListofMovies'


class LikedMoviesContainer extends Component {
  render() {
    return(
      <ListofMovies movies={JSON.parse(localStorage.getItem("Likes"))}></ListofMovies>
    )
  }
}

export default LikedMoviesContainer;
