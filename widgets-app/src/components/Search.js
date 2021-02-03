import React, {useState, useEffect} from 'react';
import wikipedia from './api/wikipedia';
import './search.css';

const handleChange = (event, setText) => {
  setText(event.target.value);
};

const handleSubmit = (event) => {
  event.preventDefault();
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
  const [text, setText] = useState('cats');
  const [result, setResult] = useState([]);
  
  useEffect(() => {
    if (text && !result.length) {
      callApi(text, setResult)
    } else {
      const timeId = setTimeout(() => {
        if(text) callApi(text, setResult)
      }, 500);
      return() => {
        clearTimeout(timeId);
      };
    }
  }, [text, result.length]);

  return(
    <div className="container">
      <form onSubmit = {(e) => handleSubmit(e)} className="card container">
        <div className="form-group card-body">
          <label htmlFor="name" className="font-weight-bold">Search a term</label>
          <input 
            type="text" 
            id="name" 
            placeholder="Search" 
            className="form-control"
            onChange={(e) => handleChange(e, setText)}
            value = {text}
          />
        </div>
      </form>
  
      <div className="container mt-3">
        <h1 className="h5">results</h1>
        {result.map( item => {
          return (
            <div className="card my-3" key={item.pageid}>
              <div className="card-header">
                {item.title}
              </div>
              <div className="card-body">
                <p dangerouslySetInnerHTML={{ __html: item.snippet }}></p>
                <a 
                  href={`https://en.wikipedia.org/wiki/${item.title}`} 
                  className="btn btn-primary" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  Go to {item.title} page
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;