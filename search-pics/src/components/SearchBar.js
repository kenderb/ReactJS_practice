import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return(
      <div>
        <form action="/">
          <input type="text" placeholder="Type your image name"/>
        </form>
      </div>
    )
  }
}