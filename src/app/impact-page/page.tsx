import Link from "next/link";
import { Decorations, Icon } from "../_components/atoms/Decorations";

const Impact = () => {
    return(

        <main>
            <section className="min-h-screen flex">
                <div className="ml-20 mt-16 w-1/2">

                    <Decorations
                        color1="fourth"
                        color2="third"
                        className="left-[65rem] -z-20 md:left-[35rem] md:mt-60 lg:mt-8 xl:left-[65rem] xl:-mt-10"
                    />

                    <h1 className="text-5xl font-bold mb-10"><span className="text-[#FF4141]">SONRISAS </span>QUE INSPIRAN</h1>
                    <h3 className="text-3xl font-bold">Cada sonrisa recuperada es un testimonio de esperanza y transformación</h3>

                    <Decorations
                        color1="third"
                        color2="fourth"
                        className="relative right-[40rem] -z-20 md:-top-5 md:right-[20rem] lg:right-[20rem] lg:top-5 xl:right-[38rem] xl:top-8"
                    />

                    <div className="flex space-x-14  mt-20">
                        <div>
                            <h2 className="text-5xl font-bold mb-3">+ 213</h2>
                            <p className="text-sm font-bold">Pacientes satisfechos</p>
                        </div>
                        <div>
                            <h2 className="text-5xl font-bold mb-3">1200</h2>
                            <p className="text-sm font-bold whitespace-pre-line">
                            Consultas{"\n"}realizadas al año
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
                    <img className="rounded-full size-80 mt-28 ml-72" src="./images/impact/impact1.png"/>
                    <img className="rounded-full size-64 -mt-20" src="./images/impact/impact2.png"/>
                </div>
            </section>
            <section className="min-h-screen -mt-10">
                <div>
                    <h2 className="text-3xl font-bold text-center justify-center">CASOS DE ÉXITO</h2>
                </div>
                <div className="flex items-center justify-center space-x-9 mt-16">
                    <img className="w-52" src="./images/impact/proceso1.png"/>
                    <img className="w-52" src="./images/impact/proceso2.png"/>
                    <img className="w-52" src="./images/impact/proceso3.png"/>
                    <img className="w-52" src="./images/impact/proceso4.png"/>
                    <img className="w-52" src="./images/impact/proceso5.png"/>
                    <img className="w-52" src="./images/impact/proceso6.png"/>
                </div>
                <div className="mt-10">
                    <p>
                    Lorem ipsum dolor sit amet consectetur. Rhoncus consequat est tortor risus neque pellentesque arcu. 
                    Risus ut elementum semper sit aliquam. Parturient consectetur turpis nulla mattis aenean. 
                    Enim commodo at pellentesque sed lobortis nulla. Viverra ut quam faucibus neque. Vivamus at et sem volutpat eu amet.
                    </p>
                    <p>
                    A convallis elementum egestas pharetra orci massa senectus turpis maecenas. Vel eu platea tortor non. 
                    Gravida accumsan nisi commodo ac tellus sit viverra consequat. Ac ultrices condimentum id aenean pretium mauris quis amet. 
                    Vitae enim scelerisque vitae mollis placerat nisl. Lacus in porttitor faucibus malesuada ut nec donec. 
                    Scelerisque semper facilisis condimentum aliquam. Diam aenean euismod libero a velit sit lobortis purus habitant.
                    </p>
                    <div className="flex space-x-9">
                        <img className="w-52" src="./images/impact/before.png"/>
                        <img className="w-52" src="./images/impact/after.png"/>
                    </div>

                </div>

            </section>

        </main>
    );
}

export default Impact;