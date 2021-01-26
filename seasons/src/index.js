import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDsiplay from './SeasonDisplay';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => position.coords,
    (error) => console.log(error)
  );
  return(
    <div>
      Latitud:
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);