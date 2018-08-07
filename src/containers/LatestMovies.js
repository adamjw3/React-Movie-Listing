import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovieList } from '../actions';
import ListofMovies from '../components/List/ListofMovies';

class LastestMoviesContainer extends Component {
  componentDidMount() {
    this.props.fetchMovieList();
  }

  render() {
    return(
      <ListofMovies movies={this.props.movieList}></ListofMovies>
    );
  }
}

const mapStateToProps = state => ({
  movieList: state.movieList.items
});

LastestMoviesContainer.propTypes = {
  fetchMovieList: PropTypes.func,
  movieList: PropTypes.object.Required
};

export default connect(mapStateToProps, { fetchMovieList })(LastestMoviesContainer);
