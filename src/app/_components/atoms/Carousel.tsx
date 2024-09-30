'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

interface CarouselProps {
  images: string[]; 
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  useEffect(() => {
    let intervalId;
    if (autoPlay) {
      intervalId = setInterval(handleNext, 2500); // change the image every 3 seconds
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
      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button onClick={handlePrev} className='p-1 rounded-full shadow text-gray-900 hover:bg-white bg-slate-200'>
            <ChevronLeft size={20}/>
        </button>
        <button onClick={() => {
          handleNext();
          setAutoPlay(false);
        }} className='p-1 rounded-full shadow text-gray-900 hover:bg-white bg-slate-200'>
            <ChevronRight size={20}/>
        </button>
      </div>
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