import React, { Component } from 'react';
class Navbar extends Component {
  render() { 
    return ( 
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Navbar <span className="badge badge-pill badge-dark">{this.props.moviesNumber}</span></a>
      </nav>
    );
  }
}

export default Navbar;