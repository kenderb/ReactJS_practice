import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDsiplay from './SeasonDisplay';
class App extends React.Component {
  state = { latitude: null, errorMessage: '' };

  showErrorMessage(){
    return(
      <div>
        Error: {this.state.errorMessage}
      </div>
    );
  }

  showLoadingMessage(){
    return(
      <div>
        Loading.......
      </div>
    );
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );
  }

  render() {
    if (this.state.errorMessage) return this.showErrorMessage();
    if (!this.state.errorMessage && !this.state.latitude) return this.showLoadingMessage();
    return(
      <div>
        <SeasonDsiplay latitude={ this.state.latitude }/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);