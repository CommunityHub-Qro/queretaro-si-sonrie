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
      <section className="invisible h-10"></section>

      {/*<section className="h-16 invisible"></section>*/}

      <div className="mx-36 grid grid-rows-[10px,550px,500px,350px] lg:grid-cols-2 lg:grid-rows-[10px,650px,270px]">
        <section className="row-start-2 ml-0 mt-32 lg:-ml-10 lg:mt-16">
          <img
            src="images/donations/team_photo_donations_cropped.jpeg"
            className="m-auto max-h-[500px] w-auto rounded-[1.7rem] border-[2rem] border-blue-700 lg:max-h-[650px]"
          />
        </section>
        <section className="row-start-3 mx-8 mt-28 flex max-w-[30rem] flex-col items-center p-10 lg:col-start-2 lg:row-start-2 lg:mx-0 lg:ml-16 lg:mt-14 lg:max-w-[40rem]">
          <div className="m-auto">
            <h1 className="text-center text-5xl font-extrabold">
              ¡Muchas gracias!
            </h1>
            <br></br>
            <br></br>
            <div>
              <p className="m-auto text-center text-xl font-bold">
                Tu donativo nos servirá para ayudar a niños de todo Querétaro.
                Dona al siguiente número de cuenta:
              </p>
            </div>
            <br></br>
            <br></br>
            <div className="flex flex-col align-middle">
              <CopyToClipboard text="2345676543234543" />
            </div>
          </div>
        </section>
      </div>

      {/*
          Upper decoration
        */}
      <div className="bg-specialRed absolute -right-64 top-[7rem] -z-10 h-16 w-[45rem] rounded-full"></div>
      <div className="bg-specialBlue absolute -right-36 top-[10rem] -z-10 h-16 w-[45rem] rounded-full"></div>

      {/*
          Lower decoration
        <div className="h-16 w-[45rem] bg-specialRed rounded-full absolute -left-64 z-10 top-[100vh]"></div>
        <div className="h-16 w-[45rem] bg-specialBlue rounded-full absolute -left-36 z-10 top-[110vh]"></div>
        <div className="h-16 w-[45rem] bg-specialYellow rounded-full absolute -left-36 z-10 top-[120vh]"></div>
        */}
      <Decorations
        color1={"specialRed"}
        color2={"specialBlue"}
        color3="specialYellow"
        className={
          "-left-[2rem] top-[80rem] z-10 md:left-[0rem] lg:left-[30rem] lg:top-[50rem]"
        }
      />
    </main>
  );
}
