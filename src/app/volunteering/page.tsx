import ImageWithContent from "../_components/organisms/ImageWithContent";
import Content from "../_components/molecules/Content";
import { Decorations } from "../_components/atoms/Decorations";

const CorpusVolunteering = () => {
  return (
    <main className="mx-auto mb-24 mt-24 flex max-w-[80%] flex-col items-center gap-24">
      <div className="container relative mx-auto">
        <ImageWithContent
          imageSrc="/images/Voluntariado3.jpeg" // Reemplaza con tu imagen
          imageAlt="Descripción de la imagen"
          title="Servicio social"
          text="En Querétaro Sí Sonríe el servicio social es una actividad de formación y servicio a la comunidad de fisura labio platina en la ciudad de Querétaro. Se ponen en práctica las habilidades profesionales adquiridas en la licenciatura, para formar parte del protocolo de atención multidisciplinario en la atención de los pacientes que presentan esta condición."
          titleColor="text-black" // Puedes usar cualquier clase de Tailwind
          textColor="text-gray-700" // Clase de color para el texto
          backgroundColor="bg-white" // Fondo del contenido
          isImageLeft={true} // Imagen a la izquierda
          borderRadius={true} // Bordes redondeados
          imageWidth={150} // Ancho de la imagen
          imageHeight={200} // Alto de la imagen
        />

        <Decorations
          color1="fourth"
          color2="third"
          rotation=""
          className="right-0 top-0"
        />
      </div>
      <div className="container mx-auto">
        <div className="item-center flex w-full flex-wrap">
          <div className="mb-24 mt-24 max-w-[80%] rounded-2xl lg:w-1/2">
            <Content
              title="Actividades"
              text=""
              titleColor="text-black"
              textColor="text-gray-700"
            >
              <ul className="list-disc pb-12 pr-24 text-base text-gray-700 md:text-2xl">
                <li>
                  Conocer el protocolo de atención multidisciplinario de fisura
                  labio palatina.
                </li>
                <li>Asistentes quirúrgicas en el área de quirófano.</li>
                <li>
                  Asistente en el área de Odontopediatría, Ortodoncia y
                  Prequirúrgica.
                </li>
                <li>Programa de LPH sin caries.</li>
                <li>
                  Odontología general que incluye las áreas de preventiva y
                  profilaxis, operatoria y elaboración de aparatos de
                  laboratorio.
                </li>
              </ul>
            </Content>
          </div>
          <div className="mb-24 mt-24 max-w-[80%] rounded-2xl bg-secondary lg:w-1/2">
            <Content
              title="¿Qué voy a aprender?"
              text=""
              titleColor="text-white"
              textColor="text-white"
            >
              <ul className="list-disc pb-12 pl-12 pr-12 text-base text-white md:text-2xl">
                <li>Protocolo de atención en pacientes con LPH.</li>
                <li>Trabajo multidisciplinario entre área dental y médica.</li>
                <li>
                  Protocolos en quirófano para la atención de pacientes con LPH.
                </li>
                <li>Atención preventiva en pacientes con LPH.</li>
              </ul>
            </Content>
          </div>
        </div>
      </div>
      <div className="container relative mx-auto flex w-full max-w-5xl flex-shrink-0 flex-grow flex-col items-center text-center">
        <Content
          title="Voluntariados"
          text="Para poder ser voluntario es necesario ser especialista en cualquiera de las áreas de trabajo, tener experiencia en el manejo de los pacientes con LPH, donar tiempo y conocimientos. Saber trabajar en equipo y reportar información."
          titleColor="text-black"
          textColor="text-gray-700"
        />
      </div>
      <div className="container relative mx-auto">
        <ImageWithContent
          imageSrc="/images/Voluntariado2.png" // Reemplaza con tu imagen
          imageAlt="Descripción de la imagen"
          title="¿Qué voy a realizar?"
          text=""
          titleColor="text-white" // Puedes usar cualquier clase de Tailwind
          textColor="text-white" // Clase de color para el texto
          backgroundColor="bg-secondary" // Fondo del contenido
          isImageLeft={false} // Imagen a la izquierda
          borderRadius={true} // Bordes redondeados
          imageWidth={150} // Ancho de la imagen
          imageHeight={200} // Alto de la imagen
        >
          <ul className="list-disc pb-12 pl-12 pr-12 text-base text-white md:text-2xl">
            <li>
              Actividades profesionales en tu área de trabajo una vez por
              semana.
            </li>
            <li>Reporte de actividades mensuales en formato y fotografía.</li>
          </ul>
        </ImageWithContent>
        <Decorations
          color1="fifth"
          color2="fourth"
          rotation=""
          className="left-0 top-0"
        />
      </div>
      <div className="container mx-auto">
        <ImageWithContent
          imageSrc="/images/Voluntariado.png" // Reemplaza con tu imagen
          imageAlt="Descripción de la imagen"
          title="Características"
          text=""
          titleColor="text-white" // Puedes usar cualquier clase de Tailwind
          textColor="text-white" // Clase de color para el texto
          backgroundColor="bg-secondary" // Fondo del contenido
          isImageLeft={true} // Imagen a la izquierda
          borderRadius={true} // Bordes redondeados
          imageWidth={150} // Ancho de la imagen
          imageHeight={200} // Alto de la imagen
        >
          <ul className="list-disc pb-12 pl-12 pr-12 text-base text-white md:text-2xl">
            <li>Pasión por su trabajo.</li>
            <li>Tener gusto por atender pacientes pediátricos.</li>
            <li>Gusto de trabajar en equipo.</li>
            <li>Colaborar en actividades extra en Pro de la fundación</li>
          </ul>
        </ImageWithContent>
      </div>
    </main>
  );
};

export default CorpusVolunteering;