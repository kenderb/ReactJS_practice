import React, { Component } from 'react';

class Counter extends Component {

  render() {
    const {onIncrement, onDecrease, onDelete} = this.props;
    return (
      <div className="row">
        <span className={`${this.getBadgeClasses()} col-1`}>{this.formatCount()}</span>
        <div className="col-6">
          <button 
            onClick={onIncrement} 
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>
          <button 
            className={`btn btn-secondary btn-sm m-2 ${ this.desableBtn() }`} 
            onClick={onDecrease} disabled={this.desableBtn()}
          >
            -
          </button>
          <button className="btn btn-danger btn-small m-2" onClick={onDelete}>
            x
          </button>
        </div>
      </div>
    );
  }
  
  desableBtn(){
    return this.props.counter.value <= 0 ? 'disabled' : null;
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