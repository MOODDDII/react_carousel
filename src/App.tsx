import React from 'react';
import './App.scss';
import Carousel from './components/Carousel';

interface State {
  images: string[];
  itemWidth: number;
  frameSize: number;
  step: number;
  animationDuration: number;
}

class App extends React.Component<{}, State> {
  state = {
    images: [
      './img/1.png',
      './img/2.png',
      './img/3.png',
      './img/4.png',
      './img/5.png',
      './img/6.png',
      './img/7.png',
      './img/8.png',
      './img/9.png',
      './img/10.png',
    ],
    itemWidth: 130,
    frameSize: 3,
    step: 3,
    animationDuration: 1000,
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numberValue = Number(value);

    if (
      name === 'itemWidth' ||
      name === 'frameSize' ||
      name === 'step' ||
      name === 'animationDuration'
    ) {
      if (!isNaN(numberValue)) {
        this.setState({
          [name]: numberValue,
        } as Pick<
        State,
        'itemWidth' | 'frameSize' | 'step' | 'animationDuration'
        >);
      }
    }
  };

  render() {
    const { images, itemWidth, frameSize, step, animationDuration } =
      this.state;

    return (
      <div className="App">
        {/* eslint-disable-next-line */}
        <h1 data-cy="title">Carousel with {images.length} images</h1>

        <Carousel
          images={images}
          step={step}
          frameSize={frameSize}
          itemWidth={itemWidth}
          animationDuration={animationDuration}
          infinite={false}
        />

        <div className="inputs">
          <input
            className="itemWidth"
            type="text"
            placeholder="Enter width"
            name="itemWidth"
            value={itemWidth}
            onChange={this.handleInputChange}
          />
          <input
            className="frameSize"
            type="text"
            placeholder="Enter size of frame"
            name="frameSize"
            value={frameSize}
            onChange={this.handleInputChange}
          />
          <input
            className="step"
            type="text"
            placeholder="Enter step"
            name="step"
            value={step}
            onChange={this.handleInputChange}
          />
          <input
            className="animationDuration"
            type="text"
            placeholder="Enter duration of animation"
            name="animationDuration"
            value={animationDuration}
            onChange={this.handleInputChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
