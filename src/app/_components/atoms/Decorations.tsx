"use client";
import React, { FC, useEffect } from "react";

interface DecorationProps {
  color1: string;
  color2: string;
  color3?: string;
  rotation?: string;
  className: string;
}

interface IconProps {
  img: string;
}

export const Decorations: FC<DecorationProps> = ({
  color1,
  color2,
  rotation,
  color3,
  className,
}) => {
  return (
    <div
      className={`absolute -z-10 ${
        rotation ? (parseInt(rotation) < 0 ? "-rotate-45" : "rotate-45") : null
      } ${className}`}
    >
      <div
        className={`h-16 w-[45rem] rounded-full ${
          color1 === "specialYellow"
            ? "bg-specialYellow"
            : color1 === "specialBlue"
              ? "bg-specialBlue"
              : "bg-specialRed"
        }`}
      />
      <div
        className={`relative -top-3 left-20 h-16 w-[45rem] rounded-full ${
          color2 === "specialYellow"
            ? "bg-specialYellow"
            : color2 === "specialBlue"
              ? "bg-specialBlue"
              : "bg-specialRed"
        }`}
      />
      {color3 ? (
        <div
          className={`relative -left-20 -top-3 h-16 w-[45rem] rounded-full ${
            color3 === "specialYellow"
              ? "bg-specialYellow"
              : color3 === "specialBlue"
                ? "bg-specialBlue"
                : "bg-specialRed"
          }`}
        />
      ) : null}
    </div>
  );
};

export const Icon: FC<IconProps> = ({ img }) => {
  return (
    <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-dashed border-black">
      <img src={"images/" + img} className="size-20" />
    </div>
  );
};
