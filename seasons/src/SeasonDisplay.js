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
  const text = season === 'Winter' ? 'Too cold these months' : "It's hot in here!"
  return(
    <div>{ text }</div>
  );
}

export default SeasonDisplay;