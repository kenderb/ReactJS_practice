import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDsiplay from './SeasonDisplay';
import LoadingIcon from './LoadingIcon';
class App extends React.Component {
  state = { latitude: null, errorMessage: '' };

  showErrorMessage(){
    return(
      <div class="ui negative message">
        <div class="header">
          Error: {this.state.errorMessage}
        </div>
      </div>
    );
  }

  showLoadingMessage(){
    return(
      <LoadingIcon message="Please allow the location prompt" />
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