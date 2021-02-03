import React, {useState} from 'react';


const handleChange = (event, setText) => {
  setText(event.target.value);
};

const handleSubmit = (event, text) => {
  event.preventDefault();
  console.log('submited', text);
};

const Search = () => {
  const [text, setText] = useState(' ');

  return(
    <form onSubmit = {(e) => handleSubmit(e, text)} className="card container">
      <div className="form-group card-body">
        <label htmlFor="name" className="font-weight-bold">Search a topic </label>
        <input 
          type="text" 
          id="name" 
          placeholder="programming" 
          className="form-control"
          onChange={(e) => handleChange(e, setText)}
          value = {text}
        />
      </div>
    </form>
  );
}

export default Search;