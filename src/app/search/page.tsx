import React from "react";
import SearchContainer from "../_components/organisms/SearchContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="mb-8 text-4xl font-bold">Bienvenido a Mi Aplicación</h1>
      <SearchContainer />
    </main>
  );
}
