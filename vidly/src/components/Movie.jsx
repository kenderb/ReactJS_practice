import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';

class Movie extends Component {

  render() { 
    const {title, genre, numberInStock, dailyRentalRate, onDelete, id, like, onToggle} = this.props
    return ( 
      <>
        <div className="col-2">{title}</div>
        <div className="col-2">{genre}</div>
        <div className="col-2">{numberInStock}</div>
        <div className="col-2">{dailyRentalRate}</div>
        <i className = {`col-2 fa ${like ? 'fa-heart': 'fa-heart-o'}`} onClick={() => onToggle(id)}></i>
        <button className="col-2 btn btn-danger h-25 w-auto" onClick={() => onDelete(id)}>Delete</button>
      </>
    );
  }
}

export default Movie;