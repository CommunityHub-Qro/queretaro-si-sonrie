const Team = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="flex flex-col">
        {/* Team Introduction Section */}
        <section className="flex flex-col items-center mt-5">
          <div className="flex w-full">
            <h1 className="text-[6vw] sm:text-3xl md:text-[4vw] lg:text-5xl w-[70%] text-red-600 font-bold mt-[3%] ml-[5.5%] mb-0"> ¡Te presentamos a nuestro equipo! </h1>

            <div className="relative w-[30%]">
                <div className="absolute left-[30%] w-[70%] top-[38%] md:top-[20%] lg:top-[28%] h-[2vh] lg:h-[6vh] bg-third rounded-l-3xl shadow-dsgn"></div>
                <div className="absolute left-[10%] w-[90%] top-[50%] h-[2vh] lg:h-[6vh] bg-fourth rounded-l-3xl shadow-dsgn"></div>
            </div>
          </div>
          
          <div className="flex justify-center gap-[7.1%] py-[8vh] w-full">
            <div className="w-[5z0vw] text-center">
              <img 
                src="images/nosotros.jpg" 
                alt="imagen del equipo" 
                className="w-[80vw] lg:w-[50vw] rounded-3xl border-[0.8vw] border-fourth"
              />
            </div>
          </div>
        </section>
        
        {/* Institutions Section */}
        <section className="flex flex-col items-center pb-[10vh]">
          <div className="relative w-full">
            <div className="absolute w-[23%] lg:w-[15%] mt-[0.5%] h-[2vh] lg:h-[6vh] bg-third rounded-r-3xl shadow-dsgn"></div>
            <div className="absolute w-[15%] lg:w-[9%] mt-[3%] lg:mt-[2%] h-[2vh] lg:h-[6vh] bg-fourth rounded-r-3xl shadow-dsgn"></div>
            <h1 className="text-[4.5vw] md:text-[4vw] lg:text-[4.5vw] text-center mt-[8%] font-semibold">Nuestros convenios</h1>
          </div>
          <p className="text-[3vw] mx-[2%] md:text-[2.3vw] lg:text-[1.26vw] mt-[2.5%] text-center">
            Hemos hecho sinergia con varias instituciones 
            para poder lograr una mejor atención a mejores 
            costos para nuestros pacientes.
          </p>
          
          <div className="flex justify-center items-center gap-[12%] my-[3%]">
            <img 
              src="images/team-img-institution-1.png" 
              alt="Logo de DIF Estatal Querétaro" 
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
          
          <div className="flex justify-center items-center gap-[8%] my-[1%]">
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
          
          <div className="flex justify-center items-center gap-[10%] my-[3%]">
            <img 
              src="images/team-img-institution-7.png" 
              alt="Logo de Universidad Cuauhtemoc" 
              className="w-[25vw]"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Team;