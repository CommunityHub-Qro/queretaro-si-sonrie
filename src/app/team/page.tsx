import TeamMember from "../_components/organisms/TeamMember";
import MainTitle from "../_components/atoms/MainTitle";
import Content from "../_components/molecules/Content";
import { Decorations } from "../_components/atoms/Decorations";

const Team = () => {
  return (
    <main className="mx-auto mb-24 mt-24 flex max-w-[80%] flex-col items-center gap-24">
      <MainTitle
        title="¡Te presentamos a nuestro equipo!"
        color="text-black"
        size="text-5xl"
      />
      <div className="container relative mx-auto flex flex-wrap justify-center gap-24">
        <TeamMember
          name="Juan Martinez"
          role="Especialista en negocios internacionales y relaciones públicas"
          imageUrl="/images/team-img-1.png"
          titleColor="text-black"
          textColor="text-gray-500"
        />

        <TeamMember
          name="Dr. Estrada Vargas "
          role="Cirujano con maestría en farmaceutica"
          imageUrl="/images/team-img-2.png"
          titleColor="text-black"
          textColor="text-gray-500"
        />

        <TeamMember
          name="Dra. Maria Castillo"
          role="Doctora en Ciencias Médicas"
          imageUrl="/images/team-img-3.png"
          titleColor="text-black"
          textColor="text-gray-500"
        />

        <Decorations
          color1="third"
          color2="fifth"
          rotation=""
          className="right-0 top-0"
        />
      </div>
      <div className="container mx-auto flex w-full max-w-5xl flex-shrink-0 flex-grow flex-col items-center text-center">
        <Content
          title="Nuestros convenios"
          text="Hemos hecho sinergia con varias instituciones para poder lograr una mejor atención a mejores costos para nuestros pacientes."
          titleColor="text-black"
          textColor="text-gray-700"
        />
      </div>

      <div className="my-6 flex flex-wrap items-center justify-center gap-24">
        <img
          src="images/team-img-institution-1.png"
          alt="Logo de SmileTrain"
          className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-48"
        />
        <img
          src="images/team-img-institution-2.png"
          alt="Logo de Quirófanos del Valle"
          className="w-28 sm:w-32 md:w-36 lg:w-40 xl:w-48"
        />
        <img
          src="images/team-img-institution-3.png"
          alt="Logo de Rxmind Gabinete Radiológico"
          className="w-28 sm:w-32 md:w-36 lg:w-40 xl:w-48"
        />
      </div>

      <div className="my-4 flex flex-wrap items-center justify-center gap-24">
        <img
          src="images/team-img-institution-4.png"
          alt="Logo de Laboratorio de Análisis Clinicos Danthe"
          className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32"
        />
        <img
          src="images/team-img-institution-5.png"
          alt="Logo de UVM"
          className="w-36 sm:w-40 md:w-44 lg:w-48 xl:w-56"
        />
        <img
          src="images/team-img-institution-6.png"
          alt="Logo de Orthodontics Bajio"
          className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-48"
        />
      </div>

      <div className="relative my-6 flex flex-wrap items-center justify-center gap-24">
        <img
          src="images/team-img-institution-7.png"
          alt="Logo de More Brands Studio"
          className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-48"
        />
        <img
          src="images/team-img-institution-8.png"
          alt="Logo de RoberToon Ilustrador"
          className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-48"
        />
      </div>
    </main>
  );
};

export default Team;
