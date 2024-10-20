import React, { ReactNode } from "react";
import Image from "next/image";
import Content from "../molecules/Content";

interface ImageWithContentProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  text: string;
  children?: ReactNode;
  titleColor: string; // Color del título
  textColor: string; // Color del texto
  backgroundColor: string; // Color de fondo
  isImageLeft: boolean; // True si la imagen está a la izquierda
  borderRadius: boolean; // True si los bordes deben ser redondeados
  imageWidth: number; // Ancho de la imagen
  imageHeight: number; // Alto de la imagen
}

const ImageWithContent: React.FC<ImageWithContentProps> = ({
  imageSrc,
  imageAlt,
  title,
  text,
  titleColor,
  textColor,
  backgroundColor,
  isImageLeft,
  borderRadius,
  imageWidth,
  imageHeight,
  children,
}) => {
  return (
    <div
      className={`flex w-full ${isImageLeft ? "" : "flex-row-reverse"} flex-wrap`}
    >
      <div className="w-full lg:w-1/2">
        <Image
          className={`h-auto w-full ${borderRadius ? "rounded-l-lg" : ""}`}
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
        />
      </div>
      <div
        className={`mb-24 mt-24 w-full lg:w-1/2 ${borderRadius ? "rounded-r-lg" : ""} ${backgroundColor}`}
      >
        <Content
          title={title}
          text={text}
          titleColor={titleColor}
          textColor={textColor}
        >
          {children}
        </Content>
      </div>
    </div>
  );
};

export default ImageWithContent;
