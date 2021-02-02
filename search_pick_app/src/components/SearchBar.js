import React, { Component } from 'react';

class SearchBar extends Component {
  state = {  }
  render() {
    const {onInputChange, textstate} = this.props
    return (
      <div className="card container m-3">
        <form className="input-group w-50 card m-3 mx-auto">
          <input type="text" className="from-control p-2" placeholder="Search for an image" onChange={onInputChange} value={textstate}/>
        </form>
      </div>
    );
  }
}

export default SearchBar;