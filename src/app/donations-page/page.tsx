import { getServerAuthSession } from "~/server/auth";
import { Decorations } from "~/app/_components/atoms/Decorations";
import CopyToClipboard from "~/app/_components/Atoms/CopyToClipboard";

export default async function Home() {
  const session = await getServerAuthSession();


  return (

    <main className="">
    {/*<main className="relative flex min-h-screen flex-col items-center justify-center bg-gray text-black">*/}
        
        {/*Space for navbar*/}
        <section className="h-24 invisible"></section>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-y-0 lg:gap-x-8 mx-4 lg:mx-36">
  {/* Imagen o placeholder */}
  <div className="h-[200px] w-full mt-5 lg:my-auto flex justify-center items-center">
    <img
      src="images/donations/team_photo_donations_cropped.jpeg"
      className="border-[1rem] lg:border-[2rem] border-blue-700 rounded-[1.7rem] h-auto w-full max-w-md lg:max-h-[650px]"
    />
  </div>

  <section className="lg:col-start-2 p-6 lg:p-10 max-w-full lg:max-w-[40rem] flex flex-col items-center mx-auto mt-14 lg:mt-0">
    <div className="p-4 lg:p-6">
      <h1 className="font-extrabold text-3xl lg:text-5xl text-center">
        ¡Muchas gracias!
      </h1>
      <p className="font-bold text-center text-lg lg:text-xl mt-6">
        Tu donativo nos servirá para ayudar a niños de todo Querétaro.
        Dona a la siguiente cuenta:
      </p>

      <div className="grid grid-cols-[30%,70%] grid-rows-[repeat(3,auto)] text-left text-lg lg:text-xl mt-6 gap-y-4">
        <p className="font-semibold">Banco</p>
        <p>Inbursa</p>
        <p className="font-semibold my-auto">Cuenta</p>
        <div>
          <CopyToClipboard text="500 086 475 04" />
        </div>
        <p className="font-semibold my-auto">Clabe</p>
        <div>
          <CopyToClipboard text="0366 8050 0086 4750 48" />
        </div>
      </div>
    </div>
  </section>
</div>


        {/* Before and after photos */}
        <div className="lg:mt-20">
          <p className="flex flex-col items-center font-bold text-2xl lg:text-4xl">
            Ayuda a un tratamiento más de fisuras labio palatinas.
            <br></br>
            <br></br>
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-[auto,auto,auto,auto] lg:grid-rows-[auto,auto] bg-red-600 mx-3 lg:mx-20 rounded-[1.7rem]">
            <p className="col-start-1 row-start-1 text-center text-2xl lg:text-3xl font-semibold text-white my-4">
              Antes
            </p>
            <div className="flex justify-center">
              <img src="images/donations/before.jpeg"
              className="col-start-1 row-start-2 max-h-[250px] lg:max-h-[400px] mx-3 rounded-[1.7rem] lg:mb-7"></img>
            </div>
            <p className="col-start-1 lg:col-start-2 row-start-3 lg:row-start-1 text-center text-2xl lg:text-3xl font-semibold text-white my-4">
              Después
            </p>
            <div className="flex justify-center">
              <img src="images/donations/after.jpeg"
              className="col-start-1 lg:col-start-2 row-start-4 lg:row-start-2 max-h-[250px] lg:max-h-[400px] mx-3 rounded-[1.7rem] mb-7"></img>
            </div>
          </div>
        </div>

        {/* Space before footer */}
        <section className="h-14 invisible"></section>

        {/*
          Upper decoration
        */}
        {/* <div className="relative overflow-x-hidden">
          <div className="h-16 w-[45rem] bg-third rounded-full absolute -right-64 -z-10 top-[7rem]"></div>
          <div className="h-16 w-[45rem] bg-fifth rounded-full absolute -right-36 -z-10 top-[10rem]"></div>
        </div> */}


        {/*
          Lower decoration
        */}
        {/* <Decorations color1={"third"} color2={"fifth"} color3="fourth" className={"top-[80rem] lg:top-[50rem] -left-[2rem] md:left-[0rem] lg:left-[30rem] z-10 overflow-x-hidden"}/> */}

    </main>
  );
}
