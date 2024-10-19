import React, { ReactNode } from "react";
import { Carousel } from "../atoms/Carousel";
import Content from "../molecules/Content";

interface CarouselWithContentProps {
  images: string[]; // Especifica que images es un arreglo de strings
  title: string;
  text: string;
  children?: ReactNode; // Cambiado a ReactNode para permitir más tipos de contenido
  titleColor: string; // Color del título
  textColor: string; // Color del texto
  backgroundColor: string; // Color de fondo
  isCarouselLeft: boolean; // True si la imagen está a la izquierda
  borderRadius: boolean; // True si los bordes deben ser redondeados
}

const CarouselWithContent: React.FC<CarouselWithContentProps> = ({
  images,
  title,
  text,
  titleColor,
  textColor,
  backgroundColor,
  isCarouselLeft,
  borderRadius,
  children,
}) => {
  return (
    <div
      className={`flex w-full ${isCarouselLeft ? "" : "flex-row-reverse"} flex-wrap`}
    >
      <div className="w-full lg:w-1/2">
        <Carousel images={images} />
      </div>
      <div
        className={`mb-24 mt-24 w-full lg:w-1/2 ${borderRadius ? "rounded-lg" : ""} ${backgroundColor}`}
      >
        <Content
          title={title}
          text={text}
          titleColor={titleColor}
          textColor={textColor}
        />
        {children}
      </div>
    </div>
  );
};

export default CarouselWithContent;
