import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return(
      <form action="/" className="ui form">
        <div className="field">
          <input type="text" placeholder="Type your image name"/>
        </div>
      </form>
    )
  }
}