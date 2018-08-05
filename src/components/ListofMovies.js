import React , { Component } from 'react';
import { Link } from 'react-router-dom'
import { URL_COVER } from '../const';
import { Container, Row , Col } from 'reactstrap';
import '../components/list.css'

export default class ListofMovies extends Component{
  render() {
    const movies = this.props.movies.map(function(movie) {
      return (
        <Col key={movie.id} sm={6} md={3} style={{ padding: 0, margin: 0 }}>
          <Link to={'/movie/'+movie.id} className="list-item">
            <img  key={movie.id} src={URL_COVER+movie.poster_path} alt=":" className="img-fluid"/>
            <div className="list-item__title-container">
              <h2 className="list-item__title">{movie.title}</h2>
            </div>
          </Link>
        </Col>
      )
    });

    return(
      <Container>
        <Row>
          {movies}
        </Row>
      </Container>
    )
  }
}
