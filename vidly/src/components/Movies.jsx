import React, { Component } from 'react';

import Movie from './Movie';
import {getMovies} from '../services/fakeMovieService';

class Movies extends Component {
  state = { 
    movies: getMovies()
  }

  deleteEvent(currentId){
    this.setState({
      movies: this.state.movies.filter( (movie) => currentId !== movie._id ? movie : '')
    })
  }

  renderMovies(){
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
            <div className="row mb-2" key={`${movie._id}-container`}>
              <Movie 
                title={movie.title} 
                genre={movie.genre.name}
                numberInStock={movie.numberInStock}
                dailyRentalRate={movie.dailyRentalRate}
              />
              <button className="col-2 btn btn-danger h-25 w-auto" onClick={()=> this.deleteEvent(movie._id)}>Delete</button>
            </div>
          );
        })}
      </div>
    );
  }

  noMoviesRender(){
    return <p>Not movies on the database</p>
  }

  render() { 
    if (this.state.movies.length > 0) return this.renderMovies();
    return this.noMoviesRender();
  }
}

export default Movies;