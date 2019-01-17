import React from 'react';

class ImageCard extends React.Component {
  constructor (props) {
    super(props);

    this.imageRef = React.createRef();
    this.state = { spans: 0 };
    // setting spans to 0 suggests the images require 0 space until they are loaded, which is fine
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render () {
    const { description, urls } = this.props.image;

    return <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
      <img ref={ this.imageRef } alt={ description } src={ urls.regular } />
    </div>
  }
}

export default ImageCard;
