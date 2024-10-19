import React from "react";
import Image from "next/image";
import MainTitle from "./MainTitle";
import SocialMediaLinks from "../molecules/SocialMediaLinks";

interface LogoWithTextProps {
  logoSrc: string;
  logoAlt: string;
  logoWidth: number; // Añade width para el logo
  logoHeight: number; // Añade height para el logo
}

const LogoWithSocialLinks: React.FC<LogoWithTextProps> = ({
  logoSrc,
  logoAlt,
  logoWidth,
  logoHeight,
}) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Image
        className="h-auto" // Elimina el width de Tailwind y usa el width como prop
        src={logoSrc}
        alt={logoAlt}
        width={logoWidth}
        height={logoHeight}
      />
      <SocialMediaLinks />
    </div>
  );
};

export default LogoWithSocialLinks;
