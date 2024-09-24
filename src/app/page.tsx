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
      <section className="grid h-screen flex-col items-start justify-start md:grid-cols-2 md:text-left">
        <div className="h-fit-content flex flex-col items-start justify-start md:flex md:shrink-0">
          <img src="/images/Collage.png" alt="imagen" />
        </div>
        <div className="-mt-20 flex flex-col items-start justify-start p-10 md:mt-12 md:flex md:shrink-0">
          <img src="/images/mainTitle.png" />
          <div className="bottom-0 left-0 m-10 flex space-x-4">
            <Link href="https://www.instagram.com/qrosisonrie/">
              <img src="icons/logoInstagram.png" className="h-8 w-8" />
            </Link>
            <Link href="https://www.facebook.com/p/Queretaro-Si-Sonrie-100064085523281/?locale=es_LA">
              <img src="icons/logoFacebook.png" className="h-8 w-8" />
            </Link>
            <Decorations
              color1="fifth"
              color2="third"
              className="-z-20 hidden md:left-[40rem] md:block lg:left-[50rem] lg:block xl:left-[65rem] xl:top-[26rem] xl:block"
            />
            <Decorations
              color1="fifth"
              color2="third"
              className="absolute left-[20rem] top-[38rem] md:hidden lg:hidden xl:hidden"
            />
          </div>
        </div>
      </section>

      <div className="mt-60 flex md:-mt-52 md:mb-32 md:shrink-0 xl:h-28">
        <Decorations
          color1="third"
          color2="fourth"
          className="relative right-[30rem] -z-20 h-fit md:-top-5 md:right-[30rem] lg:right-[30rem] lg:top-1 xl:right-[30rem] xl:top-20"
        />
        <h1 className="block text-4xl font-bold sm:-ml-80 md:-ml-80 md:-mt-8 md:w-[40rem] lg:right-[30rem] lg:mt-5 xl:right-[30rem] xl:mt-20">
          El Instituto Queretano para la Atención de Enfermedades Congénitas
          (IQUEC)
        </h1>
      </div>

      {/* Misión / Visión */}
      <section className="grid min-h-screen flex-col items-start justify-start md:grid-cols-2 md:text-left">
        <div className="flex min-h-screen flex-col items-start justify-start md:flex md:shrink-0 xl:mt-32">
          <img
            src="/images/elipse1.png"
            alt="imagen"
            className="top-[2%] w-[95%] md:-mt-20 xl:-mt-24"
          />
          <Decorations
            color1="third"
            color2="fourth"
            className="relative left-[65rem] -z-20 md:left-[35rem] md:mt-60 lg:mt-8 xl:left-[65rem] xl:-mt-24"
          />
        </div>
        <div className="flex flex-col items-start justify-start sm:-mt-32 sm:ml-16 md:-ml-20 md:-mt-11 md:flex md:shrink-0 lg:-mt-20 xl:mt-1">
          <h1 className="-mt-[3%] ml-5 w-[100%] text-4xl font-bold md:ml-[30%] xl:mt-8">
            Conócenos...
          </h1>
          <p className="overflow-wrap: break-word ml-5 mt-[5%] w-[75%] text-justify text-2xl md:ml-[15%]">
            Nuestra misión es atender a todos los pacientes con fisura labio
            palatina que se encuentren radicando en la ciudad de Querétaro,
            teniendo acceso a un tratamiento multidisciplinario de alta calidad,
            llevado a cabo por especialistas calificados en el protocolo de
            atención. Para ello, todo nuestro personal médico y dental es
            voluntario en el proyecto, donando sus honorarios médicos.
          </p>
        </div>
      </section>

      <section className="grid min-h-screen flex-col items-start justify-start md:grid-cols-2 md:text-left">
        <div className="flex min-h-screen flex-col items-start justify-start sm:mt-10 sm:flex sm:shrink-0 md:-mt-32 md:flex md:shrink-0 xl:-mt-44">
          <h1 className="z-50 w-[100%] text-4xl font-bold sm:ml-20 sm:mt-[1%] md:ml-[110%]">
            Visión
          </h1>
          <p className="overflow-wrap: break-word mt-[5%] w-[75%] text-justify text-2xl sm:ml-20 md:ml-[110%]">
            Nuestra meta es alcanzar estándares de calidad en el protocolo de
            atención, así como desarrollar proyectos de investigación para
            mejorar la atención multidisciplinaria.
          </p>
          <p className="overflow-wrap: break-word mt-[5%] w-[75%] text-justify text-2xl sm:ml-20 md:ml-[110%]">
            Deseamos seguir siendo una fundación económicamente autosustentable
            para poder trabajar con finanzas transparentes y no depender de
            donativos, los cuales pueden ser variables.
          </p>
          <h1 className="overflow-wrap: break-word ml-5 w-[100%] text-center text-4xl font-bold text-[#FF4141] sm:top-[10%] sm:mb-5 sm:ml-[1%] md:ml-[95%] xl:ml-[95%] xl:mt-[3%]">
            ¡Sigue sonriendo con <br></br>nosotros!
          </h1>
          <div className="max-w-lg rounded-md border-[14px] border-solid border-blue-600 sm:ml-24 sm:mt-[0%] md:-mt-[29rem] lg:-mt-[82%] xl:-mt-[60%]">
            <Carousel images={images} />
          </div>
          <Link
            className="h-full w-32 items-center rounded-full bg-third py-2 text-center text-slate-100 drop-shadow-md hover:bg-[rgb(255,40,40)] sm:ml-[42%] sm:mt-3 md:ml-[48%] lg:ml-[45%] lg:mt-[5%] xl:ml-[138%] xl:mt-20"
            href={"/donar"}
          >
            Donar
          </Link>
        </div>
      </section>

      {/* Organigrama */}
      <div className="text-bold poppins -mt-48 flex h-screen flex-col items-center p-5 text-6xl">
        <div className="flex h-full items-center">
          <img src={"images/organigrama.png"} className="h-full w-full drop-shadow-md" />
        </div>
      </div>
      {/* Servicios */}
      <Decorations
        color1="fifth"
        color2="third"
        color3="fourth"
        className="top-[480vh] -z-20 ml-[10rem]"
        rotation="-45"
      />
      <section className="h-screen w-full p-10">
        <h1 className="poppins mb-10 text-center text-6xl">Servicios</h1>

        <section className="h-screen">
          <Decorations
            color1={"fourth"}
            color2={""}
            color3="fifth"
            className={"-right-24 top-[360vh] -rotate-45"}
          />
          <Decorations
            color1={"third"}
            color2={"fourth"}
            color3="fifth"
            className={"-left-36 top-[320vh] -rotate-45"}
          />
          {/* <Decorations color1={"third"} color2={"fourth"} color3="fifth" className={"top-[400vh] right-[30rem] -rotate-45 border-2 border-red-600 w-32"}/> */}
          <section className="flex h-screen flex-col flex-wrap items-center gap-10">
            {servicios.map((servicio, i) => (
              <div key={i}>
                <div className="flex items-center gap-5">
                  <Icon img={servicio.img} />
                  <span>
                    <h2 className="poppins">{servicio.titulo}</h2>
                    <span className="inter block w-96">
                      {servicio.descripción}
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </section>
        </section>
      </section>
    </main>
  );
}
