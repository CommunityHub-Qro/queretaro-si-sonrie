import { getServerAuthSession } from "~/server/auth";
import { Decorations } from "~/app/_components/atoms/Decorations";
import CopyToClipboard from "~/app/_components/atoms/CopyToClipboard";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="">
      {/*<main className="relative flex min-h-screen flex-col items-center justify-center bg-gray text-black">*/}

      {/*Space for navbar*/}
      <section className="invisible h-24"></section>

      <div className="mx-4 grid grid-cols-1 gap-y-6 lg:mx-36 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0">
        {/* Imagen o placeholder */}
        <div className="mt-5 flex h-[200px] w-full items-center justify-center lg:my-auto">
          <img
            src="images/donations/team_photo_donations_cropped.jpeg"
            className="h-auto w-full max-w-md rounded-[1.7rem] border-[1rem] border-blue-700 lg:max-h-[650px] lg:border-[2rem]"
          />
        </div>

        <section className="mx-auto mt-14 flex max-w-full flex-col items-center p-6 lg:col-start-2 lg:mt-0 lg:max-w-[40rem] lg:p-10">
          <div className="p-4 lg:p-6">
            <h1 className="text-center text-3xl font-extrabold lg:text-5xl">
              ¡Muchas gracias!
            </h1>
            <p className="mt-6 text-center text-lg font-bold lg:text-xl">
              Tu donativo nos servirá para ayudar a niños de todo Querétaro.
              Dona a la siguiente cuenta:
            </p>

            <div className="mt-6 grid grid-cols-[30%,70%] grid-rows-[repeat(3,auto)] gap-y-4 text-left text-lg lg:text-xl">
              <p className="font-semibold">Banco</p>
              <p>Inbursa</p>
              <p className="my-auto font-semibold">Cuenta</p>
              <div>
                <CopyToClipboard text="500 086 475 04" />
              </div>
              <p className="my-auto font-semibold">Clabe</p>
              <div>
                <CopyToClipboard text="0366 8050 0086 4750 48" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Before and after photos */}
      <div className="lg:mt-20">
        <p className="flex flex-col items-center text-2xl font-bold lg:text-4xl">
          Ayuda a un tratamiento más de fisuras labio palatinas.
          <br></br>
          <br></br>
        </p>
        <div className="mx-3 grid grid-cols-1 grid-rows-[auto,auto,auto,auto] rounded-[1.7rem] bg-red-600 lg:mx-20 lg:grid-cols-2 lg:grid-rows-[auto,auto]">
          <p className="col-start-1 row-start-1 my-4 text-center text-2xl font-semibold text-white lg:text-3xl">
            Antes
          </p>
          <div className="flex justify-center">
            <img
              src="images/donations/before.jpeg"
              className="col-start-1 row-start-2 mx-3 max-h-[250px] rounded-[1.7rem] lg:mb-7 lg:max-h-[400px]"
            ></img>
          </div>
          <p className="col-start-1 row-start-3 my-4 text-center text-2xl font-semibold text-white lg:col-start-2 lg:row-start-1 lg:text-3xl">
            Después
          </p>
          <div className="flex justify-center">
            <img
              src="images/donations/after.jpeg"
              className="col-start-1 row-start-4 mx-3 mb-7 max-h-[250px] rounded-[1.7rem] lg:col-start-2 lg:row-start-2 lg:max-h-[400px]"
            ></img>
          </div>
        </div>
      </div>

      {/* Space before footer */}
      <section className="invisible h-14"></section>

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
