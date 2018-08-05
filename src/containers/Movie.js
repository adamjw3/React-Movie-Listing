import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieDetail } from '../actions';
import Details from "../components/Details";

class MovieContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieid: null,
    }
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchMovieDetail(this.props.match.params.id));
    this.setState({movieid: this.props.match.params.id})
  }

  componentWillReceiveProps(nextProps) {
     const {dispatch} = this.props;
     if(nextProps.match.params.id && this.props.match.params.id !== nextProps.match.params.id) {
         dispatch(fetchMovieDetail(nextProps.match.params.id));
         this.setState({movieid: nextProps.match.params.id})
      }
  }

  render() {
    if(this.props.isfetching) {
      return(
        <div>Loading...</div>
      )
    } else {
      return(
       <Details movie={this.props.movieDetail}></Details>
      )
    }
  }
}

const mapStateToProps = state => ({
  movieDetail: state.movieDetail.item,
  isfetching: state.movieDetail.isFetching
})

export default connect(mapStateToProps)(MovieContainer);
