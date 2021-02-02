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
            <figure className="featured" key={image.id}>
              <Image imageInfo={image} />
              <figcaption>{image.description}</figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}

export default Images;