import Image from "next/image";
import { HydrateClient } from "~/trpc/server";
import Map from "../_components/atoms/map";
import { Inter } from "next/font/google";
import ContactForm from "../_components/organisms/ContactForm";
import ContactInfo from "../_components/molecules/ContactInfo";
import Content from "../_components/molecules/Content";
import MainTitle from "../_components/atoms/MainTitle";
import SocialMediaLinks from "../_components/molecules/SocialMediaLinks";
import { Decorations } from "../_components/atoms/Decorations";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
});

export default function ContactPage() {
  return (
    <HydrateClient>
      <Image
        src="/banner.jpg"
        alt="Banner"
        layout="responsive"
        width={1554}
        height={661}
        className="object-cover"
      />
      <div className={`h-auto w-full ${inter.className}`}>
        <div className="relative left-1/2 top-[70%] flex h-[40%] w-[80%] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center rounded-2xl border border-white/20 bg-white bg-opacity-70 p-4 text-center text-black shadow-lg backdrop-blur-lg sm:h-[35%] sm:w-[70%] md:h-[30%] md:w-[60%] lg:h-[25%] lg:w-[50%] xl:h-[20%] xl:w-[40%]">
          <Content
            title="¡Comunícate!"
            text="Escríbenos un mensaje o llámanos para resolver cualquier duda que tengas."
            titleColor="text-black"
            textColor="text-gray-700"
          />
        </div>
      </div>

      <main className="mx-auto mb-24 mt-24 flex max-w-[80%] flex-col items-center gap-24">
        <div className="relative flex w-full flex-col items-center justify-center gap-12">
          <MainTitle
            title="Siguenos en redes sociales"
            color="text-black-500"
            size="text-5xl"
          />
          <SocialMediaLinks />
        </div>
        <section className="wrap relative flex w-full flex-wrap justify-center">
          <div className="flex w-full flex-col gap-6 md:w-1/2">
            <Map />
            <ContactInfo
              iconSrc="/icons/location.png"
              text="Calle 123 - Queretaro / Mexico"
              alt="Location icon"
              iconClassName="h-8"
              textClassName="text-base md:text-2xl text-gray-700"
            />
            <ContactInfo
              iconSrc="/icons/phone_icon.png"
              text="+52 443 212 5245"
              alt="Phone icon"
              iconClassName="h-8"
              textClassName="text-base md:text-2xl text-gray-700"
            />
          </div>
          <div className="mt-12 flex w-full sm:mt-0 md:w-1/2">
            <ContactForm />
          </div>
          <Decorations
            color1="fifth"
            color2="fourth"
            color3="third"
            rotation=""
            className="bottom-10 right-0"
          />
        </section>
      </main>
    </HydrateClient>
  );
}
