import React from "react";
import { Stage, Layer, Image } from "react-konva";

class MyImage extends React.Component {
  state = {
    image: null
  };
  componentDidMount() {
    const image = new window.Image();
    image.src = this.props.src;
    image.onload = () => {
      this.setState({
        image: image
      });
    };
  }

  render() {
    return (
      <Image
        {...this.props}
        width={500}
        height={500}
        draggable={true}
        image={this.state.image}
      />
    );
  }
}

const PictoCanvas = () => {
  return (
    <Stage width={700} height={700}>
      <Layer>
        <MyImage
          x={0}
          y={0}
          src="https://static.arasaac.org/pictograms/10158_300.png"
        />
        <MyImage
          x={0}
          y={0}
          src="https://static.arasaac.org/pictograms/10157_500.png"
        />
      </Layer>
    </Stage>
  );
};

export default PictoCanvas;
