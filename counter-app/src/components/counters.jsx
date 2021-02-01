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

  render() {
    const { counters } = this.state;
    
    return ( 
      <div>
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