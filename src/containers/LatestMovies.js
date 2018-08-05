import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieList } from '../actions';
import ListofMovies from '../components/ListofMovies'

class LastestMoviesContainer extends Component {
  componentWillMount() {
    this.props.fetchMovieList();
  }

  render() {
    return(
      <ListofMovies movies={this.props.movieList}></ListofMovies>
    )
  }
}

const mapStateToProps = state => ({
  movieList: state.movieList.items
})

export default connect(mapStateToProps, { fetchMovieList })(LastestMoviesContainer);
