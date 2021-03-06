import logo from './logo.svg';
import './App.css';
import React from 'react';

const getTitle = (title) => {
  return title;
}


const list2 = [
  {
    title: 'Test',
    url: 'https://reactjs.org/',
    author: 'Randon Name',
    num_comments: 3,
    points: 4,
    objectID: 0,
  }, 
]

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
  {
    title: 'Python',
    url: 'https://www.python.org//',
    author: 'Guido van Rossum',
    num_comments: 10,
    points: 10,
    objectID: 2,
  },
  {
    title: 'Ruby',
    url: 'https://www.ruby-lang.org/en/',
    author: 'Yukihiro Matsumoto',
    num_comments: 2,
    points: 5,
    objectID: 3,
  },
  {
    title: 'Django',
    url: 'https://www.djangoproject.com/',
    author: 'Adrian Holovaty',
    num_comments: 7,
    points: 5,
    objectID: 4,
  },
];

const welcome = {
  greeting: 'Hey',
  title: getTitle('React') ,
};

<<<<<<< HEAD
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
      <List />
      <List />
    </div>
  );
}
=======
const App = () => (
  <div>
    <img src={logo} alt="react logo" className="App-logo"/>
    <h1>
      My Hacker Stories
    </h1>
    <label htmlFor="search">Search: </label>
    <input type="text" id="search"/>
    <hr />
    <List data={list2}/>
    <List />
  </div>
);
>>>>>>> d573d69a590598b28e4351abea7d587fae18258e

const List = () => 
  list.map(item => (
    <div key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </div>
));
export default App;
