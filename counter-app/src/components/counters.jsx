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
    this.setState({
      counters: this.state.counters.filter(counter => currentId !== counter.id)
    });
  }

  render() {
    const { counters } = this.state;
    
    return ( 
      <div>
        {counters.map(counter => <Counter 
          key={counter.id} 
          counter={counter} 
          onDelete={ () => this.handleDelete(counter.id) 
        }/>)}
      </div>
    );
  }
}

export default Counters;