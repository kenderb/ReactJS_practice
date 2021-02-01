import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: ["tag1", "tag2", "tag3"]
  };

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button 
          onClick={() => this.handleIncrement('My product')} 
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
    classess += this.state.value === 0 ? 'warning' : 'primary';
    return classess;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;