import React from "react";
import Image from "next/image";
import LogoWithText from "../atoms/LogoWithSocialLinks";

interface BannerProps {
  leftImageSrc: string;
  leftImageAlt: string;
  logoSrc: string;
  logoAlt: string;
  leftImageWidth: number; // Añade width para la imagen izquierda
  leftImageHeight: number; // Añade height para la imagen izquierda
  logoWidth: number; // Añade width para el logo
  logoHeight: number; // Añade height para el logo
}

const Banner: React.FC<BannerProps> = ({
  leftImageSrc,
  leftImageAlt,
  logoSrc,
  logoAlt,
  leftImageWidth,
  leftImageHeight,
  logoWidth,
  logoHeight,
}) => {
  return (
    <div className="flex w-full flex-wrap">
      <div className="w-full lg:w-1/2">
        <Image
          className="h-auto w-full"
          src={leftImageSrc}
          alt={leftImageAlt}
          width={leftImageWidth} // Proporciona el width
          height={leftImageHeight} // Proporciona el height
        />
      </div>
      <div className="mb-24 mt-24 w-full lg:w-1/2">
        <LogoWithText
          logoSrc={logoSrc}
          logoAlt={logoAlt}
          logoWidth={logoWidth}
          logoHeight={logoHeight}
        />
      </div>
    </div>
  );
};

export default Banner;
