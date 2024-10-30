"use client";

import React from "react";

const CopyToClipboard: React.FC<{text: string}> = ({text}) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copiado al portapapeles.");
    }).catch(err => {
      console.error("Error al copiar al portapapeles: ", err);
    });
  };

  return (
    <button
      onClick={copyToClipboard}
      className="px-8 py-3 text-lg font-bold rounded-full border border-gray-600 hover:text-white hover:bg-gray-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
    >
      {text}
    </button>
  );
};

export default CopyToClipboard;