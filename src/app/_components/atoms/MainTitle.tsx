import React from "react";

interface MainTitleProps {
  title: string;
  color?: string; // Color opcional para el texto
  size?: string; // Tamaño opcional (puede ser un tamaño de Tailwind como "text-4xl", "text-5xl", etc.)
}

const MainTitle: React.FC<MainTitleProps> = ({
  title,
  color = "text-black", // Color por defecto
  size = "text-5xl", // Tamaño por defecto
}) => {
  return (
    <div className="mx-auto md:max-w-[70%]">
      {/* Contenedor con max-width del 70% */}
      <h1 className={`${color} md:${size} text-4xl font-bold md:text-center`}>
        {title}
      </h1>
    </div>
  );
};

export default MainTitle;
