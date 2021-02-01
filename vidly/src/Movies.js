import React, { Component } from 'react';

import Movie from './Movie';
import {getMovies} from './services/fakeMovieService';

class Movies extends Component {
  state = { 
    movies: getMovies()
  }

  deleteEvent(currentId){
    console.log(currentId);
    this.setState({
      movies: this.state.movies.filter( (movie) => currentId !== movie._id ? movie:'')
    })
  }

  render() { 
    return ( 
      <div className="container">
        <div className="p-2">Showing {this.state.movies.length} movies in the database</div>
        <div className="row mb-2 border-bottom border-top p-2 font-weight-bold">
          <div className="col-2">Title</div>
          <div className="col-2">Genre</div>
          <div className="col-2">Stock</div>
          <div className="col-2">Rate</div>
          <div className="col-2 "></div>
        </div>
        {this.state.movies.map((movie) => { 
          return(
            <div className="row m-3" key={`${movie._id}-container`}>
              <Movie 
                title={movie.title} 
                key={movie._id}
                _id = {movie._id}
                genre={movie.genre.name}
                numberInStock={movie.numberInStock}
                dailyRentalRate={movie.dailyRentalRate}
              />
              <button className="col-2 btn btn-danger" key={`${movie._id}-btn`} onClick={()=> this.deleteEvent(movie._id)}>Delete</button>
            </div>
          );
        })}
      </div>
    );
  }
}
 
export default Movies;