"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

interface CarouselProps {
  images: string[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="relative m-auto h-full max-w-[80%] overflow-hidden rounded-lg">
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={handlePrev}
          className="rounded-full bg-slate-200 p-2 text-gray-900 shadow transition hover:bg-white"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="rounded-full bg-slate-200 p-2 text-gray-900 shadow transition hover:bg-white"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-3 w-3 rounded-full transition-all ${
                currentIndex === i
                  ? "bg-white p-1"
                  : "bg-gray-400 bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
