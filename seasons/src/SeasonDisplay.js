import React from 'react';

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? 'Summer' : 'Winter';
  } else {
    return latitude > 0 ? 'Winter' : 'Summer';
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());
  return(
    <div>Season here { season }</div>
  );
}

export default SeasonDisplay;