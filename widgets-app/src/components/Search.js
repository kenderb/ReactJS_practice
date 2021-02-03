import React from 'react';

const Search = () => {
  return(
    <form className="card container">
      <div className="form-group card-body">
        <label htmlFor="name" className="font-weight-bold">Search a topic </label>
        <input type="text" id="name" placeholder="programming" className="form-control "/>
      </div>
    </form>
  );
}

export default Search;