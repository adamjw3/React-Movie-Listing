import React, { Component } from 'react';
import { URL_COVER, URL_POSTER } from '../../const';
import Like from '../Like/Like'
import { Container, Row , Col } from 'reactstrap';
import '../../components/Details/details.css'

class Details extends Component {
  render() {
    const style = {
      backgroundImage: `url(${URL_POSTER}${this.props.movie.backdrop_path})`
    };

    return(
      <div style={style} className="details">
        <Container>
          <Row>
            <Col sm={6} md={5}>
              <img src={URL_COVER+this.props.movie.poster_path} alt="" className="img-fluid"/>
            </Col>
            <Col sm={6} md={7}>
              <div className="details__content">
                <h1>{this.props.movie.title}</h1>
                <p>{this.props.movie.overview}</p>
                <Like movie={this.props.movie}></Like>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Details;
