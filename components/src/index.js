import React from 'react';
import ReactDOM from 'react-dom';
import CommentDatil from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDatil
        author="Kender"
        date="9:00 PM"
        comment="Hi there people"
      />
      <CommentDatil
        author="Keelan"
        date="5:00 AM"
        comment="OHH noooo!!"
      />
      <CommentDatil
        author="Kenay"
        date="3:00 PM"
        comment="Where is my food"
      />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));