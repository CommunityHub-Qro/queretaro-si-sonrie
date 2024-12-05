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
      <section className="grid h-screen md:h-[26rem] grid-cols-1 md:grid-cols-2 items-start justify-start px-4 md:px-10">
        <div className="flex flex-col items-start justify-start">
          <img
            src="/images/Collage.png"
            alt="imagen"
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col items-start justify-start p-10 mt-8 sm:mt-28 md:mt-12">
          <img src="/images/mainTitle.png" alt="main title" />
          <div className="flex space-x-4 mt-6">
            <Link href="https://www.instagram.com/qrosisonrie/">
              <img src="icons/logoInstagram.png" className="h-8 w-8" alt="Instagram" />
            </Link>
            <Link href="https://www.facebook.com/p/Queretaro-Si-Sonrie-100064085523281/?locale=es_LA">
              <img src="icons/logoFacebook.png" className="h-8 w-8" alt="Facebook" />
            </Link>
          </div>
          <Decorations
            color1="third"
            color2="fourth"
            className="hidden md:block absolute top-[20rem] right-[10rem] h-1"
          />
          <Decorations
            color1="fifth"
            color2="third"
            className="absolute left-[40rem] top-[26rem] hidden lg:block"
          />
        </div>
      </section>

      <section className="mt-8 md:mt-16 px-6 md:px-10">
        <h1 className="text-3xl font-bold text-center sm:text-4xl md:text-5xl">
          El Instituto Queretano para la Atención de Enfermedades Congénitas
          (IQUEC)
        </h1>
      </section>

      {/* Misión / Visión */}
      <section className="grid min-h-screen grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-10 mt-12 md:mt-20">
        <div className="relative">
          <img
            src="/images/elipse1.png"
            alt="imagen"
            className="w-full max-w-[80%] sm:max-w-full md:max-w-[95%]"
          />
          <Decorations
            color1="third"
            color2="fourth"
            className="absolute top-[20rem] left-[30rem] hidden md:block"
          />
        </div>
        <div className="flex flex-col items-start justify-start mt-8 sm:mt-0">
          <h2 className="text-4xl font-bold text-left">Conócenos...</h2>
          <p className="text-lg sm:text-xl md:text-2xl mt-4 text-justify max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
            Nuestra misión es atender a todos los pacientes con fisura labio
            palatina que se encuentren radicando en la ciudad de Querétaro,
            teniendo acceso a un tratamiento multidisciplinario de alta calidad,
            llevado a cabo por especialistas calificados en el protocolo de
            atención. Para ello, todo nuestro personal médico y dental es
            voluntario en el proyecto, donando sus honorarios médicos.
          </p>
        </div>
      </section>

      <section className="grid min-h-screen grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-10 mt-12 md:mt-20">
        <div className="flex flex-col items-start justify-start">
          <h2 className="text-4xl font-bold">Visión</h2>
          <p className="text-lg sm:text-xl md:text-2xl mt-4 text-justify">
            Nuestra meta es alcanzar estándares de calidad en el protocolo de
            atención, así como desarrollar proyectos de investigación para
            mejorar la atención multidisciplinaria.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl mt-4 text-justify">
            Deseamos seguir siendo una fundación económicamente autosustentable
            para poder trabajar con finanzas transparentes y no depender de
            donativos, los cuales pueden ser variables.
          </p>
          <h3 className="text-center text-3xl font-bold text-[#FF4141] mt-8">
            ¡Sigue sonriendo con nosotros!
          </h3>
          <div className="mt-6 sm:mt-12 md:mt-16">
            <Carousel images={images} />
          </div>
          <Link
            className="mt-6 inline-block text-center py-2 px-6 rounded-full bg-third text-white hover:bg-red-500 transition duration-300"
            href="/donations-page"
          >
            Donar
          </Link>
        </div>
      </section>

      {/* Sonrisas que inspiran */}
      <section className="mt-20 px-6 md:px-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          <span className="text-red-500">SONRISAS</span> QUE INSPIRAN
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[20%]">
            <img
              src="/images/antes1.png"
              alt="Antes"
              className="w-full rounded-lg border-[5px] border-yellow-300"
            />
            <img
              src="/images/despues1.png"
              alt="Después"
              className="w-full rounded-lg border-[5px] border-yellow-300 mt-4"
            />
          </div>
          <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[20%]">
            <img
              src="/images/antes2.png"
              alt="Antes"
              className="w-full rounded-lg border-[5px] border-blue-600"
            />
            <img
              src="/images/despues2.png"
              alt="Después"
              className="w-full rounded-lg border-[5px] border-blue-600 mt-4"
            />
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="mt-20 px-6 md:px-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">Servicios</h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {servicios.map((servicio, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <Icon img={servicio.img} />
              <h3 className="text-xl font-semibold mt-4">{servicio.titulo}</h3>
              <p className="text-lg sm:text-xl mt-2">{servicio.descripción}</p>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
