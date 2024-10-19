import { Decorations, Icon } from "./_components/atoms/Decorations";
import { Carousel } from "./_components/atoms/Carousel";
import { servicios } from "./constants";
import MainTitle from "./_components/atoms/MainTitle";
import ImageWithContent from "./_components/organisms/ImageWithContent";
import CarouselWithContent from "./_components/organisms/CarouselWithContent";
import Banner from "./_components/organisms/Banner";
import ContentCarouselWithContent from "./_components/organisms/ContentCarouselWithContent";
import Donar from "./_components/atoms/Donar";

export default function Home() {
  const images = [
    "/images/601.png",
    "/images/602.png",
    "/images/603.png",
    "/images/604.png",
    "/images/605.png",
  ];

  const items = [
    {
      titulo: "Odontopediatría",
      contenido:
        "Actividades preventivas y correctivas de los dientes de deciduos.",
      urlImagen: "/images/odoPed.png",
    },
    {
      titulo: "Odontología",
      contenido:
        "Odontología infantil 1x4 a las 9 - 13 años. Cirugía ortognática",
      urlImagen: "/images/odo.png",
    },
    {
      titulo: "Ortopedia pre-quirúrgica",
      contenido: "Conformadores nasales.",
      urlImagen: "/images/ortoPre.png",
    },
    {
      titulo: "Ortopedia",
      contenido: "Post nam. Has y hyrax controles verticales y transversales.",
      urlImagen: "/images/orto.png",
    },
    {
      titulo: "Terapia de Lenguaje",
      contenido: "",
      urlImagen: "/images/tl.png",
    },
    {
      titulo: "Cirugía plástica",
      contenido: "Queilo, palato, velo, nasorino.",
      urlImagen: "/images/ciru.png",
    },
    {
      titulo: "Maxilofacial",
      contenido: "Terceros molares, cirugía ortognática.",
      urlImagen: "/images/maxi.png",
    },
    {
      titulo: "Preventiva",
      contenido: "Actividades preventivas, caries, control de higiene.",
      urlImagen: "/images/prev.png",
    },
  ];

  return (
    <>
      <Banner
        leftImageSrc="/images/Collage.png"
        leftImageAlt="Descripción de la imagen a la izquierda"
        logoSrc="/images/mainTitle.png"
        logoAlt="Logo de la organización"
        leftImageWidth={500} // Ajusta según tu diseño
        leftImageHeight={300} // Ajusta según tu diseño
        logoWidth={624} // Ajusta según tu diseño
        logoHeight={175} // Ajusta según tu diseño
      />

      <main className="mx-auto mb-24 mt-24 flex max-w-[80%] flex-col items-center gap-24">
        <MainTitle
          title="El Instituto Queretano para la Atención de Enfermedades Congénitas (IQUEC)"
          color="text-black-500"
          size="text-5xl"
        />
        <div className="container mx-auto">
          <ImageWithContent
            imageSrc="/images/elipse1.png" // Reemplaza con tu imagen
            imageAlt="Descripción de la imagen"
            title="Conócenos..."
            text="Nuestra misión es atender a todos los pacientes con fisura labio palatina que se encuentren radicando en la ciudad de Querétaro, teniendo acceso a un tratamiento multidisciplinario de alta calidad, llevado a cabo por especialistas calificados en el protocolo de atención. Para ello todo nuestro personal médico y dental es voluntario en el proyecto, donando sus honorarios médicos."
            titleColor="text-black" // Puedes usar cualquier clase de Tailwind
            textColor="text-gray-700" // Clase de color para el texto
            backgroundColor="bg-white" // Fondo del contenido
            isImageLeft={true} // Imagen a la izquierda
            borderRadius={true} // Bordes redondeados
            imageWidth={500} // Ancho de la imagen
            imageHeight={300} // Alto de la imagen
          />
        </div>
        <div className="container mx-auto">
          <CarouselWithContent
            images={images}
            title="Visión"
            text="Nuestra meta es alcanzar estándares de calidad en el protocolo de atención, así como desarrollar proyectos de investigación para mejorar la atención multidisciplinaria. Deseamos seguir siendo una fundación económicamente autosustentable para poder trabajar con finanzas transparentes y no depender de donativos, los cuales pueden ser variables."
            titleColor="text-black" // Puedes usar cualquier clase de Tailwind
            textColor="text-gray-700" // Clase de color para el texto
            backgroundColor="bg-white" // Fondo del contenido
            isCarouselLeft={false} // Imagen a la izquierda
            borderRadius={true} // Bordes redondeados
          >
            <div className="flex flex-col items-center justify-center gap-5">
              <h2 className="text-2xl text-red-500">
                ¡Sigue sonriendo con nosotros!
              </h2>
              <Donar />
            </div>
          </CarouselWithContent>
        </div>
        <div className="container mx-auto">
          <ContentCarouselWithContent
            items={items}
            title="Nuestros Servicios"
            text="Explora los servicios que ofrecemos para ti."
            titleColor="text-black"
            textColor="text-gray-700"
            backgroundColor="bg-white"
            borderRadius={true}
          />
        </div>
      </main>
    </>
  );
}
