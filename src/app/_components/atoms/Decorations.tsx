"use client";
import React, { FC } from "react";

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
      className={`absolute -z-10 overflow-hidden ${rotation ? (parseInt(rotation) < 0 ? "-rotate-45" : "rotate-45") : ""} ${className}`}
    >
      <div
        className={`h-16 w-[40vw] rounded-full md:w-[45vw] ${color1 === "fourth" ? "bg-fourth" : color1 === "fifth" ? "bg-fifth" : "bg-third"}`}
      />
      <div
        className={`relative -top-3 left-20 h-16 w-[30vw] rounded-full md:w-[40vw] ${color2 === "fourth" ? "bg-fourth" : color2 === "fifth" ? "bg-fifth" : "bg-third"}`}
      />
      {color3 && (
        <div
          className={`relative -left-0 -top-3 h-16 w-[40vw] rounded-full md:w-[45vw] ${color3 === "fourth" ? "bg-fourth" : color3 === "fifth" ? "bg-fifth" : "bg-third"}`}
        />
      )}
    </div>
  );
};

export const Icon: FC<IconProps> = ({ img }) => {
  return (
    <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-dashed border-black md:h-32 md:w-32">
      <img src={`images/${img}`} className="h-20 w-20 object-cover" />
    </div>
  );
};
