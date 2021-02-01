import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = { 
    counters: [
      {id: 1, value:0},
      {id: 2, value:5},
      {id: 3, value:0},
      {id: 4, value:0},
    ] 
  }

  handleDelete(currentId) {
    const counters = this.state.counters.filter(counter => currentId !== counter.id);
    this.setState({counters});
  }

  handleIncrement(counter) {
    const counters = this.state.counters.map((c) => {
      if (counter === c) return {id: c.id, value: c.value += 1};
      return c;
    });

    this.setState({counters});
  }

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      return {id: counter.id, value: 0 };
    });
    this.setState({counters});
  }

  render() {
    const { counters } = this.state;
    
    return ( 
      <div>
        <button className="btn btn-primary" onClick={this.handleReset}>
          Reset
        </button>
        {counters.map(counter => <Counter 
          key={counter.id} 
          counter={counter} 
          onDelete={ () => this.handleDelete(counter.id) }
          onIncrement={() => this.handleIncrement(counter)}
        />)}
      </div>
    );
  }
}

export default Counters;