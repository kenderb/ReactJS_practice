import React, { Component } from 'react';
import Movies from './Movies';

class Movie extends Component {

  render() { 
    return ( 
      <>
        <div className="col-2">{this.props.title}</div>
        <div className="col-2">{this.props.genre}</div>
        <div className="col-2">{this.props.numberInStock}</div>
        <div className="col-2">{this.props.dailyRentalRate}</div>
      </>
     );
  }
}
 
export default Movie;