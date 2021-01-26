import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDsiplay from './SeasonDisplay';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { latitude: null };
  
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude })
      },
      (error) => console.log(error)
    );
  }

  render() {
    return(
      <div>
        Latitud: { this.state.latitude }
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);