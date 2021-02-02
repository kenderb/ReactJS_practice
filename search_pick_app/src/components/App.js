import React, { Component } from 'react';
import SearchBar from './SearchBar';

class App extends Component {
  state = { inputText: '' };

  handleOnChange = (e) => {
    console.log(e.target.value);
    this.setState({inputText: e.target.value});
  }

  render() { 
    return ( 
      <div className="container">
        <SearchBar onInputChange={this.handleOnChange} textstate={this.state.inputText}/>
      </div>
    );
  }
}

export default App;