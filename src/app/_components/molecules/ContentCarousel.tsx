"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

interface CarouselItem {
  titulo: string;
  contenido: string;
  urlImagen: string;
}

interface ContentCarouselProps {
  items: CarouselItem[];
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3); // Número inicial de ítems a mostrar

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, items.length - itemsToShow),
    );
  };

  // Asegúrate de que hay al menos un elemento
  if (items.length === 0) {
    return <div>No hay contenido para mostrar.</div>;
  }

  // Función para ajustar el número de elementos mostrados según el ancho de la ventana
  const updateItemsToShow = () => {
    if (window.matchMedia("(max-width: 639px)").matches) {
      setItemsToShow(1); // Móvil
    } else if (window.matchMedia("(max-width: 767px)").matches) {
      setItemsToShow(2); // Tablet
    } else {
      setItemsToShow(3); // Desktop
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    updateItemsToShow(); // Ajustar al montar el componente
    window.addEventListener("resize", updateItemsToShow); // Ajustar al redimensionar la ventana
    return () => {
      window.removeEventListener("resize", updateItemsToShow); // Limpiar el listener al desmontar
    };
  }, []);

  return (
    <div className="relative m-auto flex h-full w-full flex-col items-center overflow-hidden">
      <div className="flex w-full justify-center overflow-x-auto scroll-smooth">
        {items
          .slice(currentIndex, currentIndex + itemsToShow)
          .map((item, index) => (
            <div
              key={index}
              className="flex w-1/3 flex-shrink-0 flex-col items-center gap-5 p-2"
            >
              <img
                src={item.urlImagen}
                alt={`Image ${index + 1}`}
                className="rounded-lg sm:h-36 sm:w-36"
              />
              <h2 className="text-center font-bold sm:text-2xl">
                {item.titulo}
              </h2>
              <p className="text-center text-lg">{item.contenido}</p>
            </div>
          ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={handlePrev}
          className={`rounded-full bg-slate-200 p-2 text-gray-900 shadow transition hover:bg-white`}
          disabled={currentIndex === 0}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className={`rounded-full bg-slate-200 p-2 text-gray-900 shadow transition hover:bg-white ${
            currentIndex + itemsToShow >= items.length
              ? "cursor-not-allowed bg-gray-300"
              : "bg-slate-200"
          }`}
          disabled={currentIndex + itemsToShow >= items.length}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ContentCarousel;
