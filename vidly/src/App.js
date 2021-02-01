import React, { Component } from 'react';
import './App.css';
import Movies from './Movies';

class App extends Component {
  render() { 
    return ( 
      <div className="container">
        <Movies />
      </div>
    );
  }
}

export default App;

