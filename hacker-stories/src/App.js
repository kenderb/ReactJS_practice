import logo from './logo.svg';
import './App.css';
import React from 'react';

function getTitle(title) {
  return title;
}
const myArray = ['kender', 2, 3, 4, 5]

const welcome = {
  greeting: 'Hey',
  title: getTitle('React') ,
};

function App() {
  return (
    <div>
      <img src={logo} alt="react logo" className="App-logo"/>
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>
      <ul>
        { myArray.map(number => {return <li>{number}</li> })}
      </ul>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search"/>
    </div>
  );
}

export default App;
