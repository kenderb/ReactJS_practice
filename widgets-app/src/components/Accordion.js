import { render } from '@testing-library/react';
import React from 'react';


const renderTitle = (title) =>{
  return(
    <div className="card-header">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" >
          {title}
        </button>
      </h5>
    </div>
  );
}

const renderDescription = (description) => {
  return(
    <div className="collapse show" >
      <div className="card-body">
        {description}
      </div>
    </div>
  );
}

const Accordion = ({items}) =>{
  return(
    <div className="accordion">
      {items.map( item => {
        return(
          <div className="card" key={item.id}>
            {renderTitle(item.title)}
            {renderDescription(item.description)}
          </div>
        );
      })
      }
    </div>
  );
}

export default Accordion;