import React from "react";
import ContentCarousel from "../molecules/ContentCarousel";
import Content from "../molecules/Content";

interface ContentCarouselWithContentProps {
  items: {
    titulo: string;
    contenido: string;
    urlImagen: string;
  }[]; // Arreglo de ítems para el carrusel
  title: string;
  text: string;
  titleColor: string; // Color del título
  textColor: string; // Color del texto
  backgroundColor: string; // Color de fondo
  borderRadius: boolean; // True si los bordes deben ser redondeados
}

const ContentCarouselWithContent: React.FC<ContentCarouselWithContentProps> = ({
  items,
  title,
  text,
  titleColor,
  textColor,
  backgroundColor,
  borderRadius,
}) => {
  return (
    <div className="mb-24 flex w-full flex-col">
      <div
        className={`mb-8 w-full ${borderRadius ? "rounded-lg" : ""} ${backgroundColor}`}
      >
        <Content
          title={title}
          text={text}
          titleColor={titleColor}
          textColor={textColor}
        />
      </div>
      <div className="w-full">
        <ContentCarousel items={items} /> {/* Usa ContentCarousel aquí */}
      </div>
    </div>
  );
};

export default ContentCarouselWithContent;
