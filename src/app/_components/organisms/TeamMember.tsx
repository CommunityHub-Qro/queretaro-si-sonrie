import React from "react";
import Content from "../molecules/Content";

interface TeamMemberProps {
  name: string; // Nombre del miembro del equipo
  role: string; // Rol del miembro del equipo
  imageUrl: string; // URL de la imagen del miembro del equipo
  titleColor: string; // Color del título
  textColor: string; // Color del texto
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  imageUrl,
  titleColor,
  textColor,
}) => {
  return (
    <div className="flex w-full max-w-sm flex-shrink-0 flex-grow flex-col items-center text-center">
      <div className="relative mb-4 flex items-center justify-center">
        <div className="absolute h-28 w-28 rounded-full bg-gray-200 sm:h-72 sm:w-72"></div>
        <img
          src={imageUrl}
          alt={name}
          className="relative h-24 w-24 rounded-full object-cover sm:h-64 sm:w-64"
        />
      </div>
      <Content
        title={name}
        text={role}
        titleColor={titleColor}
        textColor={textColor}
      />
    </div>
  );
};

export default TeamMember;
