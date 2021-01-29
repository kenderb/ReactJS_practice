import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
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