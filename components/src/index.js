import React from 'react';
import ReactDOM from 'react-dom';
import avatar from './images/faces/ceekaytweet_128.jpg'

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img  alt="avatar" src={avatar} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">
              Today at 10:00PM.
            </span>
          </div>
          <div className="text">
            Nice app here, men!
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));