import React, {useState, useEffect} from 'react';
import wikipedia from './api/wikipedia';


const handleChange = (event, setText) => {
  setText(event.target.value);
};

const handleSubmit = (event, text) => {
  event.preventDefault();
  console.log('submited', text);
};

const callApi = async (text, setResult) => {
  try {
    const  { data }  = await wikipedia.get('', {
      params: { 
        action: 'query',
        list: 'search',
        origin: '*',
        format: 'json',
        srsearch: text,
      },
    });
  
    setResult(data.query.search);
  } catch (error) {
    console.log(error);
  }

}

const Search = () => {
  
  const [text, setText] = useState('programming');
  const [result, setResult] = useState([]);

  useEffect(() => {
    callApi(text, setResult);
  }, [text]);

  return(
    <div className="container">
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
      <div className="container mt-3">
        <h1 className="h5">results</h1>
        <div className="card p-3">
          {result.length}
        </div>
      </div>
    </div>
  );
}

export default Search;