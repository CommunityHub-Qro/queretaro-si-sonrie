import React, { ReactNode } from "react";
import Text from "../atoms/Text";

interface ContentProps {
  title: string;
  text: string;
  titleColor: string;
  textColor: string;
  children?: ReactNode;
}

const Content: React.FC<ContentProps> = ({
  title,
  text,
  titleColor,
  textColor,
  children,
}) => {
  return (
    <div className="p-5">
      <h2 className={`mb-12 text-4xl font-bold md:text-5xl ${titleColor}`}>
        {title}
      </h2>
      <Text className={`text-base md:text-2xl ${textColor}`}>{text}</Text>
      {children}
    </div>
  );
};

export default Content;