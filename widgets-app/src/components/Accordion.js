import React from 'react';

const Accordion = ({items}) =>{
  return(
    <div className="accordion">
      {items.map( item => {
          return(
            <div className="card" key={item.id}>
              <div className="card-header">
                <h5 className="mb-0">
                  <button className="btn btn-link collapsed" >
                    {item.title}
                  </button>
                </h5>
              </div>
              <div className="collapse show" >
                <div className="card-body">
                  {item.description}
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default Accordion;