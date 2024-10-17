const Team = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="flex flex-col">
        {/* Team Introduction Section */}
        <section className="mt-20 flex flex-col items-center">
          <div className="flex w-full">
            <h1 className="mb-0 ml-[5.5%] mt-[3%] w-[70%] text-[4vw] font-bold text-red-600 sm:text-3xl lg:text-5xl">
              {" "}
              ¡Te presentamos a nuestro equipo!{" "}
            </h1>

            <div className="relative w-[30%]">
              <div className="bg-specialRed shadow-dsgn absolute left-[30%] top-[28%] h-[33%] w-[70%] rounded-l-3xl"></div>
              <div className="shadow-dsgn bg-specialYellow absolute left-[10%] top-[50%] h-[33%] w-[90%] rounded-l-3xl"></div>
            </div>
          </div>

          <div className="flex w-full justify-center gap-[7.1%] pt-[5vh]">
            <div className="w-[22.6vw] text-center">
              <img
                src="images/team-img-1.png"
                alt="imagen del especialista, Juan Martinez"
                className="border-specialYellow w-[22.6vw] rounded-full border-[0.8vw]"
              />
              <h2 className="mb-[4%] mt-[10%] text-[1.5vw] font-black tracking-tighter">
                Juan Martinez
              </h2>
              <p className="text-[1.5vw] leading-7">
                Especialista en negocios <br />
                internacionales y <br />
                relaciones públicas
              </p>
            </div>

            <div className="w-[22.6vw] text-center">
              <img
                src="images/team-img-2.png"
                alt="imagen de Dr. Estrada Vargas"
                className="border-specialYellow w-[22.6vw] rounded-full border-[0.8vw]"
              />
              <h2 className="mb-[4%] mt-[10%] text-[1.5vw] font-black tracking-tighter">
                Dr. Estrada Vargas
              </h2>
              <p className="text-[1.5vw] leading-7">
                Cirujano con maestría en <br />
                farmaceutica
              </p>
            </div>

            <div className="w-[22.6vw] text-center">
              <img
                src="images/team-img-3.png"
                alt="imagen de Dra. Maria Castillo"
                className="border-specialYellow w-[22.6vw] rounded-full border-[0.8vw]"
              />
              <h2 className="mb-[4%] mt-[10%] text-[1.5vw] font-black tracking-tighter">
                Dra. Maria Castillo
              </h2>
              <p className="text-[1.5vw] leading-7">
                Doctora en Ciencias <br />
                Médicas
              </p>
            </div>
          </div>
        </section>

        {/* Institutions Section */}
        <section className="flex flex-col items-center pb-[10vh]">
          <div className="relative w-full">
            <div className="bg-specialRed shadow-dsgn absolute mt-[0.5%] h-[18.455%] w-[15%] rounded-r-3xl"></div>
            <div className="shadow-dsgn bg-specialYellow absolute mt-[2%] h-[18.455%] w-[9%] rounded-r-3xl"></div>
            <h1 className="mt-[8%] text-center text-[4.5vw] font-semibold">
              Nuestros convenios
            </h1>
          </div>
          <p className="mt-[2.5%] text-center text-[1.26vw]">
            Hemos hecho sinergia con varias instituciones para poder lograr una
            mejor atención a mejores costos para nuestros pacientes.
          </p>

          <div className="my-[3%] flex items-center justify-center gap-[12%]">
            <img
              src="images/team-img-institution-1.png"
              alt="Logo de SmileTrain"
              className="w-[15vw]"
            />
            <img
              src="images/team-img-institution-2.png"
              alt="Logo de Quirófanos del Valle"
              className="w-[22vw]"
            />
            <img
              src="images/team-img-institution-3.png"
              alt="Logo de Rxmind Gabinete Radiológico"
              className="w-[22vw]"
            />
          </div>

          <div className="my-[1%] flex items-center justify-center gap-[8%]">
            <img
              src="images/team-img-institution-4.png"
              alt="Logo de Laboratorio de Análisis Clinicos Danthe"
              className="w-[13vw]"
            />
            <img
              src="images/team-img-institution-5.png"
              alt="Logo de UVM"
              className="w-[30vw]"
            />
            <img
              src="images/team-img-institution-6.png"
              alt="Logo de Orthodontics Bajio"
              className="w-[20vw]"
            />
          </div>

          <div className="my-[3%] flex items-center justify-center gap-[10%]">
            <img
              src="images/team-img-institution-7.png"
              alt="Logo de More Brands Studio"
              className="w-[25vw]"
            />
            <img
              src="images/team-img-institution-8.png"
              alt="Logo de RoberToon Ilustrador"
              className="w-[25vw]"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Team;
