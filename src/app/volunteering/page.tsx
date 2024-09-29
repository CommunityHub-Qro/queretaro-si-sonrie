import { Decorations, Icon } from "../_components/atoms/Decorations";

const CorpusVolunteering = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Body */}
      <div className="pt-12">
        {/* Sección de imagen y texto */}
        <div className="flex flex-col-reverse py-12 md:flex-row">
          <div className="relative flex w-full items-center justify-center md:w-1/2">
            <img
              src="images/wave.png"
              className="-ml-20 -mt-48 w-full object-cover"
              alt=""
            />

            <img
              src="images/Voluntariado3.jpeg"
              className="absolute h-auto w-64 rounded-3xl md:w-80"
              alt="Imagen de la actividad"
            />
          </div>

          <div className="w-full md:w-1/2">
            <div className="p-8">
              <div>
                {/* <h1 className="text-3xl md:text-5xl font-bold"> Servicio Social </h1> */}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-4">
              <p>
                En <strong>Querétaro Sí Sonríe</strong> el servicio social es
                una actividad de formación y servicio a la comunidad de fisura
                labio platina en la ciudad de Querétaro.
              </p>
              <br />
              <p>
                Se ponen en práctica las habilidades profesionales adquiridas en
                la licenciatura, para formar parte del protocolo de atención
                multidisciplinario en la atención de los pacientes que presentan
                esta condición.
              </p>
            </div>
          </div>
        </div>

        {/* Sección de dos bloques */}
        <div className="flex flex-col text-white md:flex-row">
          <div className="w-full p-8 md:w-1/2">
            <div className="rounded-3xl bg-secondary p-2">
              <h3 className="p-8 text-xl font-bold md:text-2xl">
                ¿Qué actividades voy a realizar?
              </h3>
              <ul className="list-disc pb-8 pl-6 md:pl-12">
                <li>
                  Conocer el protocolo de atención multidisciplinario de fisura
                  labio palatina.
                </li>
                <li>Asistentes quirúrgicas en el área de quirófano.</li>
                <li>
                  Asistente en el área de odontopediatría, ortodoncia y
                  prequirúrgica.
                </li>
                <li>Programa de LPH sin caries.</li>
                <li>
                  Odontología general que incluye las áreas preventivas y
                  profilaxis, operatoria y elaboración de aparatos de
                  laboratorio.
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full p-8 md:w-1/2">
            <div className="rounded-3xl bg-secondary p-2 pb-12 md:pb-20">
              <h3 className="p-8 text-xl font-bold md:text-2xl">
                ¿Qué voy a aprender?
              </h3>
              <ul className="list-disc pb-8 pl-6 md:pl-12">
                <li>Trabajo multidisciplinario entre área dental y médica.</li>
                <li>
                  Protocolos en quirófano para la atención de pacientes con LPH.
                </li>
                <li>Atención preventiva con pacientes de LPH.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sección de requisitos y voluntariado */}
        <div className="flex flex-col justify-center p-10 md:flex-row md:justify-evenly">
          <h1 className="text-3xl font-bold md:text-5xl">Voluntariado</h1>
        </div>

        <div className="flex flex-col items-center justify-center p-10">
          <p className="text-center md:text-left">
            Para poder ser voluntario es necesario ser especialista en
            cualquiera de las áreas de trabajo, tener experiencia en el manejo
            de los pacientes con LPH, donar tiempo y conocimientos. Saber
            trabajar en equipo y reportar información.
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="m-10 mt-14 flex flex-col rounded-3xl bg-secondary p-4 text-white">
              <div className="p-8 text-xl font-bold md:text-2xl">
                ¿Qué voy a realizar?
              </div>
              <ul className="list-disc pb-8 pl-6 md:pl-12">
                <li>
                  Actividades profesionales en tu área de trabajo una vez por
                  semana.
                </li>
                <li>
                  Reporte de actividades mensuales en formato y fotografía.
                </li>
              </ul>
            </div>
            <div className="mt-12 flex flex-col items-center justify-evenly p-4 md:mt-24">
              <img
                src="images/Voluntariado.png"
                alt="Imagen de la actividad"
                className="w-64 rounded-3xl md:w-auto"
              />
            </div>
          </div>

          <div className="w-full p-10 md:w-1/2">
            <div className="flex flex-col items-center justify-evenly p-4">
              <img
                src="images/Voluntariado2.png"
                alt="Imagen de la actividad"
                className="w-64 rounded-3xl md:w-auto"
              />
            </div>

            <div className="m-10 mt-11 flex flex-col rounded-3xl bg-secondary p-4 text-white">
              <div className="p-8 text-xl font-bold md:text-2xl">
                Características
              </div>
              <ul className="list-disc pb-8 pl-6 md:pl-12">
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
