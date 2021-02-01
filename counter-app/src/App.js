import React, {Component} from 'react';
import Counters from "./components/counters";
import Navbar from "./components/navbar";

export default class App extends Component{
  
  state = { 
    counters: [
      {id: 1, value:0},
      {id: 2, value:5},
      {id: 3, value:0},
      {id: 4, value:0},
    ] 
  }

  handleDelete = (currentId) => {
    const counters = this.state.counters.filter(counter => currentId !== counter.id);
    this.setState({counters});
  }

  handleIncrement = (counter) => {
    const counters = this.state.counters.map((c) => {
      if (counter === c) return {id: c.id, value: c.value += 1};
      return c;
    });

    this.setState({counters});
  }

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      return {id: counter.id, value: 0};
    });
    this.setState({counters});
  }

  render(){
    return(
      <div>
        <Navbar />
        <main className="container mt-3">
          <Counters 
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            state={this.state}
          />
        </main>
      </div>
    );
  }
}
