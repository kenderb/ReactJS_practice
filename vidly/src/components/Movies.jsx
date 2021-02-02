import React, { Component } from 'react';

import Movie from './Movie';
import {getMovies} from '../services/fakeMovieService';

class Movies extends Component {
  state = { 
    movies: getMovies()
  }

  deleteEvent = (currentId) => {
    this.setState({
      movies: this.state.movies.filter( (movie) => currentId !== movie._id ? movie : '')
    })
  }
  
  handleToggle = (id) => {
    const movies = this.state.movies.map(movie => id === movie._id ? {...movie, liked: !movie.liked} : movie );
    this.setState({movies});
  }
  
  renderPage() {
    const number = 4;
    let counter = 0
    return(
      this.state.movies.map((movie) => { 
        if(counter < number) {
          counter += 1;
          return(
            <div className="row mb-2" key={`${movie._id}-container`}>
              <Movie 
                title={movie.title} 
                genre={movie.genre.name}
                numberInStock={movie.numberInStock}
                dailyRentalRate={movie.dailyRentalRate}
                id={movie._id}
                onDelete={this.deleteEvent}
                like={movie.liked}
                onToggle={this.handleToggle}
              />
            </div>
          );
        }
      })
    );
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
          <div className="col-2 ">Like</div>
          <div className="col-2 "></div>
        </div>
        {this.renderPage()}
      
      </div>
    );
  }

  noMoviesRender() {
    return <p>Not movies on the database</p>
  }

  render() { 
    if (this.state.movies.length > 0) return this.renderMovies();
    return this.noMoviesRender();
  }
}

export default Movies;