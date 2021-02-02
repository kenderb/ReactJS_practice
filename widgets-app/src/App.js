import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    id: 1,
    title: 'What is python?',
    description: 'Python is a programming lenguaje to create great apps.'
  },
  {
    id: 2,
    title: 'What is React?',
    description: 'Is a fornt-end libery base on components.'
  },
  {
    id: 3,
    title: 'What is JavaScript',
    description: 'JavaScript is a programming lenguaje to create great apps using HTML and CSS.'
  },
];
const App = () => {
  return(
    <div className="container">
      <Accordion items={items}/>
    </div>
  );
}

export default App;