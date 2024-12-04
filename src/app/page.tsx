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
      <section className="grid h-screen flex-col items-start justify-start md:h-[26rem] md:grid-cols-2 md:text-left">
        <div className="h-fit-content flex flex-col items-start justify-start md:flex md:shrink-0">
          <img src="/images/Collage.png" alt="imagen" className="sm:mt-0" />
        </div>
        <div className="xs:mt-0 flex flex-col items-start justify-start p-10 sm:mt-28 md:mt-12 md:flex md:shrink-0">
          <img src="/images/mainTitle.png" />
          <div className="bottom-0 left-0 m-10 flex space-x-4">
            <Link href="https://www.instagram.com/qrosisonrie/">
              <img src="icons/logoInstagram.png" className="h-8 w-8" />
            </Link>
            <Link href="https://www.facebook.com/p/Queretaro-Si-Sonrie-100064085523281/?locale=es_LA">
              <img src="icons/logoFacebook.png" className="h-8 w-8" />
            </Link>
            <Decorations
              color1="third"
              color2="fourth"
              className="xl:hiden xs:top-[20rem] xs:right-[15rem] xs:h-1 sm:hidden md:hidden lg:hidden 2xl:hidden"
            />
            <Decorations
              color1="fifth"
              color2="third"
              className="xs:hidden -z-20 md:left-[40rem] md:block lg:left-[50rem] lg:block xl:left-[65rem] xl:top-[26rem] xl:block"
            />
            <Decorations
              color1="fifth"
              color2="third"
              className="xs:left-[10rem] sm:left-[20rem] sm:top-[36rem] md:hidden lg:hidden xl:hidden"
            />
          </div>
        </div>
      </section>

      <div className="xs:mt-2 flex sm:mt-60 md:mb-28 md:mt-0 md:shrink-0 xl:h-28">
        <Decorations
          color1="third"
          color2="fourth"
          className="xs:right-[40rem] relative right-[30rem] -z-20 h-fit md:-top-5 md:right-[30rem] lg:right-[30rem] lg:top-4 xl:right-[30rem] xl:top-32"
        />
        <h1 className="xs:-ml-[33rem] xs:mt-0 xs:text-xl xs:font-bold sm:visible sm:mt-0 sm:text-3xl sm:font-bold md:-ml-80 md:-mt-8 md:w-[40rem] lg:right-[30rem] lg:mt-12 lg:text-3xl xl:right-[30rem] xl:mt-40 xl:flex-auto xl:text-3xl">
          El Instituto Queretano para la Atención de Enfermedades Congénitas
          (IQUEC)
        </h1>
      </div>

      {/* Misión / Visión */}
      <section className="grid min-h-screen flex-col items-start justify-start md:grid-cols-2 md:text-left xl:mt-10">
        <div className="xs:h-32 xs:min-h-0 flex min-h-screen flex-col items-start justify-start sm:h-[40rem] sm:min-h-0 md:mt-6 md:flex md:shrink-0 xl:mt-40">
          <img
            src="/images/elipse1.png"
            alt="imagen"
            className="xs:w-[40%] xs:left-[15rem] sm:top-[2%] sm:w-[95%] md:-mt-20 xl:-mt-24"
          />
          <Decorations
            color1="third"
            color2="fourth"
            className="relative left-[65rem] -z-20 md:left-[39rem] md:mt-52 lg:mt-8 xl:left-[65rem] xl:-mt-24"
          />
        </div>
        <div className="flex flex-col items-start justify-start sm:-mt-32 sm:ml-16 md:-ml-20 md:-mt-32 md:flex md:shrink-0 lg:-mt-24 xl:mt-10">
          <h1 className="xs:mt-0 xs:ml-10 w-[100%] text-4xl font-bold sm:-mt-[3%] sm:ml-5 md:ml-[30%] md:mt-10 lg:mt-8 xl:mt-8">
            Conócenos...
          </h1>
          <p className="xs:text-md xs:ml-8 overflow-wrap: break-word xs:w-[17rem] ml-5 mt-[5%] w-[75%] text-justify sm:w-[60%] sm:text-2xl md:ml-[15%] md:text-xl xl:text-2xl">
            Nuestra misión es atender a todos los pacientes con fisura labio
            palatina que se encuentren radicando en la ciudad de Querétaro,
            teniendo acceso a un tratamiento multidisciplinario de alta calidad,
            llevado a cabo por especialistas calificados en el protocolo de
            atención. Para ello, todo nuestro personal médico y dental es
            voluntario en el proyecto, donando sus honorarios médicos.
          </p>
        </div>
      </section>

      <section className="lg:mt grid min-h-screen flex-col items-start justify-start md:grid-cols-2 md:text-left">
        <div className="xs:ml-10 flex min-h-screen flex-col items-start justify-start sm:mt-10 sm:flex sm:shrink-0 md:-mt-32 md:flex md:shrink-0 xl:-mt-44">
          <h1 className="xs:ml-3 z-50 w-[100%] text-4xl font-bold sm:ml-20 sm:mt-[1%] md:ml-[110%]">
            Visión
          </h1>
          <p className="overflow-wrap: break-word xs:text-sm xs:w-[17rem] mt-[5%] w-[75%] text-justify sm:ml-12 sm:w-[60%] sm:text-2xl md:ml-[110%]">
            Nuestra meta es alcanzar estándares de calidad en el protocolo de
            atención, así como desarrollar proyectos de investigación para
            mejorar la atención multidisciplinaria.
          </p>
          <p className="overflow-wrap: break-word xs:text-sm xs:w-[17rem] mt-[5%] w-[75%] text-justify sm:ml-12 sm:w-[60%] sm:text-2xl md:ml-[110%]">
            Deseamos seguir siendo una fundación económicamente autosustentable
            para poder trabajar con finanzas transparentes y no depender de
            donativos, los cuales pueden ser variables.
          </p>
          <h1 className="overflow-wrap: break-word xs:mt-4 xs:mr-44 w-[100%] text-center text-4xl font-bold text-[#FF4141] sm:top-[10%] sm:mb-5 sm:ml-[1%] md:ml-[95%] md:mt-5 lg:mt-10 xl:ml-[95%] xl:mt-[3%]">
            ¡Sigue sonriendo con <br></br>nosotros!
          </h1>
          <div className="xs:mt-5 xs:left-0 xs:mr-6 max-w-lg rounded-md border-[14px] border-solid border-blue-600 sm:ml-24 sm:mt-[0%] md:-mt-[29rem] lg:-mt-[87%] xl:-mt-[60%]">
            <Carousel images={images} />
          </div>
          <Link
            className="xs:mt-6 xs:ml-20 h-full w-32 items-center rounded-full bg-third py-2 text-center text-slate-100 drop-shadow-md hover:bg-[rgb(255,40,40)] sm:ml-[42%] sm:mt-3 md:ml-[48%] lg:ml-[45%] lg:mt-[5%] xl:ml-[138%] xl:mt-20"
            href={"/donations-page"}
          >
            Donar
          </Link>
          <Decorations
            color1="fifth"
            color2="third"
            className="-z-20 hidden md:right-[50rem] md:top-11 lg:left-[50rem] lg:hidden xl:hidden"
          />
          {/*Sonrisas que inspiran*/}
          <div className="xs:mt-14 block h-40 flex-col items-start justify-start md:mt-28 md:flex md:shrink-0 xl:ml-20 xl:mt-5">
            <h1 className="xs:text-2xl font-bold sm:ml-6 sm:mt-8 sm:w-[100%] sm:text-4xl md:ml-[30%] lg:mt-20 xl:ml-1 xl:mt-10">
              <span className="text-red-500">SONRISAS</span> QUE INSPIRAN
            </h1>

            <div className="xs:justify-start xs:h-28 flex sm:ml-8 sm:mt-10 sm:h-60 sm:justify-between md:ml-16 md:mt-10 md:flex md:shrink-0 lg:ml-16 lg:mt-10 lg:justify-between xl:ml-28">
              <img
                src="/images/antes1.png"
                alt="imagen"
                className="xs:h-24 xs:border-[5px] rounded-lg border-solid border-yellow-300 sm:h-52 sm:border-[10px] xl:mb-5 xl:ml-14 xl:mt-10"
              />

              <img
                src="/images/despues1.png"
                alt="imagen"
                className="xs:h-24 xs:border-[5px] xs:ml-5 rounded-lg border-solid border-yellow-300 sm:ml-8 sm:h-52 sm:border-[10px] md:ml-8 lg:ml-8 xl:ml-20 xl:mt-10"
              />
            </div>
            <div className="xs:justify-start xs:ml-10 flex h-60 sm:ml-20 sm:justify-between md:ml-32 md:flex md:shrink-0 lg:ml-44 xl:ml-28">
              <img
                src="/images/antes2.png"
                alt="imagen"
                className="xs:h-24 xs:w-32 xs:border-[5px] rounded-lg border-solid border-blue-600 sm:h-52 sm:w-64 sm:border-[10px] md:w-72 md:shrink-0 lg:w-72 xl:ml-80 xl:mt-20"
              />
              <img
                src="/images/despues2.png"
                alt="imagen"
                className="xs:h-24 xs:w-32 xs:ml-5 xs:border-[5px] rounded-lg border-solid border-blue-600 sm:h-52 sm:w-64 sm:border-[10px] md:ml-8 md:w-72 md:shrink-0 lg:ml-8 lg:w-72 xl:ml-20 xl:mt-20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <Decorations
        color1="fifth"
        color2="third"
        color3="fourth"
        className="xs:top-[490vh] -z-20 sm:left-[15rem] sm:top-[600vh] md:top-[480vh] md:ml-[10rem] lg:top-[445vh] lg:ml-[30rem] xl:top-[206rem] xl:ml-[55rem] xl:h-1"
        rotation="-45"
      />
      <section className="xs:mt-20 p-10 sm:mt-96 sm:h-screen sm:w-full md:mt-96 lg:mb-0 lg:mt-[30rem] xl:mt-[25rem]">
        <h1 className="xs:text-3xl poppins sm:mb-10 sm:text-center sm:text-6xl md:mt-20">
          Servicios
        </h1>

        <section className="h-screen">
          <Decorations
            color1={"fourth"}
            color2={""}
            color3="fifth"
            className={
              "xs:hidden -right-80 top-[280vh] -rotate-45 sm:hidden md:hidden lg:hidden xl:ml-[30rem]"
            }
          />
          <Decorations
            color1={"third"}
            color2={"fourth"}
            color3="fifth"
            className={
              "xs:right-[10rem] -rotate-45 sm:right-[50rem] sm:top-[560vh] md:-left-36 md:top-[380vh]"
            }
          />
          {/* <Decorations color1={"third"} color2={"fourth"} color3="fifth" className={"top-[400vh] right-[30rem] -rotate-45 border-2 border-red-600 w-32"}/> */}
          <section className="sm:flex sm:h-screen sm:flex-col sm:items-center sm:gap-10 md:flex-col lg:grid lg:grid-cols-2">
            {servicios.map((servicio, i) => (
              <div key={i}>
                <div className="xs:mt-5 sm:flex sm:items-center sm:gap-5">
                  <Icon img={servicio.img} />
                  <span>
                    <h2 className="poppins">{servicio.titulo}</h2>
                    <span className="sm:inter sm:block sm:w-96">
                      {servicio.descripción}
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </section>
        </section>
      </section>
      <br></br>
    </main>
  );
}
