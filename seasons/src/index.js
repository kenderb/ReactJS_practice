import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDsiplay from './SeasonDisplay';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position.coords),
    (error) => console.log(error)
  );
  return(
    <div>
      {/* <SeasonDsiplay /> */}
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);