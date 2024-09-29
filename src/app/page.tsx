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
    <main className="max-w-full">
      <section className="grid h-screen grid-cols-1 md:grid-cols-2 md:text-left">
        <div className="flex flex-col items-center justify-start md:items-start">
          <img
            src="/images/Collage.png"
            alt="imagen"
            className="h-auto max-w-full"
          />
        </div>
        <div className="flex flex-col items-center justify-start p-10 md:mt-12 md:items-start md:p-10">
          <img
            src="/images/mainTitle.png"
            alt="Main Title"
            className="h-auto max-w-full"
          />
          <div className="mt-4 flex justify-center space-x-4">
            <Link href="https://www.instagram.com/qrosisonrie/">
              <img
                src="icons/logoInstagram.png"
                className="h-8 w-8"
                alt="Instagram"
              />
            </Link>
            <Link href="https://www.facebook.com/p/Queretaro-Si-Sonrie-100064085523281/?locale=es_LA">
              <img
                src="icons/logoFacebook.png"
                className="h-8 w-8"
                alt="Facebook"
              />
            </Link>
            {/* <Decorations
              color1="fifth"
              color2="third"
              className="-z-20 hidden md:left-[40rem] md:block lg:left-[50rem] lg:block xl:left-[65rem] xl:top-[26rem] xl:block"
            />
            <Decorations
              color1="fifth"
              color2="third"
              className="absolute left-[20rem] top-[38rem] md:hidden lg:hidden xl:hidden"
            /> */}
          </div>
        </div>
      </section>
      <div className="mt-60 flex flex-col items-center md:-mt-52 md:mb-32">
        {/* <Decorations
          color1="third"
          color2="fourth"
          className="relative right-0 -z-20 h-fit md:-top-5 md:right-0 lg:top-1 xl:top-20"
        /> */}
        <h1 className="block text-center text-4xl font-bold md:w-[40rem] md:text-left">
          El Instituto Queretano para la Atención de Enfermedades Congénitas
          (IQUEC)
        </h1>
      </div>
      {/* Misión / Visión */}
      <section className="grid min-h-screen grid-cols-1 md:grid-cols-2 md:text-left">
        <div className="flex flex-col items-center justify-center md:shrink-0 md:items-center xl:mt-32">
          <img
            src="/images/elipse1.png"
            alt="imagen"
            className="w-[95%] md:-mt-20 md:w-[80%] xl:-mt-24"
          />
        </div>

        <div className="flex flex-col items-center justify-start md:items-center lg:ml-16 xl:mt-1">
          <h1 className="w-full text-center text-4xl font-bold md:ml-0 md:text-center xl:mt-8">
            Conócenos...
          </h1>
          <p className="mt-5 w-[90%] text-justify text-2xl md:ml-0 md:w-[75%]">
            Nuestra misión es atender a todos los pacientes con fisura labio
            palatina que se encuentren radicando en la ciudad de Querétaro,
            teniendo acceso a un tratamiento multidisciplinario de alta calidad,
            llevado a cabo por especialistas calificados en el protocolo de
            atención. Para ello, todo nuestro personal médico y dental es
            voluntario en el proyecto, donando sus honorarios médicos.
          </p>
        </div>
      </section>

      <section className="flex min-h-screen flex-col md:flex-row">
        {/* Columna de texto */}
        <div className="flex flex-col items-center justify-start md:w-1/2 md:shrink-0 md:items-center xl:mt-32">
          <h1 className="z-50 w-full text-center text-4xl font-bold md:text-center">
            Visión
          </h1>
          <p className="mt-5 w-[90%] text-justify text-2xl md:w-[75%]">
            Nuestra meta es alcanzar estándares de calidad en el protocolo de
            atención, así como desarrollar proyectos de investigación para
            mejorar la atención multidisciplinaria.
          </p>
          <p className="mt-5 w-[90%] text-justify text-2xl md:w-[75%]">
            Deseamos seguir siendo una fundación económicamente autosustentable
            para poder trabajar con finanzas transparentes y no depender de
            donativos, los cuales pueden ser variables.
          </p>
        </div>

        {/* Columna del carrusel */}
        <div className="flex flex-col items-center justify-center md:w-1/2 md:items-center">
          <h2 className="text-center text-4xl font-bold text-[#FF4141]">
            ¡Sigue sonriendo con <br className="block sm:hidden" /> nosotros!
          </h2>
          <div className="mt-5 max-w-lg overflow-hidden rounded-md border-[14px] border-solid border-blue-600">
            <Carousel images={images} />
          </div>
          <Link
            className="mt-5 flex h-12 w-32 items-center justify-center rounded-full bg-third py-2 text-center text-slate-100 drop-shadow-md hover:bg-[rgb(255,40,40)]"
            href={"/donar"}
          >
            Donar
          </Link>
        </div>
      </section>

      {/* Organigrama */}
      <div className="flex h-auto w-full items-center justify-center p-5">
        <div className="flex h-auto w-2/3 max-w-full">
          <img
            src={"images/organigrama.png"}
            className="h-auto w-full object-contain"
            alt="Organigrama"
          />
        </div>
      </div>

      {/* Servicios */}
      {/* <Decorations
        color1="fifth"
        color2="third"
        color3="fourth"
        className="top-[480vh] -z-20 ml-[10rem]"
        rotation="-45"
      /> */}
      <section className="w-full p-10">
        <h1 className="poppins mb-10 text-center text-6xl">Servicios</h1>

        <section className="relative h-auto">
          {/* <Decorations
            color1={"fourth"}
            color2={""}
            color3="fifth"
            className={"absolute -right-24 top-[360vh] -rotate-45"}
          />
          <Decorations
            color1={"third"}
            color2={"fourth"}
            color3="fifth"
            className={"absolute -left-36 top-[320vh] -rotate-45"}
          /> */}
          <section className="flex flex-wrap items-center justify-center gap-10">
            {servicios.map((servicio, i) => (
              <div
                key={i}
                className="flex max-w-xs flex-col items-center gap-5"
              >
                <Icon img={servicio.img} />
                <span className="text-center">
                  <h2 className="poppins text-lg font-bold">
                    {servicio.titulo}
                  </h2>
                  <span className="block w-full px-2 text-justify">
                    {servicio.descripción}
                  </span>
                </span>
              </div>
            ))}
          </section>
        </section>
      </section>
    </main>
  );
}
