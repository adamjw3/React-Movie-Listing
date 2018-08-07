import React , { Component } from 'react';

class Like extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: JSON.parse(localStorage.getItem("Likes")) || []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if(!this.isliked(this.props.movie.id)) {
      this.setState({
        likes: [...this.state.likes, this.props.movie],
        label: "unlike"
      })
    }
    else {
      this.setState({
        likes: this.state.likes.filter(item => item.id !== this.props.movie.id),
        label: "like"
      });
    }
  }

  isliked(currentMovieId) {
    let tracker = false

    this.state.likes.forEach(function (item) {
       if(item.id === currentMovieId) {
        tracker = true
       }
    });

    return tracker
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("Likes", JSON.stringify(nextState.likes))
  }

  componentDidMount() {
    this.setState({
      label: this.isliked(this.props.movie.id) ? "unlike" : "like"
    });
  }

  render() {
    return(
      <button onClick={this.handleClick}>{this.state.label}</button>
    );
  }
}

export default Like
