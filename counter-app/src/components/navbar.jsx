import React from 'react';

const Navbar = ({moviesNumber}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Navbar <span className="badge badge-pill badge-dark">{moviesNumber}</span></a>
    </nav>
  );
}

export default Navbar;