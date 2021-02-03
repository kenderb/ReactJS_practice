import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'


const handleClick = (index, setActiveIndex) => {
  setActiveIndex(index);
}

const renderTitle = (title, index, activeIndex,  setActiveIndex) => {
  return(
    <div className="card-header">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" onClick={() => handleClick(index, setActiveIndex)}>
          <FontAwesomeIcon icon={index === activeIndex ? faSortUp : faSortDown} /> {title}
        </button>
      </h5>
    </div>
  );
}

const renderDescription = (description, id, activeIndex) => {
  let classShow = activeIndex === id ? 'show' : '';
  return(
    <div className={`collapse ${classShow}`} >
      <div className="card-body">
        {description}
      </div>
    </div>
  );
}

const Accordion = ({items}) => {

  const [activeIndex, setActiveIndex] = useState(null);
  const listOfItems = items.map( item => {
    return(
      <div className="card" key={item.id}>
        {renderTitle(item.title, item.id, activeIndex,  setActiveIndex)}
        {renderDescription(item.description, item.id, activeIndex)}
      </div>
    );
  });

  return(
    <div className="accordion">
      { listOfItems }
    </div>
  );
}

export default Accordion;