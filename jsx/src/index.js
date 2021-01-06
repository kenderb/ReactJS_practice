// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a React component
const App =  () => {
  const btnText = {text: "I'm a button"};
  return (
    <form action="submit">
      <label className="some-class" for='name'>
        Name:
      </label>
      <input type="text" id="name"/>
      <button style={{backgroundColor: 'blue', color: 'white'}}>
        {btnText.text}
      </button>
    </form>
  );
};

// Take the React component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);