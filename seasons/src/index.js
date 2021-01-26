import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDsiplay from './SeasonDisplay';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { latitude: null, errorMessage: '' };
  
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude })
      },
      error => this.setState({ errorMessage: error.message })
    );
  }

  showErrormessage(){
    return(
      <div>
        Error: {this.state.errorMessage}
      </div>
    );
  }

  render() {
    if (this.state.errorMessage) return this.showErrormessage();
    return(
      <div>
        Latitud: { this.state.latitude } <br/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);