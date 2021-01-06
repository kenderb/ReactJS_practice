// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a React component
const App =  () => {
  return (
    <form action="submit">
      <label className="some-class" for='name'>
        Name:
      </label>
      <input type="text" id="name"/>
      <button style={{backgroundColor: 'blue', color: 'white'}}>Submit</button>
    </form>
  );
};

// Take the React component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);