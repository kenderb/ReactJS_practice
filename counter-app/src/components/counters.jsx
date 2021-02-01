import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  
  render() {
    const { counters } = this.props.state;
    return ( 
      <div>
        <button className="btn btn-primary" onClick={this.props.onReset}>
          Reset
        </button>
        {counters.map(counter => <Counter 
          key={counter.id} 
          counter={counter} 
          onDelete={ () => this.props.onDelete(counter.id) }
          onIncrement={() => this.props.onIncrement(counter)}
          onDecrease={()=> this.props.onDecrease(counter)}
        />)}
      </div>
    );
  }
}

export default Counters;