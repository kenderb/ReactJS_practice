import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDsiplay from './SeasonDisplay';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { latitude: null};
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => position.coords,
      (error) => console.log(error)
    );
    return(
      <div>
        Latitud:
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);