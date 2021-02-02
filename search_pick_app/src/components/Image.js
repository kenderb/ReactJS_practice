import React, { Component } from 'react';

class Image extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = {heightSpan: 0}
  }

  componentDidMount(){
    this.imageRef.current.addEventListener('load', this.setSpan)
  }

  setSpan = () => {
    this.setState({ heightSpan: Math.ceil(this.imageRef.current.height/20)});
  }

  render() {
    const {urls, alt_description} =  this.props.imageInfo;
    return ( 
      <img ref={this.imageRef} src={urls.regular} alt={alt_description} style={{ gridRowEnd: `span ${this.state.heightSpan}`}}/> 
    );
  }
}

export default Image;