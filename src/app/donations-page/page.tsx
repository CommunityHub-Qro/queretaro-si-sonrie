import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import { Decorations, Icon } from "~/app/_components/atoms/Decorations";
import CopyToClipboard from "~/app/_components/atoms/CopyToClipboard";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  return (

    <main className="">
    {/*<main className="relative flex min-h-screen flex-col items-center justify-center bg-gray text-black">*/}
        
        {/*Space for navbar*/}
        <section className="h-10 invisible"></section>

        <div className="grid lg:grid-cols-2 grid-rows-[10px,550px,500px,350px] lg:grid-rows-[10px,650px,270px] mx-36">
          <section className="row-start-2 mt-32 lg:mt-16 ml-0 lg:-ml-10">
            <img src="images/donations/team_photo_donations_cropped.jpeg"
            className="border-[2rem] border-blue-700 rounded-[1.7rem] w-auto m-auto max-h-[550px] lg:max-h-[650px]"/>
          </section>
          <section className="lg:col-start-2 row-start-3 lg:row-start-2 mt-28 lg:mt-14 mx-8 lg:mx-0 lg:ml-16 p-10 max-w-[30rem] lg:max-w-[40rem] flex flex-col items-center">
            <div className="m-auto">
              <h1 className="font-extrabold text-5xl text-center">
                ¡Muchas gracias!
              </h1>
              <br></br>
              <br></br>
              <div>
                <p className="font-bold text-center text-xl m-auto">
                  Tu donativo nos servirá para ayudar a niños de todo Querétaro.
                  Dona a la siguiente cuenta:
                </p>
              </div>
              <br></br>
              <div className="font-bold text-center text-xl m-auto">
                <div className="grid grid-cols-[30%,70%] grid-rows-[50px,60px,60px]">
                  <p className="row-start-1 col-start-1 text-left">
                    Banco
                  </p>
                  <p className="row-start-1 col-start-2">
                    Inbursa
                  </p>
                  <p className="row-start-2 col-start-1 text-left">
                    Cuenta
                  </p>
                  <p className="row-start-2 col-start-2">
                    <div className="flex flex-col align-middle">
                      <CopyToClipboard text="500 086 475 04" />
                    </div>
                  </p>
                  <p className="row-start-3 col-start-1 text-left">
                    Clabe
                  </p>
                  <p className="row-start-3 col-start-2">
                    <div className="flex flex-col align-middle">
                      <CopyToClipboard text="0366 8050 0086 4750 48" />
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Before and after photos */}
        <div className="top-[80rem] lg:top-[50rem]">
          <p className="flex flex-col items-center font-bold text-3xl">
            Ayuda a un tratamiento más de fisuras labio palatinas.
            <br></br>
            <br></br>
          </p>
          <div className="grid grid-cols-2 grid-rows-[60px,300px] lg:grid-rows-[60px,450px] bg-red-600 ml-20 mr-20 rounded-[1.7rem]">
            <p className="col-start-1 row-start-1 text-center my-auto text-3xl font-semibold text-white">
              Antes
            </p>
            <img src="images/donations/before.jpeg"
            className="col-start-1 row-start-2 max-h-[250px] lg:max-h-[400px] mx-auto rounded-[1.7rem]"></img>
            <p className="col-start-2 row-start-1 text-center my-auto text-3xl font-semibold text-white">
              Después
            </p>
            <img src="images/donations/after.jpeg"
            className="col-start-2 row-start-2 max-h-[250px] lg:max-h-[400px] mx-auto rounded-[1.7rem]"></img>
          </div>
        </div>

        {/* Space before footer */}
        <section className="h-14 invisible"></section>

        {/*
          Upper decoration
        */}
        <div className="h-16 w-[45rem] bg-third rounded-full absolute -right-64 -z-10 top-[7rem]"></div>
        <div className="h-16 w-[45rem] bg-fifth rounded-full absolute -right-36 -z-10 top-[10rem]"></div>

        {/*
          Lower decoration
        */}
        <Decorations color1={"third"} color2={"fifth"} color3="fourth" className={"top-[80rem] lg:top-[50rem] -left-[2rem] md:left-[0rem] lg:left-[30rem] z-10"}/>

    </main>
  );
}
