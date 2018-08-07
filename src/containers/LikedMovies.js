import React, { Component } from 'react';
import ListofMovies from '../components/List/ListofMovies';


class LikedMoviesContainer extends Component {
  render() {
    if(JSON.parse(localStorage.getItem('Likes')) == null || JSON.parse(localStorage.getItem('Likes')).length == 0 ) {
      return(
        <div>No records</div>
      );
    }
    else {
      return (
        <ListofMovies movies={JSON.parse(localStorage.getItem('Likes'))}></ListofMovies>
      );
    }
  }
}

export default LikedMoviesContainer;
