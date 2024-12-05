"use client";
import React from "react";
import { getRecords } from "../hooks/getRecords";
import moment from "moment";

const MONTHS = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];

const GenerateReport: React.FC = () => {
  const records = getRecords(); // { data, error, isLoading }
  moment().format("MM/DD/YYYY");

  const generateCSV = async () => {
    // Encabezados
    const headers = ["", "Pacientes atendidos"];
    const day = new Date();

    let rows = [
      [`Total`, `${records.data ? records.data.length : 0}`],
      [`Sexo:`],
      [
        `Hombres`,
        `${
          records.data
            ? records.data.filter(
                (item) => item.sex === true && item.active === true,
              ).length
            : 0
        }`,
      ],
      [
        `Mujeres`,
        `${
          records.data
            ? records.data.filter(
                (item) => item.sex === false && item.active === true,
              ).length
            : 0
        }`,
      ],
      [`Ingresos recientes:`],
      [
        `${MONTHS[day.getMonth()]} ${day.getFullYear()}`,
        `${
          records.data
            ? records.data.filter(
                (item) => item.register_date.getMonth() == day.getMonth(),
              ).length
            : 0
        }`,
      ],
      [
        `${day.getFullYear()}`,
        `${
          records.data
            ? records.data.filter(
                (item) => item.register_date.getFullYear() == day.getFullYear(),
              ).length
            : 0
        }`,
      ],
      [`Edades atendidas:`],
    ].join("\n");

    for (let i = 0; i < 18; i++) {
      rows = [
        rows,
        [
          `${i}`,
          `${
            records.data
              ? records.data.filter(
                  (item) =>
                    moment().diff(item.birth_date, "years") == i &&
                    item.active === true,
                ).length
              : 0
          }`,
        ],
      ].join("\n");
    }

    try {
      const response = await fetch("/api/Report");
      if (!response.ok) {
        throw new Error("Error fetching treatment data");
      }
      const treatments = (await response.json()) as {
        title: string;
        count: number;
      }[];

      rows = [rows, ["Tratamientos:", ""]].join("\n");
      treatments.forEach((treatment: { title: string; count: number }) => {
        rows = [rows, [treatment.title, treatment.count.toString()]].join("\n");
      });
    } catch (error) {
      console.error("Error fetching treatments:", error);
      rows = [rows, ["Error fetching treatments", ""]].join("\n");
    }

    const csvContent = [headers.join(","), rows].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={generateCSV}
      className="rounded-full border border-gray-600 px-8 py-3 text-lg font-bold hover:border-transparent hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
      style={{ alignSelf: "center" }}
    >
      Generar reporte
    </button>
  );
};

export default GenerateReport;
