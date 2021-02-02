import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies';
import Pagination from './components/Pagination';

class App extends Component {
  render() { 
    return ( 
      <div className="container">
        <Movies />
        <Pagination />
      </div>
    );
  }
}

export default App;

