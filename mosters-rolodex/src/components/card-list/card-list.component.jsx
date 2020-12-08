import React from 'react';

import './card-list.style.css';

export const CardList = props => {
  
  return (
    <div className='card-list'>{props.children}</div>
  )
}