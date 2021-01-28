import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return(
      <div className="ui cards">
        <form action="/" className="ui form card" >
          <div className="field">
            <input type="text" placeholder="Type your image name"/>
          </div>
        </form>
      </div>
    )
  }
}