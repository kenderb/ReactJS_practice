import React, { Component } from 'react';
import unsplash from '../components/api/unsplash';
import SearchBar from './SearchBar';
import Images from './Images';

class App extends Component {
  state = { 
    inputText: '',
    images:[] 
  };

  apiRequest = async () => {
    try {
      const response = await unsplash.get('search/photos/', {
        params: { query: this.state.inputText},
      });

      this.setState({images: response.data.results})
      console.log(this.state.images);
    } catch (error) {
      console.dir(error);
    }
  }

  handleOnChange = (event) => {
    this.setState({inputText: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.apiRequest();
  }

  render() { 
    return ( 
      <div className="container">
        <SearchBar 
          onInputChange={this.handleOnChange} 
          textstate={this.state.inputText} 
          onHandleSunmit={this.handleSubmit}
        />
        <Images images={this.state.images}/>
      </div>
    );
  }
}

export default App;