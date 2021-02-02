import React, { Component } from 'react';
class Pagination extends Component {
  state = {  }
  render() { 
    return ( 
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="/">1</a></li>
          <li className="page-item active" aria-current="page">
            <span className="page-link">2</span>
          </li>
          <li className="page-item"><a className="page-link" href="/">3</a></li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;