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
    <main className="h-fit pb-32">
      {/* Inicio */}
      <section className="grid h-screen md:h-[26rem] md:grid-cols-2 md:text-left">
        <div className="flex flex-col items-center justify-center sm:mt-4 md:items-start">
          <img src="/images/Collage.png" alt="imagen" className="w-full sm:w-3/4" />
        </div>
        <div className="flex flex-col items-center justify-center px-10 sm:px-16 md:mt-6">
          <img src="/images/mainTitle.png" className="w-full sm:w-2/3 md:w-3/4" />
          <div className="mt-6 flex space-x-4 justify-center">
            <Link href="https://www.instagram.com/qrosisonrie/">
              <img src="icons/logoInstagram.png" className="h-8 w-8" />
            </Link>
            <Link href="https://www.facebook.com/p/Queretaro-Si-Sonrie-100064085523281/?locale=es_LA">
              <img src="icons/logoFacebook.png" className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </section>

      {/* Misión / Visión */}
      <section className="grid min-h-screen md:grid-cols-2 md:text-left xl:mt-6">
        <div className="flex flex-col items-center justify-center sm:h-[40rem] md:mt-4 md:shrink-0 xl:mt-20">
          <img src="/images/elipse1.png" alt="imagen" className="w-3/4 sm:w-5/6 md:w-full" />
        </div>
        <div className="flex flex-col items-center sm:mt-6 md:mt-6 xl:mt-6">
          <h1 className="text-4xl font-bold sm:text-5xl">Conócenos...</h1>
          <p className="mt-4 sm:ml-6 sm:text-lg md:ml-8 md:text-xl text-justify max-w-screen-md">
            Nuestra misión es atender a todos los pacientes con fisura labio palatina que se encuentren radicando en la ciudad de Querétaro...
          </p>
        </div>
      </section>

      {/* Visión */}
      <section className="grid min-h-screen md:grid-cols-2 md:text-left">
        <div className="flex flex-col items-center sm:h-[40rem] md:mt-6 md:shrink-0 xl:mt-20">
          <h1 className="text-4xl font-bold sm:text-5xl">Visión</h1>
          <p className="mt-4 sm:ml-6 sm:text-lg md:ml-8 md:text-xl text-justify max-w-screen-md">
            Nuestra meta es alcanzar estándares de calidad en el protocolo de atención, así como desarrollar proyectos de investigación...
          </p>
          <h1 className="text-4xl font-bold text-[#FF4141] text-center mt-8">
            ¡Sigue sonriendo con nosotros!
          </h1>
        </div>
        <div className="flex justify-center sm:mt-6 md:mt-6 xl:mt-6">
          <Carousel images={images} />
        </div>
      </section>

      {/* Servicios */}
      <section className="p-6 sm:mt-32 sm:h-screen sm:w-full md:mt-32 lg:mt-[20rem] xl:mt-[18rem]">
        <h1 className="text-3xl sm:text-6xl text-center mb-6">Servicios</h1>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((servicio, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="flex items-center space-x-4">
                <Icon img={servicio.img} />
                <span className="text-center">
                  <h2 className="font-bold text-xl">{servicio.titulo}</h2>
                  <p className="text-sm sm:text-base">{servicio.descripción}</p>
                </span>
              </div>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
