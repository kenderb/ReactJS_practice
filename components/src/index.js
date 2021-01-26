import React from 'react';
import ReactDOM from 'react-dom';
import ComentDatil from "./ComentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <ComentDatil />
      <ComentDatil />
      <ComentDatil />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));