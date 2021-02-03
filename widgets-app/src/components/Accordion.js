import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'


const handleClick = (index, setActiveIndex) => {
  setActiveIndex(index);
}

const renderTitle = (title, index, setActiveIndex) => {
  return(
    <div className="card-header">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" onClick={() => handleClick(index, setActiveIndex)}>
          <FontAwesomeIcon icon={faSortDown} /> {title}
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

const Accordion = ({items}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const listOfItems = items.map( item => {
    return(
      <div className="card" key={item.id}>
        {renderTitle(item.title, item.id, setActiveIndex)}
        {renderDescription(item.description)}
      </div>
    );
  });

  return(
    <div className="accordion">
      { listOfItems }
      { activeIndex }
    </div>
  );
}

export default Accordion;