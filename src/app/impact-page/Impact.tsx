"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Decorations, Icon } from "../_components/atoms/Decorations";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur. Amet pharetra vitae porttitor diam. Odio consectetur aliquam lobortis risus donec molestie efficiend. Lobortis convallis id mauris amet orci id ultricies. Nibh vitae mi in habitant nisi amet quam. Etiam consectetur faucibus elit venenatis congue odio ac. Id commodo mi erat adipiscing ac proin a vitae ut.",
    author: "Madre de Benny",
    rating: 4,
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur. Amet pharetra vitae porttitor diam. Odio consectetur aliquam lobortis risus donec molestie efficiend.",
    author: "Madre de Jenny",
    rating: 5,
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur. Amet pharetra vitae porttitor diam. Odio consectetur aliquam lobortis risus donec molestie efficiend.",
    author: "Padre de Tommy",
    rating: 4,
  },
];

const Impact = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  const getTestimonialIndex = (offset: number) => {
    return (currentIndex + offset + testimonials.length) % testimonials.length;
  };

  return (
    <main className="bg-white">
      <section className="flex min-h-screen">
        <div className="ml-20 mt-16 w-1/2">
          <Decorations
            color1="fourth"
            color2="third"
            className="left-[65rem] -z-20 md:left-[35rem] md:mt-60 lg:mt-8 xl:left-[65rem] xl:-mt-10"
          />
          <h1 className="mb-10 text-5xl font-bold">
            <span className="text-[#FF4141]">SONRISAS </span>QUE INSPIRAN
          </h1>
          <h3 className="text-3xl font-bold">
            Cada sonrisa recuperada es un testimonio de esperanza y
            transformación
          </h3>
          <Decorations
            color1="third"
            color2="fourth"
            className="relative right-[40rem] -z-20 md:-top-5 md:right-[20rem] lg:right-[20rem] lg:top-5 xl:right-[38rem] xl:top-8"
          />
          <div className="mt-20 flex space-x-14">
            <div>
              <h2 className="mb-3 text-5xl font-bold">+ 213</h2>
              <p className="text-sm font-bold">Pacientes satisfechos</p>
            </div>
            <div>
              <h2 className="mb-3 text-5xl font-bold">1200</h2>
              <p className="whitespace-pre-line text-sm font-bold">
                Consultas{"\n"}realizadas al año
              </p>
            </div>
            <div>
              <h2 className="mb-3 text-5xl font-bold">10 años</h2>
              <p className="whitespace-pre-line text-sm font-bold">
                De experiencia y de compartir{"\n"} sonrisas
              </p>
            </div>
          </div>
          <div className="mt-20 space-x-10">
            <Link
              className="h-full w-32 rounded-full bg-third px-12 py-4 text-center font-bold text-white"
              href={""}
            >
              {" "}
              Testimonios
            </Link>
            <Link
              className="h-full w-32 rounded-full bg-secondary px-12 py-4 text-center font-bold text-white"
              href={""}
            >
              {" "}
              Estadísticas
            </Link>
          </div>
        </div>
        <div>
          <img
            className="ml-72 mt-28 size-80 rounded-full"
            src="./images/impact/impact1.png"
            alt="Impact 1"
          />
          <img
            className="-mt-20 size-64 rounded-full"
            src="./images/impact/impact2.png"
            alt="Impact 2"
          />
        </div>
      </section>

      {/* Nueva sección de Testimonios */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold">
            CONOCE LOS TESTIMONIOS DE NUESTROS PACIENTES
          </h2>
          <div className="relative flex items-center justify-center">
            <button onClick={prevTestimonial} className="absolute left-0 z-10">
              <ChevronLeft size={40} />
            </button>

            {[-1, 0, 1].map((offset) => {
              const testimonial = testimonials[getTestimonialIndex(offset)];
              return (
                <div
                  key={testimonial.id}
                  className={`mx-4 rounded-lg bg-gray-100 p-6 ${offset === 0 ? "w-1/2" : "w-1/4 opacity-60"}`}
                >
                  <div className="mb-4 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={24}
                        fill={star <= testimonial.rating ? "gold" : "none"}
                        stroke={star <= testimonial.rating ? "gold" : "gray"}
                      />
                    ))}
                  </div>
                  <p className="mb-4">
                    {offset === 0
                      ? testimonial.text
                      : testimonial.text.substring(0, 100) + "..."}
                  </p>
                  <p className="font-semibold">{testimonial.author}</p>
                </div>
              );
            })}

            <button onClick={nextTestimonial} className="absolute right-0 z-10">
              <ChevronRight size={40} />
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl py-16">
        <h2 className="mb-12 text-center text-4xl font-bold">CASOS DE ÉXITO</h2>

        {/* Contenedor de imágenes de ortodoncia */}
        <div className="mb-8 flex justify-center space-x-4">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="relative">
              <img
                className="h-40 w-48 rounded-lg object-cover"
                src={`./images/impact/proceso${index}.png`}
                alt={`Proceso ${index}`}
              />
            </div>
          ))}
        </div>

        {/* Contenedor flex para texto y las imágenes de cirugías */}
        <div className="flex flex-col items-start justify-between md:flex-row">
          {/* Texto descriptivo */}
          <div className="mb-8 max-w-2xl md:mb-0 md:pr-8">
            <p className="mb-4 text-sm">
              Lorem ipsum dolor sit amet consectetur. Rhoncus consequat est
              tortor risus neque pellentesque arcu. Risus ut elementum semper
              sit aliquam. Parturient consectetur turpis nulla mattis aenean.
              Enim commodo at pellentesque sed lobortis nulla. Viverra ut quam
              faucibus neque. Vivamus at et sem volutpat eu amet.
            </p>
            <p className="text-sm">
              A convallis elementum egestas pharetra orci massa senectus turpis
              maecenas. Vel eu platea tortor non. Gravida accumsan nisi commodo
              ac tellus sit viverra consequat. Ac ultrices condimentum id aenean
              pretium mauris quis amet. Vitae enim scelerisque vitae mollis
              placerat nisl.
            </p>
          </div>

          {/* Imágenes before/after a la derecha */}
          <div className="flex space-x-4">
            <img
              className="h-40 w-48 rounded-lg object-cover"
              src="./images/impact/before.png"
              alt="Before"
            />
            <img
              className="h-40 w-48 rounded-lg object-cover"
              src="./images/impact/after.png"
              alt="After"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Impact;
