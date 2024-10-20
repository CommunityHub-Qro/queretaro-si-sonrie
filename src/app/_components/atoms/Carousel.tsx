'use client';
import { useState, useEffect } from 'react';

interface CarouselProps {
  images: string[]; 
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    let intervalId;
    if (autoPlay) {
      intervalId = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
      }, 2500); // change the image every 3 seconds
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [autoPlay, currentIndex, images]);

  const handleMouseEnter = () => {
    setAutoPlay(false);
  };

  const handleMouseLeave = () => {
    setAutoPlay(true);
  };

  return (
    <div 
      className='relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={images[currentIndex]} alt="Current image" />
      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
            {images.map((_, i) => (
            <div 
                key={i}
                className={`transition-all w-2 h-2 bg-white rounded-full ${currentIndex === i ? "p-1.5" : "bg-opacity-50"}`}
            />
            ))}
        </div>
      </div>
    </div>
  );
};