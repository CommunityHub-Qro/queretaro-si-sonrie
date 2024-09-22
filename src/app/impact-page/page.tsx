import Link from "next/link";
import { Decorations, Icon } from "../_components/atoms/Decorations";

const Impact = () => {
    return(
        <section className="min-h-screen flex felx-col">
            <div className="ml-20 mt-20 w-1/2">
                <h1 className="text-5xl font-bold mb-10"><span className="text-[#FF4141]">SONRISAS </span>QUE INSPIRAN</h1>
                <h3 className="text-3xl font-bold">Cada sonrisa recuperada es un testimonio de esperanza y transformación</h3>

                <Decorations
                    color1="third"
                    color2="fourth"
                    className="relative right-[30rem] -z-20 h-fit md:-top-5 md:right-[30rem] lg:right-[30rem] lg:top-1 xl:right-[30rem] xl:top-20"
                />

                <div className="flex space-x-14  mt-32">
                    <div>
                        <h2 className="text-5xl font-bold mb-3">+ 97%</h2>
                        <p className="text-sm font-bold">De pacientes satisfechos</p>
                    </div>
                    <div>
                        <h2 className="text-5xl font-bold mb-3">400</h2>
                        <p className="text-sm font-bold whitespace-pre-line">
                        Operaciones{"\n"}exitosas en el año
                        </p>
                    </div>
                    <div>
                        <h2 className="text-5xl font-bold mb-3">10 años</h2>
                        <p className="text-sm font-bold whitespace-pre-line">De experiencia y de compartir{"\n"} sonrisas</p>
                    </div>
                </div>

                <div className="mt-20 space-x-10">
                    <Link className="h-full w-32 text-center rounded-full bg-third text-white font-bold px-12 py-4" href={""}> Testimonios</Link>
                    <Link className="h-full w-32 text-center rounded-full bg-secondary text-white font-bold px-12 py-4" href={""}> Estadísticas</Link>
                </div>
            </div>
            <div >
                <Decorations
                color1="fourth"
                color2="third"
                className="top-[60 vh] sticky left-[60vh]"
                />
                <img className="rounded-full size-80 mt-28 ml-72" src="./images/impact1.png"/>
                <img className="rounded-full size-64 -mt-20" src="./images/impact2.png"/>
            </div>
        </section>
    );
}

export default Impact;