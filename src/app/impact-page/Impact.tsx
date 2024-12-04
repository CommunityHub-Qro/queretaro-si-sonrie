"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Decorations } from "../_components/atoms/Decorations";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const testimonials = [
  {
    id: 1,
    text: "Gracias a usted y todos los doctores y equipo que tienen a echo  el labor con nuestros pequeños. Dios los vendiga",
    author: "Jose Jonathan Ordaz Morales",
    rating: 5,
  },
  {
    id: 2,
    text: "Mil gracias por todo su trabajo, apoyo y seguimiento para nuestros niños. Es un equipo muy bonito y competente, mi niña va feliz a sus consultas y gracias a Dios va muy bien. Cuenten con nuestro apoyo.",
    author: "PattyRod",
    rating: 5,
  },
  {
    id: 3,
    text: "Calaverita para mis doctores de la fundación. En Querétaro Sí Sonríe, los niños felices están, con doctores que cuidan y amor les dan. Llegó la Catrina con gran decisión: ¡Doctores, vámonos ya! Es su turno hoy. Los doctores firmes les respondieron: Tenemos niños con LPH a quienes queremos, seguir ayudando, no podemos partir, sus sonrisas, Catrina, nos hacen vivir. La Catrina miró y se conmovió, a esos niños y médicos los entendió. Así que decidió quedarse a ayudar, y en Querétaro, ¡ya no para de sonrír y amar!",
    author: "",
    rating: 5,
  },
  {
    id: 4,
    text: "Doctora, a usted y a todo el equipo de IQUEC, nuestro más sincero y honesto agradecimiento eterno por la invaluable labor que han hecho por todos nuestros pequeños.",
    author: "",
    rating: 5,
  },
  {
    id: 5,
    text: "Muchísimas gracias por lo mucho que nos ayudan",
    author: "",
    rating: 5,
  },
  {
    id: 6,
    text: "Dios les bendiga a todos por tan hermoso labor.",
    author: "Angle Ortiz Licea",
    rating: 5,
  },
  {
    id: 7,
    text: "Mil gracias por todo lo que hacen por nuestros niños. Dios los bendiga",
    author: "Luis Angle Garcia Lph",
    rating: 5,
  },
  {
    id: 8,
    text: "Son unos angeles de verdad.",
    author: "Ramon Armando Peralta Mancilla",
    rating: 5,
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

  const chartData = [200, 500, 300, 450, 800, 500];
  const labels = ['2019', '2020', '2021', '2022', '2023', '2024'];

  // Set a fixed height for the chart
  const fixedHeight = 150; // Fixed height of 150 pixels

  // Calculate the maximum value in chartData to scale heights
  const maxValue = Math.max(...chartData);

  // Reference for Doughnut Chart canvas and Chart instance
  const doughnutChartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart<"doughnut"> | null>(null);

  useEffect(() => {
    const ctx = doughnutChartRef.current?.getContext('2d');

    // If a chart instance already exists, destroy it before creating a new one
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (ctx) {
      // Register the ChartDataLabels plugin
      Chart.register(ChartDataLabels);

      // Create a new doughnut chart and store the instance in chartInstanceRef
      chartInstanceRef.current = new Chart<"doughnut", number[], unknown>(ctx, {
        type: 'doughnut',
        data: {
          labels: ['55 (0.4%)', '44 (16.3%)', '39 (14.4%)', '27 (10.0%)', '24 (8.9%)', '24 (8.9%)'],
          datasets: [{
            label: 'Procedimientos',
            data: [0.4, 16.3, 14.4, 10.0, 8.9, 8.9], // Data is explicitly of type number[]
            backgroundColor: [
              '#007bff', // Blue
              '#ff5733', // Red
              '#ffc300', // Yellow
              '#28a745', // Green
              '#fd9644', // Orange
              '#8e44ad', // Purple
            ],
            borderWidth: 5,
            borderColor: '#ffffff',
            hoverOffset: 4,
            borderRadius: 10, // Rounded corners for the arcs
          }]
        },
        options: {
          responsive: true,
          cutout: '60%', // Controls the doughnut thickness
          plugins: {
            legend: {
              display: false // Hide the default legend
            },
            tooltip: {
              enabled: false // Disable tooltips
            },
            // Data labels plugin to show numbers
            datalabels: {
              color: '#000', // Set the text color
              font: {
                weight: 'bold',
                size: 14
              },
              formatter: (value, context) => {
                const label = context.chart.data.labels?.[context.dataIndex] || '';
                return label;
              },
              anchor: 'end', // Align the label outside the segment
              align: 'end',
              offset: 10,
            }
          },
          layout: {
            padding: {
              top: 30,
              bottom: 30,
              left: 90,
              right: 60,
            }
          },
          elements: {
            arc: {
              borderRadius: 10, // Rounded edges for the arcs
            },
          },
        },
      });
    }

    // Cleanup function to destroy the chart on component unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <main className="bg-white">
      <section className="flex flex-col lg:flex-row min-h-screen items-center lg:items-start">
        <div className="px-6 lg:ml-20 mt-16 lg:w-1/2 text-center lg:text-left">
          <h1 className="mb-10 text-4xl lg:text-5xl font-bold">
            <span className="text-[#FF4141]">SONRISAS </span>QUE INSPIRAN
          </h1>
          <h3 className="text-2xl lg:text-3xl font-bold">
            Cada sonrisa recuperada es un testimonio de esperanza y transformación
          </h3>
          <div className="mt-12 lg:mt-20 flex flex-col lg:flex-row lg:space-x-14 space-y-10 lg:space-y-0">
            <div>
              <h2 className="mb-3 text-4xl lg:text-5xl font-bold">+ 213</h2>
              <p className="text-sm font-bold">Pacientes satisfechos</p>
            </div>
            <div>
              <h2 className="mb-3 text-4xl lg:text-5xl font-bold">1200</h2>
              <p className="whitespace-pre-line text-sm font-bold">
                Consultas{"\n"}realizadas al año
              </p>
            </div>
            <div>
              <h2 className="mb-3 text-4xl lg:text-5xl font-bold">10 años</h2>
              <p className="whitespace-pre-line text-sm font-bold">
                De experiencia y de compartir{"\n"} sonrisas
              </p>
            </div>
          </div>
          <div className="mt-12 lg:mt-20 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10">
            <Link
              className="h-full w-full rounded-full bg-third px-3 py-4 text-center font-bold text-white"
              href="#testimonios"
            >
              Testimonios
            </Link>
            <Link
              className="h-full w-full rounded-full bg-secondary px-3 py-4 text-center font-bold text-white"
              href="#estadisticas"
            >
              Estadísticas
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center mt-12 lg:mt-0 lg:gap-y-10 space-y-8 lg:space-y-0">
          <img
            className="w-44 lg:w-60 lg:mt-20 lg:ml-5 rounded-full"
            src="./images/impact/impact1.png"
            alt="Impact 1"
          />
          <img
            className="w-48 lg:w-64 lg:ml-40 rounded-full -mt-8 lg:-mt-0"
            src="./images/impact/impact2.png"
            alt="Impact 2"
          />
        </div>
      </section>


      {/* Nueva sección de Testimonios */}
      <section id="testimonios" className="py-16">
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
              if (!testimonial) return null; // Safeguard to avoid undefined error
              return (
                <div
                  key={testimonial.id}
                  className={`mx-4 rounded-lg bg-gray-100 p-6 ${
                    offset === 0 ? "w-1/2" : "w-1/4 opacity-60"
                  }`}
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
        <div className="mb-8 grid grid-cols-2 justify-items-center gap-y-5 gap-x-4 mx-5 lg:flex lg:flex-row lg:justify-center lg:space-x-4">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="relative">
              <img
                className="w-full lg:w-48 rounded-lg object-cover"
                src={`./images/impact/proceso${index}.png`}
                alt={`Proceso ${index}`}
              />
            </div>
          ))}
        </div>

        {/* Contenedor flex para texto y las imágenes de cirugías */}
        <div className="flex flex-col items-start justify-between md:items-center lg:flex-row">
          {/* Texto descriptivo */}
          <div className="mb-8 max-w-2xl md:mb-0 md:pr-8 px-10 md:pb-10">
            <p className="mb-4 text-base">
              Lorem ipsum dolor sit amet consectetur. Rhoncus consequat est
              tortor risus neque pellentesque arcu. Risus ut elementum semper
              sit aliquam. Parturient consectetur turpis nulla mattis aenean.
              Enim commodo at pellentesque sed lobortis nulla. Viverra ut quam
              faucibus neque. Vivamus at et sem volutpat eu amet.
            </p>
            <p className="text-base">
              A convallis elementum egestas pharetra orci massa senectus turpis
              maecenas. Vel eu platea tortor non. Gravida accumsan nisi commodo
              ac tellus sit viverra consequat. Ac ultrices condimentum id aenean
              pretium mauris quis amet. Vitae enim scelerisque vitae mollis
              placerat nisl.
            </p>
          </div>

          {/* Imágenes before/after a la derecha */}
          <div className="flex lg:space-x-4 justify-evenly">
            <img
              className="w-2/5 rounded-lg object-cover"
              src="./images/impact/before.png"
              alt="Before"
            />
            <img
              className="w-2/5 rounded-lg object-cover"
              src="./images/impact/after.png"
              alt="After"
            />
          </div>
        </div>
      </section>
      <section id="estadisticas" className="flex flex-col mt-20">
          <div className="flex min-w-full">
            <h2 className="lg:text-[4vw] text-center  text-4xl w-[100%] text-black-600 font-bold mb-0">
              ESTADÍSTICAS
            </h2>
          </div>

          {/* Flex Container for Chart and Text */}
          <div className="flex flex-col lg:flex-row justify-center lg:items-start w-full mt-10">
            {/* Bar Chart Section with 70% Width */}
            <div className="basis-[60%]">
              <div className="px-4">
                <div className="w-full px-10 lg:px-20 py-10">
                  <div>
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-xl text-gray-800 font-bold leading-tight">PACIENTES ATENDIDOS</h2>
                        <p className="mb-2 text-gray-600 text-sm">CADA AÑO</p>
                      </div>
                    </div>

                    <div className="my-8 relative">
                      {/* Bar Chart */}
                      <div className="flex items-end mb-2 space-x-2" style={{ height: `${fixedHeight}px` }}>
                        {chartData.map((data, index) => (
                          <div key={index} className="relative w-1/6">
                            <div
                              style={{ height: `${(data / maxValue) * fixedHeight}px` }} // Scale height based on max value
                              className={`rounded-lg transition ease-in duration-200 ${
                                data === maxValue ? 'bg-blue-600' : 'bg-blue-300'
                              }`}
                            >
                              {/* Display the data value above the bar */}
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 text-gray-800 text-sm font-bold">
                                {data}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Labels */}
                      <div className="border-t border-gray-400 mt-2"></div>
                      <div className="flex items-end space-x-2 mt-2">
                        {labels.map((label, index) => (
                          <div key={index} className="relative w-1/6">
                            <div className="text-center text-sm text-gray-700 font-bold">{label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Section with 30% Width */}
            <div className="basis-[40%] px-10 lg:pr-10 lg:py-20 flex felx-col justify-center items-center">
              <p className="text-gray-800 text-base leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Curabitur bibendum ante ut feugiat semper. 
                  Integer interdum tincidunt nulla id ullamcorper. 
                  Aliquam erat volutpat. 
                  Phasellus vitae dui finibus, euismod ante at, tristique leo. 
                  Proin dictum justo at ante varius, 
                  facilisis euismod tellus mattis. 
                  Suspendisse rutrum ultricies consectetur. <br /><br />
                  Integer sagittis lectus eu ultricies vehicula.
                  Praesent turpis ante, tempus sit amet elit quis, porta placerat est. 
                </p>
            </div>
          </div>

          {/* Doughnut Chart Section */}
          <div className="flex flex-col lg:flex-row w-full mx-auto lg:pl-20 justify-center items-center lg:justify-start lg:items-start">
            <h1 className="order-1 lg:order-2 text-2xl font-bold text-center pt-10 lg:pt-0 lg:text-left lg:mt-20 lg:ml-10 w-[60%]">
              PORCENTAJES DE PROCEDIMIENTOS <br /> REALIZADOS AL AÑO
            </h1>
            <div className="order-2 lg:order-1 w-[90%] lg:w-[40%]">
              <canvas ref={doughnutChartRef} id="myDoughnutChart"></canvas>
            </div>
          </div>
        </section>
    </main>
  );
};

export default Impact;
