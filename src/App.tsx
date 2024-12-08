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

    /* eslint-disable @typescript-eslint/indent */
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
    /* eslint-disable @typescript-eslint/indent */
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
          <label>
            Enter width
            <input
              className="itemWidth"
              type="number"
              placeholder="Enter width"
              name="itemWidth"
              value={itemWidth}
              onChange={this.handleInputChange}
            />
          </label>

          <label>
            Enter size of frame
            <input
              className="frameSize"
              type="number"
              placeholder="Enter size of frame"
              name="frameSize"
              value={frameSize}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Enter step
            <input
              className="step"
              type="number"
              placeholder="Enter step"
              name="step"
              value={step}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Enter duration of animation
            <input
              className="animationDuration"
              type="number"
              placeholder="Enter duration of animation"
              name="animationDuration"
              value={animationDuration}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default App;
