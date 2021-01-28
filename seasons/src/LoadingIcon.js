import React from 'react';

const LoadingIcon = props => {
  return(
    <div class="ui active dimmer">
        <div class="ui massive text loader"> { props.message } </div>
      </div>
  )
}

LoadingIcon.defaultProps = {
  message:"Loading..."
};

export default LoadingIcon;