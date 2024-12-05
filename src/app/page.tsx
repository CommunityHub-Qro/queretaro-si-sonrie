import { Decorations, Icon } from "./_components/atoms/Decorations";
import { Carousel } from "./_components/atoms/Carousel";
import { servicios } from "./constants";

import Link from "next/link";
export default function Home() {
  const images = [
    "/images/601.png",
    "/images/602.png",
    "/images/603.png",
    "/images/604.png",
    "/images/605.png",
  ];

  return (
    <main className="pb-32">
      {/* Inicio */}
      <section className="container mx-auto grid h-screen grid-cols-1 items-center gap-6 p-4 md:h-[26rem] md:grid-cols-2">
        <div className="flex items-center justify-center">
          <img src="/images/Collage.png" alt="imagen" className="max-w-full" />
        </div>
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/images/mainTitle.png"
            alt="Título principal"
            className="mb-4"
          />
          <div className="flex space-x-4">
            <Link href="https://www.instagram.com/qrosisonrie/">
              <img src="icons/logoInstagram.png" className="h-8 w-8" />
            </Link>
            <Link href="https://www.facebook.com/p/Queretaro-Si-Sonrie-100064085523281/?locale=es_LA">
              <img src="icons/logoFacebook.png" className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </section>

      {/* Título principal */}
      <div className="container mx-auto my-16 flex justify-end">
        <div className="w-full text-right md:w-1/2">
          <h1 className="text-2xl font-bold md:text-4xl">
            El Instituto Queretano para la Atención de Enfermedades Congénitas
            (IQUEC)
          </h1>
        </div>
      </div>

      {/* Misión / Visión */}
      <section className="container mx-auto grid grid-cols-1 gap-6 p-4 md:grid-cols-2">
        <div className="flex items-center justify-center">
          <img
            src="/images/elipse1.png"
            alt="Imagen de misión"
            className="w-3/4 max-w-md"
          />
        </div>
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="text-2xl font-bold md:text-4xl">Conócenos...</h1>
          <p className="mt-4 max-w-md">
            Nuestra misión es atender a todos los pacientes con fisura labio
            palatina que se encuentren radicando en la ciudad de Querétaro,
            teniendo acceso a un tratamiento multidisciplinario de alta calidad,
            llevado a cabo por especialistas calificados en el protocolo de
            atención. Para ello, todo nuestro personal médico y dental es
            voluntario en el proyecto, donando sus honorarios médicos.
          </p>
        </div>
      </section>

      {/* Visión */}
      <section className="container mx-auto mt-16 grid grid-cols-1 gap-6 p-4 md:grid-cols-2">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold md:text-4xl">Visión</h1>
          <p className="mt-4 max-w-md">
            Nuestra meta es alcanzar estándares de calidad en el protocolo de
            atención, así como desarrollar proyectos de investigación para
            mejorar la atención multidisciplinaria.
          </p>
          <p className="mt-4 max-w-md">
            Deseamos seguir siendo una fundación económicamente autosustentable
            para poder trabajar con finanzas transparentes y no depender de
            donativos, los cuales pueden ser variables.
          </p>
          <h1 className="mt-8 text-center text-2xl font-bold text-red-500 md:text-left">
            ¡Sigue sonriendo con nosotros!
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-full max-w-lg overflow-hidden rounded-md border-4 border-blue-600">
            <Carousel images={images} />
          </div>
          <Link
            href="/donations-page"
            className="mt-4 rounded-full bg-red-500 px-6 py-2 text-white shadow-md hover:bg-red-600"
          >
            Donar
          </Link>
        </div>
      </section>

      {/* Servicios */}
      <section className="container mx-auto mt-16">
        <h1 className="mb-8 text-center text-3xl font-bold md:text-4xl">
          Servicios
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio, i) => (
            <div
              key={i}
              className="flex flex-col items-center space-y-4 rounded-lg border p-4 shadow-md"
            >
              <Icon img={servicio.img} />
              <h2 className="text-xl font-bold">{servicio.titulo}</h2>
              <p className="text-center">{servicio.descripción}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
