import React from 'react';

const  Images  = (props) =>{
  const {images} = props
  return(  
    <div className="container">
      {images.length} images
      {images.map( image => {
        return <img src={image.urls.regular} alt={image.description}  key={image.id}/>
      })}
    </div>
  );
}

export default Images;