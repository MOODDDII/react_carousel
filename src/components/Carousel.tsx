import React from 'react';
import './Carousel.scss';
import { useState } from 'react';

interface CarouselProps {
  images: string[];
  step: number;
  frameSize: number;
  itemWidth: number;
  animationDuration: number;
  infinite: boolean;
}


const Carousel: React.FC<CarouselProps> = ({
  images,
  step,
  frameSize,
  itemWidth,
  animationDuration,
  infinite,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = images.length;

  const nextSlide = () => {
    if (infinite || currentIndex + step < totalSlides - frameSize + 1) {
      setCurrentIndex((prev) => Math.min(prev + step, totalSlides - frameSize));
    }
  };

  const prevSlide = () => {
    if (infinite || currentIndex - step >= 0) {
      setCurrentIndex((prev) => Math.max(prev - step, 0));
    }
  };

  return (
    <div className="Carousel">
      <div className="Carousel__container" style={{ width: `${itemWidth * frameSize}px` }}>
        <ul
          className="Carousel__list"
          style={{
            transform: `translateX(-${currentIndex * itemWidth}px)`,
            transitionDuration: `${animationDuration}ms`,
          }}
        >
          {images.map((image, index) => (
            <li className="Carousel__item" key={index}>
              <img
                className="Carousel__img"
                src={image}
                alt={`Slide ${index}`}
                style={{ width: `${itemWidth}px`}}
              />
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        type="button"
        onClick={nextSlide}
        data-cy="next"
      >
        Next
      </button>
    </div>
  );
}

export default Carousel;
