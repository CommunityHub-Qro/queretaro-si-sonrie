// classname = color / padding / tamaño / flex / flex-properties / el resto
import { Decorations, Icon } from "../_components/atoms/Decorations";

const CorpusVolunteering = () => {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Body */}
      <div className="pt-0 md:pt-12">
        {/* Sección de imagen y texto */}
        <div className="md:flex md:flex-row md:py-12">
          <div className="relative md:w-1/2 flex items-center justify-center">
            <img
              src="images/wave.png"
              className="md:-ml-20 -mt-96 2xl:-mt-48 w-full object-cover"
            />
          </div>
          <div className="md:w-1/2 flex flex-col items-center md:items-start px-8">
            <Decorations
              color1="fourth"
              color2="third"
              className="md:top-[60 vh] md:sticky left-[10vh] md:left-[60vh] overflow-hidden"
            />
            <div className="relative z-10 p-8">
              <div>
                {" "}
                <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left mt-24 md:mt-0"> Servicio Social </h1>{" "}
              </div>
            </div>

            <div className="mt-6 text-justify">
              <p>
                En <strong>Querétaro Sí Sonríe</strong>, el servicio social es una
                actividad de formación y servicio a la comunidad de fisura labio
                platina en la ciudad de Querétaro.
              </p>
              <p className="mt-4">
                Se ponen en práctica las habilidades profesionales adquiridas en la
                licenciatura, para formar parte del protocolo de atención
                multidisciplinario en la atención de los pacientes que presentan esta
                condición.
              </p>
            </div>

          </div>

          <div className="relative md:absolute md:w-1/2 flex justify-center mt-6 md:-mt-4">
            <img
              src="images/Voluntariado3.jpeg"
              alt="Voluntariado"
              className="h-auto w-80 md:w-96 rounded-3xl"
            />
          </div>
        </div>

        {/* Sección de dos bloques */}
        <div className="flex flex-col md:flex-row text-white mt-16">
          <div className="md:w-1/2 p-4 md:p-8">
            <div className="rounded-3xl bg-secondary p-2">
              <h3 className="p-6 md:p-8 text-xl md:text-2xl font-bold">
                ¿Qué actividades voy a realizar?
              </h3>
              <ul className="list-disc pb-8 px-10">
                <li>
                  Conocer el protocolo de atención multidisciplinario de fisura
                  labio palatina.
                </li>
                <li>Asistentes quirúrguicas en el área de quirófano.</li>
                <li>
                  Asistente en el área de odontopediatría , Ortodoncia y
                  Prequirúrgica.
                </li>
                <li>Programa de LPH sin caries.</li>
                <li>
                  Odontología general que incluye las áreas preventivas y
                  profiliaxis, operatoria y elaboración de aparatos de
                  laboratorio.
                </li>
              </ul>
            </div>
          </div>

          <div className="md:w-1/2 p-4 md:p-8">
            <div className="rounded-3xl bg-secondary p-2 pb-20">
              <h3 className="p-6 md:p-8 text-xl md:text-2xl font-bold">¿Qué voy a aprender?</h3>
              <ul className="list-disc mb:pb-8 px-10">
                <li>Trabajo multidisciplinario entre área dental y médica.</li>
                <li>
                  Protocolos en quirófano para la atención de pacientes con LPH.
                </li>
                <li>Atención preventiva con pacientes de LPH.</li>
              </ul>
            </div>
          </div>
          <Decorations
            color1={"fourth"}
            color2={"fifth"}
            className={"absolute -right-80 top-[120vh]"}
          />
        </div>

        {/* Sección de requisitos y voluntariado */}
        <div className="flex flex-row justify-evenly p-4">
          <h1 className="text-4xl md:text-5xl font-bold">Voluntariado</h1>
          <Decorations
            color1={"fourth"}
            color2={"secondary"}
            color3={"fifth"}
            className={"-right-10 top-[320vh] md:top-[200vh] -rotate-45 overflow-hidden"}
          />
        </div>
        <div className="flex flex-col items-center text-justify justify-center p-8 md:p-10 md:pl-20">
          <p>
            Para poder ser voluntario es necesario ser especialista en
            cualquiera de las áreas de trabajo, tener experiencia en el manejo
            de los pacientes con LPH, donar tiempo y conocimientos. Saber
            trabajar en equipo y reportar información.
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <div className="m-4 md:m-10 md:mt-14 flex flex-col rounded-3xl bg-secondary p-4 text-white">
              <div className="p-8 text-xl md:text-2xl font-bold">¿Qué voy a realizar?</div>
              <ul className="list-disc pb-8 pl-12">
                <li>
                  Actividades profesionales en tu área de trabajo una vez por
                  semana.
                </li>
                <li>
                  Reporte de actividades mensuales en formato y fotografía.
                </li>
              </ul>
            </div>
            <div className="md:mt-24 flex flex-col items-center justify-evenly p-4">
              <img
                src="images/Voluntariado.png"
                alt="Imagen de la actividad"
                className="rounded-3xl"
              />
            </div>
          </div>

          <div className="md:w-1/2 md:p-10 p-6">
            <div className="flex flex-col items-center justify-evenly p-4">
              <img
                src="images/Voluntariado2.png"
                alt="Imagen de la actividad"
                className="rounded-3xl"
              />
            </div>
            <Decorations
              color1={"fourth"}
              color2={"secondary"}
              className={"left-0 top-[340vh] md:top-[230vh] -rotate-45 overflow-hidden"}
            />

            <div className="md:m-10 mt-11 mb-10 md:mb-0 flex flex-col rounded-3xl bg-secondary p-4 text-white">
              <div className="p-8 text-xl md:text-2xl font-bold">Características</div>
              <ul className="list-disc pb-8 pl-12">
                <li>Pasión por su trabajo.</li>
                <li>Tener gusto por atender pacientes pediátricos.</li>
                <li>Gusto de trabajar en equipo.</li>
                <li>Colaborar en actividades extra en Pro de la fundación</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CorpusVolunteering;
