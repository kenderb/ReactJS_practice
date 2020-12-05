import logo from './logo.svg';
import './App.css';
import React from 'react';

function getTitle(title) {
  return title;
}

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const welcome = {
  greeting: 'Hey',
  title: getTitle('React') ,
};

function App() {
  return (
    <div>
      <img src={logo} alt="react logo" className="App-logo"/>
      <h1>
        My Hacker Stories
      </h1>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search"/>

      <hr />
      {list.map(item => {
        return(
          <div key={ item.objectID }> 
            <span>
              <a href={item.url}>{item.title} </a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>
        );
      })}
    </div>
  );
}

export default App;
