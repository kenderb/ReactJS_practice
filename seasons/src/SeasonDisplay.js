import React from 'react';

const seasonObj = {
  summer: {
    text: 'Just swet a ton in this season',
    iconName: 'sun'
  },
  winter:{
    text: 'Soo cool!!',
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
    <div>
      <i className = {`${ season.iconName } icon`}> </i>
      <h1>{ season.text  }</h1>
      <i className = {`${ season.iconName  } icon`}> </i>
    </div>
  );
}

export default SeasonDisplay;