import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  handleIncrement = () => {
    this.setState(
      {
        count: this.state.count + 1
      }
    );
  }

  render() {
    const { tags } = this.state
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button 
          onClick={this.handleIncrement} 
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* <ul>
          {tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classess = 'badge m-2 badge-';
    classess += this.state.count === 0 ? 'warning' : 'primary';
    return classess;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;