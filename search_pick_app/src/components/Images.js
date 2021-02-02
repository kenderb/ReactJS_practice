import React from 'react';
import Image from './Image';

const  Images  = (props) =>{
  const {images} = props
  return(  
    <div className="container">
      {images.length} images
      <div className="container portfolio">
        {images.map( image => {
          return(
            <Image imageInfo={image} key={image.id}/>
          );
        })}
      </div>
    </div>
  );
}

export default Images;