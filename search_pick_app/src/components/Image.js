import React, { Component } from 'react';

class Image extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  componentDidMount(){
    this.imageRef.current.addEventListener('load', this.setSpan)
  }

  setSpan = () => {
    console.log(this.imageRef.current.height);
  }

  render() {
    const {urls, alt_description} =  this.props.imageInfo;
    return ( 
      <img ref={this.imageRef}src={urls.regular} alt={alt_description}/>
    );
  }
}
 
export default Image;