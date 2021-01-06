// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a React component
const App =  () => {
  return <h1>Hello world.</h1>;
};

// Take the React component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);