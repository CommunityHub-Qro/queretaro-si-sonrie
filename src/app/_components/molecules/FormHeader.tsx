import React, { type ReactNode } from "react";

interface FormHeaderProps {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({
  title = "",
  subtitle,
  className = "",
}) => {
  return (
    <div className={className}>
      {title && (
        <h2 className="mb-12 text-4xl font-bold text-black md:text-5xl">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-base text-gray-700 md:text-2xl">{subtitle}</p>
      )}
    </div>
  );
};

export default FormHeader;
