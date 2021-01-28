import React from 'react';
import './SeasonDisplay.css';

const seasonObj = {
  summer: {
    name: 'summer',
    text: 'Just swet a ton in this season',
    iconName: 'sun'
  },
  winter:{
    name: 'winter',
    text: 'Soo cold!!',
    iconName: 'snowflake'
  }
}

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? seasonObj.summer : seasonObj.winter;
  } else {
    return latitude > 0 ? seasonObj.winter : seasonObj.summer;
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());
  return(
    <div className={`season-display ${season.name}`}>
      <i className = {` icon-left massive ${ season.iconName } icon`}> </i>
      <h1 className='m-auto'>{ season.text  }</h1>
      <i className = {`icon-rigth massive ${ season.iconName  } icon`}> </i>
    </div>
  );
}

export default SeasonDisplay;