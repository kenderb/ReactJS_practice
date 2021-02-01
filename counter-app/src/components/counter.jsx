import React, { Component } from 'react';

class Counter extends Component {

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button 
          onClick={this.props.onIncrement} 
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button className="btn btn-danger btn-small m-2" onClick={this.props.onDelete}>
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classess = 'badge m-2 badge-';
    classess += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classess;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;